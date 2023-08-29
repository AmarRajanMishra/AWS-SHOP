import Order from '../model/orderSchema.js'


// get order Details

export const getOrderDetails = async (req, res) =>{
    try {
        const orders = await Order.find({buyer : req.user._id})
        res.status(200).json(orders)
    } catch (error) {
       console.log(error) 
       res.status(500).json({
        success : false,
        message : 'Error in Getting Order Details'
    })
    }
}

// Get All Order Details For Admin

export const getAllOrderDetails = async (req, res) =>{
    try {
        const orders = await Order.find({})
        .sort({createdAt : "-1"})
        res.status(200).json(orders)
    } catch (error) {
       console.log(error) 
       res.status(500).json({
        success : false,
        message : 'Error in Getting Order Details'
    })
    }
}


// Order Status
export const orderStatusController = async (req, res) =>{
    try {
        const { orderId } = req.params
        const { status} = req.body
        const orders = await Order.findByIdAndUpdate(orderId, { status }, {new : true})
        res.json(orders)
    } catch (error) {
        console.log(error) 
       res.status(500).json({
        success : false,
        message : 'Error in Updating Order Status'
    })
    }
}


