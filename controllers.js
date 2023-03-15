
const Product = require('./model.product')


//Read (Get)
exports.getAllProducts = async (req,res) => {
    const productList = Product.find()
    res.status(200).json(productList)
}

//Create (Post)
exports.createProduct = async (req,res) => {
    const data = req.body
    const product = new Product(data)
    await product.save();
    res.status(200).json(product)
}

//Update (Put)

exports.updateProducts = async (req,res)=>{
    try{
        const id  = req.body.id
        const data = req.body
        const product = await Product.findByIdAndUpdate(id, data, {new : true})
        res.json(product)
    }
    catch(err){
        console.log(err.message)
        res.status(501).send('update not processed')
    }
}