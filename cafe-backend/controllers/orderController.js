import orderModel from '../models/orderModels.js';
import userModel from '../models/userModel.js';
import menuItemModel from '../models/menuItemModel.js';

//add order
const orderAdd = async (req,res) => {
    try {

        //items is an array of {menuItemId, quantity}
        const {items, userId , orderType, paymentMethod , orderStatus , paymentStatus} = req.body;


        //order item is an array of {menuItem, itemNameAtTimeOfOrder, quantity}
        let orderItems = [];
        let subTotal = 0;

        //items validation and calculation
        for( const item of items){
            const menuItem = await menuItemModel.findById(item.menuItemId);
            if(!menuItem){
                return res.status(404).json({success: false, message:`Menu item with ID ${item.menuItemId} not found.`});
            }

            orderItems.push({
                menuItem: menuItem,
                itemNameAtTimeOfOrder: menuItem.name,
                quantity: item.quantity
            });

            //SubTotal calculation
            subTotal += menuItem.price * item.quantity;
        }
        //Tax calculation (Assuming GST is 8%)
        const taxAmount = subTotal * 0.08;
        const deliveryFee = orderType === 'Delivery' ? 5.00 : 0; // Flat delivery fee
        const discountAmount = 0; // Placeholder for any discounts
        const totalAmount = subTotal + taxAmount + deliveryFee - discountAmount;

        //Create new order
        const newOrder = new orderModel({
            customer: userId,
            items: orderItems,
            subTotal: subTotal,
            taxAmount: taxAmount,
            deliveryFee: deliveryFee,
            discountAmount: discountAmount,
            totalAmount: totalAmount,
            orderType: orderType,
            paymentMethod: paymentMethod,
            orderStatus: orderStatus,
            paymentStatus: paymentStatus
        });

        await newOrder.save();
        res.status(201).json({success: true,message:"Order added successfully",order:newOrder});
    } catch (error) {
        res.status(500).json({success: false, message:"Error adding order", error:error.message});
    } 
}

//list orders
const orderList = async (req,res) => {
    try {
        const orders = await orderModel.find().populate('customer').populate('items.menuItem');

        res.status(200).json({success: true, orders: orders});
    } catch (error) {
        res.status(500).json({success: false, message:"Error fetching orders", error:error.message});
    }
}

export {orderAdd, orderList};