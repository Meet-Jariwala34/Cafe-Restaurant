import mongoose from "mongoose";

const userSchemas = new mongoose.Schema({

    // BASIC INFO
    name:{type:String, required : true},
    number:{type:Number, required :true , unique:true},
    password:{type:String, required:true}, //use hashed

    //MARKETING AND LOYALTY
    birthday:{type:Date} ,// For dicount 
    loyaltyPoint : {type:Number , default :0},
    preferences: {
    favoriteItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Menu' }],//list the customers fav
    },

    // --- ACCOUNT STATUS ---
    lastLogin: { type: Date },
    createdAt: { type: Date, default: Date.now }
})

const userModel =  mongoose.models.user || mongoose.model('user',userSchemas,'users');

export default userModel;