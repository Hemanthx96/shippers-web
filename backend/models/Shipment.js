const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  trackingNumber: {
    type: String,
    unique: true,
    required: true
  },
  pickupAddress: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address',
    required: true
  },
  deliveryAddress: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address',
    required: true
  },
  packageDetails: {
    weight: {
      type: Number,
      required: true,
      min: 0.1
    },
    dimensions: {
      length: { type: Number, required: true },
      width: { type: Number, required: true },
      height: { type: Number, required: true }
    },
    description: {
      type: String,
      trim: true
    },
    value: {
      type: Number,
      required: true,
      min: 0
    }
  },
  serviceType: {
    type: String,
    enum: ['Express', 'Standard', 'Economy'],
    default: 'Standard'
  },
  paymentMethod: {
    type: String,
    enum: ['Prepaid', 'COD'],
    required: true
  },
  codAmount: {
    type: Number,
    default: 0
  },
  pricing: {
    basePrice: { type: Number, required: true },
    fuelSurcharge: { type: Number, default: 0 },
    gst: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    total: { type: Number, required: true }
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed', 'refunded'],
    default: 'pending'
  },
  paymentId: {
    type: String
  },
  status: {
    type: String,
    enum: ['created', 'scheduled', 'picked_up', 'in_transit', 'out_for_delivery', 'delivered', 'failed', 'cancelled'],
    default: 'created'
  },
  timeline: [{
    status: String,
    message: String,
    location: String,
    timestamp: {
      type: Date,
      default: Date.now
    }
  }],
  scheduledPickupDate: {
    type: Date
  },
  estimatedDeliveryDate: {
    type: Date
  },
  actualDeliveryDate: {
    type: Date
  },
  notes: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Generate tracking number before saving
shipmentSchema.pre('save', async function(next) {
  if (!this.trackingNumber) {
    // Generate unique tracking number: ME + timestamp + random
    const timestamp = Date.now().toString().slice(-8);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    this.trackingNumber = `ME${timestamp}${random}`;
  }
  
  // Add initial timeline entry
  if (this.isNew && this.timeline.length === 0) {
    this.timeline.push({
      status: 'created',
      message: 'Shipment created',
      location: 'System'
    });
  }
  
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Shipment', shipmentSchema);

