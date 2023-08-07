



export const data = (req, res ) => {
    res.json('Welcome')
}

// To Create the Product

export const createProduct = async (req, res) => {
    try {
        res.json({type : "POST", for : "CreateProduct"})
    } catch (error) {
        console.log(error)
    }
}


// To get all the Product

export const getAllProduct = async (req, res) => {
    try {
        res.json({type : "GET", for : "getAllProduct"})
    } catch (error) {
        console.log(error)
    }
}
// To get single Product

export const getProduct = async (req, res) => {
    try {
        res.json({type : "GET", for : "getProduct"})
    } catch (error) {
        console.log(error)
    }
}
// To update the Product

export const updateProduct = async (req, res) => {
    try {
        res.json({type : "PUT", for : "updateProduct"})
    } catch (error) {
        console.log(error)
    }
}


// To delete the Product

export const deleteProduct = async (req, res) => {
    try {
        res.json({type : "DELETE", for : "deleteProduct"})
    } catch (error) {
        console.log(error)
    }
}