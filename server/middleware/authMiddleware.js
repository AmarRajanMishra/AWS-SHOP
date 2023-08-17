import jwt from 'jsonwebtoken'

export const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if(token){
            let user = jwt.verify(token, process.env.SECRET_KEY)
            req.userID = user.id
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