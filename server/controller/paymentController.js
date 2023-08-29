import Order from '../model/orderSchema.js'
import braintree from 'braintree'


// Payement Gateway Information

var gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: process.env.BRAINTREE_MERCHANT_ID,
    publicKey: process.env.BRAINTREE_PUBLIC_KEY,
    privateKey: process.env.BRAINTREE_PRIVATE_KEY,
  });


//   Get Token Information
export const braintreeTokenController = async (req, res)=>{
    try {
        gateway.clientToken.generate({}, function(err, response){
            if(err){
                res.status(500).json({
                    success : false,
                    message : "Error generating",
                    err
                })
            }else{
                res.send(response)
            }
        })
    } catch (error) {
        console.log(error)
    }
}


// Payment
export const braintreePaymentController = async (req, res) => {
    try {
        const {nonce, cart} = req.body;
        let total = 0;
        cart.map((i)=>{
            total += i.price;
        })
        let newTransaction = gateway.transaction.sale({
            amount : total,
            paymentMethodNonce : nonce,
            options: {
                submitForSettlement : true
            }
        },
        function(err, result){
            if(result){
                const order = new Order({
                    products : cart,
                    payment : result,
                    buyer : req.user._id
                }).save()
                res.json({ok : true})
            }else{
                res.status(500).send(err)
            }
        }
         
        )
    } catch (error) {
        console.log(error)
    }
}