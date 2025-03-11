const mongoose=require("mongoose");

const addressSchema=mongoose.Schema({
    counter:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    distrit:{
        type:String,
        require:true

    },

    pincode:{
        type:Number,
        require:true
    },
    area:{
        type:String
    }

})

const cartSchema=mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        require: true,
    },
    quantity:{
        type:Number,
        require:true,
        min:[1,"Quantity cannot be less than 1"],
        default:1,
    },
})

const userschema=mongoose.Schema({
name: {
    type:String,
    required:true,
},

email: {
  type:String, 
  required:true

},
password:{
     type:String,
     required:true,
},
role:{
    type:String,
    default:"user"
},
address:{
    type:addressSchema
},

isActivated:{
   type:Boolean,
   default:false
},
cart:[cartSchema]


})

const UserModel=mongoose.model("user", userschema)

module.exports={UserModel}