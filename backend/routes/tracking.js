const express = require('express');
const router = express.Router();
const Shipment = require('../models/Shipment');

// @route   GET /api/tracking/:trackingNumber
// @desc    Track a shipment by tracking number (public)
// @access  Public
router.get('/:trackingNumber', async (req, res) => {
  try {
    const shipment = await Shipment.findOne({ 
      trackingNumber: req.params.trackingNumber 
    })
    .populate('pickupAddress deliveryAddress', '-userId')
    .select('-userId -paymentId');
    
    if (!shipment) {
      return res.status(404).json({ message: 'Shipment not found' });
    }

    res.json({
      trackingNumber: shipment.trackingNumber,
      status: shipment.status,
      timeline: shipment.timeline,
      pickupAddress: shipment.pickupAddress,
      deliveryAddress: shipment.deliveryAddress,
      estimatedDeliveryDate: shipment.estimatedDeliveryDate,
      actualDeliveryDate: shipment.actualDeliveryDate
    });
  } catch (error) {
    console.error('Tracking error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;

