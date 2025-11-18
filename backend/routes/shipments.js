const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Shipment = require('../models/Shipment');
const Address = require('../models/Address');
const auth = require('../middleware/auth');

// Calculate shipping price (simplified pricing logic)
const calculatePrice = (weight, distance, serviceType, codAmount) => {
  let basePrice = 50; // Base price in INR
  
  // Weight-based pricing (per kg)
  basePrice += weight * 20;
  
  // Service type multiplier
  const multipliers = {
    'Express': 1.5,
    'Standard': 1.0,
    'Economy': 0.8
  };
  basePrice *= multipliers[serviceType] || 1.0;
  
  // Fuel surcharge (10% of base)
  const fuelSurcharge = basePrice * 0.1;
  
  // GST (18% of base + fuel surcharge)
  const gst = (basePrice + fuelSurcharge) * 0.18;
  
  // COD charges (2% of COD amount if applicable)
  const codCharges = codAmount > 0 ? codAmount * 0.02 : 0;
  
  const total = basePrice + fuelSurcharge + gst + codCharges;
  
  return {
    basePrice: Math.round(basePrice),
    fuelSurcharge: Math.round(fuelSurcharge),
    gst: Math.round(gst),
    codCharges: Math.round(codCharges),
    total: Math.round(total)
  };
};

// @route   POST /api/shipments
// @desc    Create a new shipment
// @access  Private
router.post(
  '/',
  [
    auth,
    body('pickupAddress').notEmpty().withMessage('Pickup address is required'),
    body('deliveryAddress').notEmpty().withMessage('Delivery address is required'),
    body('packageDetails.weight')
      .isFloat({ min: 0.1 })
      .withMessage('Weight must be at least 0.1 kg'),
    body('packageDetails.value')
      .isFloat({ min: 0 })
      .withMessage('Package value must be positive'),
    body('paymentMethod').isIn(['Prepaid', 'COD']).withMessage('Invalid payment method'),
    body('scheduledPickupDate')
      .notEmpty()
      .withMessage('Scheduled pickup date is required')
      .bail()
      .isISO8601()
      .withMessage('Scheduled pickup date must be a valid date'),
  ],
  async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { pickupAddress, deliveryAddress, packageDetails, serviceType, paymentMethod, codAmount, scheduledPickupDate, notes } = req.body;

    // Verify addresses belong to user
    const pickup = await Address.findOne({ _id: pickupAddress, userId: req.user._id });
    const delivery = await Address.findOne({ _id: deliveryAddress, userId: req.user._id });

    if (!pickup || !delivery) {
      return res.status(400).json({ message: 'Invalid address' });
    }

    // Calculate pricing
    const pricing = calculatePrice(
      packageDetails.weight,
      100, // Simplified: assume 100km distance
      serviceType || 'Standard',
      codAmount || 0
    );

    // Create shipment
    const shipment = new Shipment({
      userId: req.user._id,
      pickupAddress,
      deliveryAddress,
      packageDetails,
      serviceType: serviceType || 'Standard',
      paymentMethod,
      codAmount: codAmount || 0,
      pricing,
      paymentStatus: paymentMethod === 'Prepaid' ? 'pending' : 'pending',
      scheduledPickupDate: new Date(scheduledPickupDate),
      notes,
    });

    await shipment.save();
    await shipment.populate('pickupAddress deliveryAddress');

    res.status(201).json(shipment);
  } catch (error) {
    console.error('Create shipment error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route   GET /api/shipments
// @desc    Get all shipments for current user
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const shipments = await Shipment.find({ userId: req.user._id })
      .populate('pickupAddress deliveryAddress')
      .sort({ createdAt: -1 });
    
    res.json(shipments);
  } catch (error) {
    console.error('Get shipments error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route   GET /api/shipments/:id
// @desc    Get a single shipment
// @access  Private
router.get('/:id', auth, async (req, res) => {
  try {
    const shipment = await Shipment.findOne({ 
      _id: req.params.id, 
      userId: req.user._id 
    }).populate('pickupAddress deliveryAddress');
    
    if (!shipment) {
      return res.status(404).json({ message: 'Shipment not found' });
    }

    res.json(shipment);
  } catch (error) {
    console.error('Get shipment error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route   PUT /api/shipments/:id/cancel
// @desc    Cancel a shipment
// @access  Private
router.put('/:id/cancel', auth, async (req, res) => {
  try {
    const shipment = await Shipment.findOne({ 
      _id: req.params.id, 
      userId: req.user._id 
    });
    
    if (!shipment) {
      return res.status(404).json({ message: 'Shipment not found' });
    }

    // Only allow cancellation if not yet picked up
    if (['picked_up', 'in_transit', 'out_for_delivery', 'delivered'].includes(shipment.status)) {
      return res.status(400).json({ message: 'Cannot cancel shipment in current status' });
    }

    shipment.status = 'cancelled';
    shipment.timeline.push({
      status: 'cancelled',
      message: 'Shipment cancelled by user',
      location: 'System'
    });
    
    await shipment.save();

    res.json(shipment);
  } catch (error) {
    console.error('Cancel shipment error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;

