import jwt from 'jsonwebtoken'
import User from '../model/userSchema.js'

export const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if(token){
            let user = jwt.verify(token, process.env.SECRET_KEY)
            req.user = { _id: user.id };
        }else{
            res.status(401).json({
                message : 'Unauthorized User'
            })
        }
        next();
    } catch (error) {
        console.log(error)
        res.status(401).json({
            success : false,
            message : 'Unauthorized User'
        })
    }
};


//To check user is admin or not
export const isAdmin = async (req, res, next)=>{
    try {
        console.log(req.user)
        const user = await User.findById(req.user._id);
        if(user.role !== 1){
            return res.status(401).json({
                success : false,
                message : 'You are UnAuthorized'
            })
        }else{
            next()
        }
    } catch (error) {
       console.log(error)
       res.status(401).json({
        success : false,
        message: "Error in  admin middleware"
       }) 
    }
}