let express=require("express")
const ProductModel  = require("../model/productModel");
const catchAsyncError = require("../middleware/catchAsyncError");
const Errorhadler=require("../utils/errorhadler")
const productRouter= express.Router()
const UserModel = require("../model/userModel")
const {productUpload}=require("../middleware/multer")
let path=require('path')


productRouter.post("/create-product",productUpload.array("images",10), catchAsyncError(async(req, res, next)=>{
    const { email,name, description,category,tags,price,stock} = req.body;
    const images =req.files.map((file)=>file.path);
    console.log(email,name, description,category,tags,price,images);

    if (!email ||!name ||!description ||!category ||!tags ||!price ||!images ||!stock) {
       return  next(new Errorhadler("All fields are required",400))
    }
    let user=await UserModel.findOne({email})
    if(!user){
        return next(new Errorhadler("user is not exist",404))
    }
    let product=new ProductModel({email,name, description,category,tags,price,images,stock})
  

    await product.save()
    res.status(201).json({message:"Product created successfully"})


}))

productRouter.get("/allproduct", catchAsyncError(async(req, res, next)=>{
      
     let allProduct = await ProductModel.find()

     if (allProduct && allProduct.length > 0) { 
        allProduct = allProduct.map((product) => {
            if (product.images && product.images.length > 0) {
                product.images = product.images.map((ele) => path.basename(ele));
            }
            return product; 
        });
    }
      
     res.status(200).json({status:true,message:allProduct})


}))










module.exports =productRouter;