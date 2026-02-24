import userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET);
}


// Routes for login
const userLogin = async (req,res) =>{

    try {

        const {number,password} = req.body;

        //checking the user present ?

        const user = await userModel.findOne({number});

        if(user.length == 0){
            res.json({success:false, message:"User not found"})
        }

        //checking password

        const isMatch = await bcrypt.compare(password, user.password);

        if(isMatch){
            const token = createToken(user._id);
            res.json({success:true, token,message:"You are successfully Loged-in"})
        }else{
            res.json({success:false, message:"Password is incorrect"});
        }
        
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }

}
//Routes for Registration
const userRegistration = async (req,res) =>{
    try {

        const {name,number,password,birthday} = req.body;

        //checking user exist or not 
        const exist = await userModel.findOne({number});
        if(exist){
            return res.json({success :false, message:"User already exist"})
        }

        //Validating number formate 
        if(number.length > 10 || number.length < 10 ){
            return res.json({success :false, message:"Number is Invalid"})
        }
        if(password.length < 8 ){
            return res.json({success :false, message:"password is Invalid"})
        }

        //hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        //creating new user
        const newUser = new userModel({
            name:name,
            number:number,
            password:hashedPassword,
            birthday:new Date(birthday),
        })

        const user = await newUser.save();
        //Creating the token
        const token = createToken(user._id);

        res.json({success:true,token, message:"You are successfully make an account"})
        
    } catch (error) {
        console.log(error);
        res.json({success:false, message : error.message})
    }
}

//Routes for admin
const admin = async (req,res) =>{
    try {
        
        const {number, password} = req.body;

        if((String(number) === process.env.ADMIN_NUMBER) && (password === process.env.ADMIN_PASSWORD)){
            const token = jwt.sign(String(number)+password,process.env.JWT_SECRET);
            res.json({success:true, message:"You are succesfully loged in",token})
        }else{
            res.json({success:false, message:"You are unable to loged in"})
        }

    } catch (error) {
        console.log(error);
        res.json({success:false, message : error.message})
    }
}

const getUser = async (req,res) => {
    try {

        const users = await userModel.find({});
        res.json({success:true, message:"your user list is sended",users});
        
    } catch (error) {
        console.log(error);
        res.json({message:error.message, success:false})
    }
}

export {userLogin, userRegistration, admin, getUser}