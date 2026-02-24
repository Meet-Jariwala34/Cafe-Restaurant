import mongoose, { Schema, model } from "mongoose";

const itemsSchema = new mongoose.Schema({

    //required
    itemName : {
        type:String,
        required: true,
    },

    price : {
        type: Number,
        required : true,
    },

    category : {
        type: String, //breakfast,lunch,dinner,drink,desert
        required : true,
    },

    image : {
        type : String,
    },
    //extra 
    description : {
        type : String,
    },
    
    isAvailable: { type: Boolean, default: true },

    isVeg: { type: Boolean, default: true },

    discountPrice : {type : Number },// TO compare the older price and new price 

    tags: [{ 
    type: String, 

    enum: ['Chef Special', 'Bestseller', 'New', 'Spicy', 'Sugar-Free'] 
    //Special Offers types 
    }],
});

const menuItemModel = mongoose.models.item || mongoose.model("item", itemsSchema);

export default menuItemModel;