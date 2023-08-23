import User from '../model/userSchema.js'



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