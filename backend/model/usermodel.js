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
}



})

const UserModel=mongoose.model("user", userschema)

module.exports={UserModel}