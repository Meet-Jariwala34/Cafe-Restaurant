import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
  // --- IDENTIFICATION ---
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  // --- ITEMS & CUSTOMIZATION ---
    items: [
    {
        menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'item' },
        itemNameAtTimeOfOrder: String, // Backup in case the menu name changes
        quantity: { type: Number, required: true },
    }
    ],

  // --- FINANCIALS (GST Ready) ---
    subTotal: { type: Number, required: true },
    taxAmount: { type: Number, default: 0 }, // GST
    deliveryFee: { type: Number, default: 0 },
    discountAmount: { type: Number, default: 0 },
    totalAmount: { type: Number, required: true },

  // --- LOGISTICS & STATUS ---
    orderType: { 
    type: String, 
    enum: ['Dine-in', 'Takeaway', 'Delivery'], 
    required: true 
    },
    orderStatus: { 
    type: String, 
    enum: ['Received', 'Preparing', 'Ready', 'Out for Delivery', 'Completed', 'Cancelled'],
    default: 'Received'
    },
    paymentMethod: { type: String, enum: ['Cash', 'Online', 'Loyalty Points'] },
    paymentStatus: { type: String, enum: ['Pending', 'Paid', 'Failed'], default: 'Pending' },

  // --- TIMESTAMPS (For Analytics) ---
    placedAt: { type: Date, default: Date.now },
    estimatedPreparationTime: { type: Number }, // in minutes
    completedAt: { type: Date }
});

const orderModels = mongoose.models.order || mongoose.model("order",orderSchema);

export default orderModels;