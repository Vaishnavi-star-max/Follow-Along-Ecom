const{app}=require("./app") 
require("dotenv").config()
const connection = require("./db/connection")

const port=process.env.PORT  

app.get("/test",async(req,res)=>{
    res.send("HELLO....")
})
app.listen(port,async()=>{

    try{
      await connection
      console.log(`app is running on http://localhost:${port}`)
    } 
    catch(err){
        console.log(err)
    }

})