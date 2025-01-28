const{app}=require("./app") 
require("dotenv").config()

const port=process.env.PORT 

app.get("/shop",async(req,res)=>{
    res.send("HELLO....")
})
app.listen(port,()=>{
    console.log(`app is running on http://localhost:${port}`)
})