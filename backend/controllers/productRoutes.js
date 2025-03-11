let express=require("express")
const ProductModel  = require("../model/productModel");
const catchAsyncError = require("../middleware/catchAsyncError");
const Errorhadler=require("../utils/Errorhandler")
const productRouter= express.Router()
const UserModel = require("../model/usermodel")
const {productUpload}=require("../middleware/multer")
let path=require('path')
const mongoose=require("mongoose")
const auth=require("../middleware/auth")


productRouter.post("/create-product",productUpload.array("images",10), catchAsyncError(async(req, res, next)=>{
    const { email,name, description,category,tags,price,stock} = req.body;

    const images =req.files.map((file)=>path.basename(file.path));
    console.log(email,name, description,category,tags,price,images);

    if (!email ||!name ||!description ||!category ||!tags ||!price ||!images ||!stock) {
       return  next(new Errorhadler("All fields are required",400))
    }
    let user=await UserModel.findOne({email})
    console.log(email)
    if(!user){
        return next(new Errorhadler("user is not exist",404))
    }
    let product=new ProductModel({email,name, description,category,tags,price,images,stock})


    await product.save()
    res.status(201).json({message:"Product created successfully"})


}))


productRouter.get("/allproduct", catchAsyncError(async(req, res, next)=>{

     let allProduct = await ProductModel.find()
     res.status(200).json({status:true,message:allProduct})
}))



productRouter.get("/individualproduct/:id", catchAsyncError(async(req, res, next)=>{
    let id=req.params.id
    let product = await ProductModel.findById(id)
    res.status(200).json({status:true,message:product})
}))





productRouter.delete("/delete/:id",catchAsyncError(async(req,res,next)=>{
    console.log("kjmk")
       let id=req.params.id
       if(!id){
         return next(new Errorhadler("id is not passed",400))
       }
       if (!mongoose.Types.ObjectId.isValid(id)) {
        return next(new Errorhadler("Invalid ObjectId", 400));
       }
       const deletedProduct = await ProductModel.findByIdAndDelete(id);
       if (!deletedProduct) {
           return next(new Errorhadler("Product not found", 404));
       }
       res.status(200).json({status:true,message:"deleted successfully"})

}))



productRouter.put("/update/:id",productUpload.array("images",10),catchAsyncError(async(req,res,next)=>{
    let id=req.params.id
    if(!id){
      return next(new Errorhadler("id is not passed",400))
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
     return next(new Errorhadler("Invalid ObjectId", 400));
    }

    let { email,name, description,category,tags,price,stock,images} = req.body;
    const imagesArr =req.files.map((file)=>path.basename(file.path));
    console.log(images,imagesArr)
    if(!images){
        images=[]
    }
    else{
        images =Array.isArray(images)?images:[images]
    }
    console.log(images,imagesArr,"88")
    const updated =await ProductModel.findByIdAndUpdate(id,{ email,name, description,category,tags,price,stock,images:[...imagesArr,...images]},{new:true})
    res.status(200).json({status:true,message:"updated successfully",data:updated})

}))




productRouter.post('/cart',auth, catchAsyncError(async (req, res, next) => {
    const {productId, quantity } = req.body;
    let userId=req.user_id 
    if (!userId) {
        return next(new Errorhadler("UserID isrequired", 400));
    }
    if (!mongoose.Types.ObjectId.isValid(productId)) {
        return next(new Errorhadler("Invalid productId", 400));
    }

    if (!quantity || quantity < 1) {
        return next(new Errorhadler("Quantity must be at least 1", 400));
    }
    const user = await UserModel.findById(userId);
    if (!user) {
        return next(new Errorhadler("User not found", 404));
    }
    const product = await ProductModel.findById(productId);
    if (!product) {
        return next(new Errorhadler("Product not found", 404));
    }
    const cartItemIndex = user.cart.findIndex(
        (item) => item.productId.toString() === productId
    );

    if (cartItemIndex > -1) {
        user.cart[cartItemIndex].quantity += quantity;
    } else {
        user.cart.push({ productId, quantity });
    }

    await user.save();

    res.status(200).json({
        status: true,
        message: "Cart updated successfully",
        cart: user.cart,
    });
}));

productRouter.get("/cart",auth,catchAsyncError(async(req,res,next)=>{
    let userID=req.user_id
    if(!userID){
        return next(new Errorhadler("user id is requrired",404));
    }
    if(!mongoose.Types.ObjectId.isValid(userID)){
        return next (new Errorhadler("Invalid userId",400));
    }
    let cart=await UserModel.findById(userID).populate({
         path:"cart.productId",
         model:"Product"
    })
    console.log(cart,userID)
    res.status(200).json({status:true,message:cart})
}))



module.exports=productRouter