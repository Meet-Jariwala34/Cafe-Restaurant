import menuItemModel from "../models/menuItemModel.js";
import { v2 as cloudinary } from 'cloudinary';

//add product
const addProduct = async (req, res) => {
    try {
        const {itemName,price,category,description,isVeg,tags} = req.body;
        const imageFile = req.file;

        // 1. Check if file exists
        if (!imageFile) {
            return res.json({ success: false, message: "Please upload an image" });
        }

        // //check when connect with the frontend
        const result = await cloudinary.uploader.upload(req.file.path);
        const imageUrl = result.secure_url;
        
        // 3. Create the New Item (Don't send res.json yet!)
        const newItem = {
            itemName,
            price: Number(price), // Ensure price is a number
            description,
            category,
            isVeg: isVeg === 'true', // FormData converts everything to strings
            image: imageUrl,
            tags: Array.isArray(tags) ? tags : JSON.parse(tags || "[]")
        };

        //making a new food item in the db

        const product = new menuItemModel(newItem);
        await product.save();

        res.json({success:true, message:"The food item is saved"})

    } catch (error) {
        console.log(error);
        res.json({message:error.message})
    }
};

//remove product
const removeProduct = async (req, res) => {
    try {
        await menuItemModel.findByIdAndDelete(req.body._id);
        res.json({success:true, message:"Item is removed"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message: error.message});
    }
};

//edit product
const editProduct = async (req, res) => {
    try {
        const {_id} = req.body;

        const change = await menuItemModel.findByIdAndUpdate(_id,{$set:req.body},{new: true, runValidators: true});

        if(change){
            res.json({success:true, message:"Your data has been changed"});
        }else{
            res.json({success:false, message:"You can't able to change your data"});
        }

    } catch (error) {
        
    }
};

//sold out product
const soldOutProduct = async (req, res) => {
    try {
        const {id} = req.body;

    let item = await menuItemModel.findByIdAndUpdate(id,{isAvailable:false},{new : true});
    
    if(item){
        res.json({success:true, message:"Now the item is not available"});
    }else{
        res.json({success:false, message:"Can't able to change the data"});
    }
    } catch (error) {
        console.log(error);
        res.json({success:false,message: error.message});
    }
};

//Not sold out product
const notSoldOutProduct = async (req, res) => {
    try {
        const {id} = req.body;

    let item = await menuItemModel.findByIdAndUpdate(id,{isAvailable:true},{new : true});
    
    if(item){
        res.json({success:true, message:"Now the item is available"});
    }else{
        res.json({success:false, message:"Can't able to change the data"});
    }

    
    } catch (error) {
        console.log(error);
        res.json({success:false,message: error.message});
    }
};

//list the product to show in our backend
const listItems = async (req,res) => {
        try {
            const items = await menuItemModel.find({});
            res.json({success:true,items,message:"The listing is done"})
        } catch (error) {
            console.log(error);
            res.json({success:false,message: error.message});
        }
}

export {addProduct,removeProduct,editProduct,soldOutProduct , listItems, notSoldOutProduct};