import jwt from 'jsonwebtoken';

const adminAuth = async (req,res,next) => {
    try {
        
        const {token} = req.headers;

        if(!token){
            return res.json({success:false, message:"The Authentication fails , Try again"});
        }

        const token_decoded = jwt.verify(token, process.env.JWT_SECRET);


        if( token_decoded !== process.env.ADMIN_NUMBER + process.env.ADMIN_PASSWORD){
            return res.json({success:false, message:"The Authentication fails , Try again"});
        }

        next();

    } catch (error) {
        console.log(error);
        return res.json({message:error.message});
    }
}

export default adminAuth;