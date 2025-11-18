const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const crypto = require('crypto');
const Shipment = require('../models/Shipment');
const auth = require('../middleware/auth');

const hasRazorpayKeys =
  process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET;

let razorpay;
if (hasRazorpayKeys) {
  razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
}

router.post('/create-order', auth, async (req, res) => {
  try {
    const { shipmentId, amount } = req.body;

    const shipment = await Shipment.findOne({
      _id: shipmentId,
      userId: req.user._id,
    });

    if (!shipment) {
      return res.status(404).json({ message: 'Shipment not found' });
    }

    if (shipment.paymentStatus === 'paid') {
      return res.status(400).json({ message: 'Shipment already paid' });
    }

    if (!hasRazorpayKeys) {
      return res.json({
        orderId: `mock_order_${Date.now()}`,
        amount,
        currency: 'INR',
        mock: true,
      });
    }

    const options = {
      amount: amount * 100,
      currency: 'INR',
      receipt: `receipt_${shipment.trackingNumber}`,
      notes: {
        shipmentId: shipment._id.toString(),
        trackingNumber: shipment.trackingNumber,
        userId: req.user._id.toString(),
      },
    };

    const order = await razorpay.orders.create(options);

    res.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.post('/verify', auth, async (req, res) => {
  try {
    const { orderId, paymentId, signature, shipmentId } = req.body;

    const shipment = await Shipment.findOne({
      _id: shipmentId,
      userId: req.user._id,
    });

    if (!shipment) {
      return res.status(404).json({ message: 'Shipment not found' });
    }

    if (shipment.paymentStatus === 'paid') {
      return res.status(200).json({ message: 'Payment already verified', shipment });
    }

    if (!hasRazorpayKeys) {
      shipment.paymentStatus = 'paid';
      shipment.paymentId = orderId || `mock_payment_${Date.now()}`;
      shipment.timeline.push({
        status: shipment.status,
        message: 'Payment marked as received (mock)',
        location: 'System',
      });

      await shipment.save();

      return res.json({
        message: 'Payment verified successfully (mock)',
        shipment,
      });
    }

    const text = `${orderId}|${paymentId}`;
    const generatedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(text)
      .digest('hex');

    if (generatedSignature !== signature) {
      return res.status(400).json({ message: 'Invalid payment signature' });
    }

    shipment.paymentStatus = 'paid';
    shipment.paymentId = paymentId;
    shipment.timeline.push({
      status: shipment.status,
      message: 'Payment received successfully',
      location: 'System',
    });

    await shipment.save();

    res.json({
      message: 'Payment verified successfully',
      shipment,
    });
  } catch (error) {
    console.error('Verify payment error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;

