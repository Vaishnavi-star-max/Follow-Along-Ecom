let express= require("express")
//const ErrorHandler = require("./utils/Errorhandler");
//const catchAsyncErrors = require("./middleware/catchAsyncError")
const{UserModel}=require("./model/userModel")
const userRoute=require("./controllers/userRoute")

const cors= require("cors")

let app=express()
app.use(express.json())
const errorMiddleware =require("./middleware/error")

app.use(cors({
    origin: 'http://localhost:7777', 
    credentials: true
}));
 

 app.use("/user",userRoute)


app.use(errorMiddleware)
module.exports={app}