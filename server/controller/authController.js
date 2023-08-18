import User from '../model/userSchema.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



export const registerUser = async (req, res) =>{
    try {
        const { firstName, lastName, email, number, password, image } = req.body;
        // 1. Validation
        if(!firstName){
            return res.json({message : 'First Name is required'})
        }
        if(!lastName){
            return res.json({message : 'Last Name is required'})
        }
        if(!email){
            return res.json({message : 'Email is required'})
        }
        if(!password){
            return res.json({message : 'Password is required'})
        }
        if(!number){
            return res.json({message : 'Number is required'})
        }
        // 2. Existing User
        const existingUser = await User.findOne({email : email})
        if(existingUser){
            return res.json({message : 'User already exists'})
        }

        // 3. Encrypt Password || Hashed Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 4. Create User
        const user = await User.create({
            firstName : firstName,
            lastName : lastName,
            email : email,
            number : number,
            password : hashedPassword,
            image : image
        })
        // Token Generate
        const token = jwt.sign(
            {email : email, id : user._id}, 
            process.env.SECRET_KEY
            )
        res.status(201).json({
            success : true,
            message : 'User created successfully',
            user,
            token
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false,
            message : 'Error creating user'
        })
    }
}

export const loginUser = async (req, res) =>{
    try {
        const {email, password} = req.body;
        const existingUser = await User.findOne({email: email});
        if(!existingUser){
            return res.json({message : 'User Not Found'})
        }
        const matchPassword = await bcrypt.compare(password, existingUser.password)
        if(!matchPassword){
            return res.json({message : 'Email or password mismatch'})
        }
        const token = jwt.sign(
            {email : email, id : existingUser._id}, 
            process.env.SECRET_KEY
            )
        res.status(201).json({
            success : true,
            message : "User Login Successfully",
            user : existingUser,
            token : token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false,
            message : 'Error in login user'
        })
    }
}