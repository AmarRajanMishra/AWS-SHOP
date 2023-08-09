import Product from '../model/productSchema.js'





// To Create the Product

export const createProduct = async (req, res) => {
    const {title, price, description, category, image, rating} = req.body;
    try {
        const product = await Product.create({
            title: title,
            price: price,
            description: description,
            category: category,
            image : image,
            rating : rating
        })
        res.status(201).json({
            success : true,
            message : 'Product created successfully',
            product
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success : false,
            message : 'Error while product creation',
            error
        })
    }
}


// To get all the Product

export const getAllProduct = async (req, res) => {
    try {
        const product = await Product.find()
        res.status(200).json({
            success : true,
            message : "Getting all products Successfully",
            product
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success : false,
            message : 'Error while product fetching',
            error
        })
    }
}
// To get single Product

export const getProduct = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findOne({_id : id})
        res.status(200).json({
            success: true,
            message : "Getting Single Product Successfully",
            product
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success : false,
            message : 'Error while fetching single Product',
            error
        })
    }
}
// To update the Product

export const updateProduct = async (req, res) => {
    try {
        const {title, price, description, category, image, rating} = req.body;
        const id = req.params.id;
        const product = await Product.findByIdAndUpdate(
            {_id : id},
            {
                title: title,
                price: price,
                description: description,
                category: category,
                image : image,
                rating : rating
            },
            {new : true}
            )
        res.status(201).json({
            success : true,
            message : "Product Updated Successfully",
            product
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success : false,
            message : 'Error while updating Product',
            error
        })
    }
}


// To delete the Product

export const deleteProduct = async (req, res) => {
    try {
        res.json({type : "DELETE", for : "deleteProduct"})
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success : false,
            message : 'Error while deleting Product',
            error
        })
    }
}