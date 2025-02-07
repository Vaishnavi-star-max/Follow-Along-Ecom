let express=require("express")
const { UserModel } = require("../model/usermodel");
const catchAsyncError = require("../middleware/catchAsyncError");
const Errorhadler=require("../utils/Errorhandler")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const { sendMail } =require("../utils/mail")
let userRoute= express.Router()
const upload=require("../middleware/multer")

  


userRoute.post("/login", async (req, res) => {
    console.log(req.body)

    try {
      const { email, pass , } = req.body;
  
      if (email && pass) {
        let nweUser = new UserModel({ email, pass });
        await nweUser.save();
        res.status(200).send({ message: "login is success" });
      } else {
        res.status(400).send({ message: "🤞invalid" });
      }
    } catch (error) {
      res.status(500).send({ message: "internal server error" });
  
    }
  });






  userRoute.post("/signup",catchAsyncError( async (req, res, next) => {
    console.log(req.body)

   
      const {name, email, pass } = req.body;
  
      if (!email || !pass ||!name) {
        next(new Errorhadler("name,email and password required",400))
      } 
      let user=await UserModel.findOne({email})
      if(user){
        next(new Errorhadler("user is already exist",400))
      }

      bcrypt.hash(pass,5,async(err,hash)=>{

          if(err){
            next(new Errorhadler("server error",500))
          }
          let newUser=new UserModel({name,email,password:hash})
          


          let token =jwt.sign({id:newUser._id},process.env.SECRET,{expiresIn:60*60*60*5})
          let PORT=process.env.PORT
          let activation_url=`http://localhost:${PORT}/user/activation/${token}`
          try {
            await sendMail(
              {
                email:newUser.email,
                subject:"Activate your account",
                message:`Hello ${newUser.name},please click the link to activate your account:${activation_url}`,
              }
            )
            await newUser.save()
            res.status(200).json({status:true,message:"registration sucessfull"})
          } catch (error) {
              next(new Errorhadler("internal server error",500))
              console.log(error)
          }
         


 
      })
  
    
  }));


 userRoute.get("/activation/:token",catchAsyncError(async(req,res,next)=>{
         
       let token =req.params.token;
       if(!token){
         next(new Errorhadler("jk",400))
       }
       jwt.verify(process.env.SECRET,async(err,decoded)=>{
           if(err){
            next(new Errorhadler("jk",400))
           }

           let id=decoded.id
           UserModel.findByIdAndUpdate(id,{isActivated:true})

           res.status(200).json("activation is completed")
       })

  }))

  userRoute.post("/upload", upload.single("photo"),catchAsyncError(async(req,res,next)=>{
    if(!req.file){
      next(new Errorhadler("File not found",400))
    }

    res.status(200).json("Uploaded")
}))

  userRoute.post("/login",catchAsyncError(async(req,res,next)=>{
    const {email,password}=req.body
    if (!email || !password){
      next(new Errorhadler("email and password are required",400));
    }
    let user =UserModel.findOne({email})
    if(!user){
      next(new Errorhadler("please signup before login",400));
    }
    if(!user.isActivated){
      next(new Errorhadler("please signup before login",400))
    }
    let isMatching =await bcrypt.compare(password,user.password);
    if(!isMatching){
      next(new Errorhadler("password is incorrect ",400));
    }
    let token=jwt.sign({id:user._id},process.env.ACCESS,{expiresIn: 60*60*60*24*30})

    res.cookies("accesstoken",token,{
      httpOnly:true,
      MaxAge:"7d"
    })
    res.status(200).json({status:true,message:"login successful"})
  }))    

  module.exports=userRoute
