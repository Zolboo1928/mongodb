const express = require("express")
const { MongoClient } = require("mongodb")
const app = express()
const PORT = 8000
app.use(express.json())
const mongoose = require("mongoose")
app.use(express.json())
const userModel = require("./userModel")

const connectTomongoose = async()=>{
    const res = await mongoose.connect(
      "mongodb+srv://zolbootulgaa1928:GZTe9utxieEM84wv@clusterofzolboo.v6qau.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=clusterOfZolboo"
    );
    if(res) console.log("connected to mongoose")
}
connectTomongoose()

app.get("/users", async(req,res)=>{
   try {
     const users = await db.collection("users").find().toArray()
     console.log(users)
     res.send(users)
   } catch (error) {
    console.log(error)
   }
})

app.post("/post", async(req,res)=>{
    try {
        const response  = await  userModel.create(req.body)
        res.send(response)
    } catch (error) {
        res.send(`error:${error}`)
    }
})


app.put('/update',async(req,res)=>{
    try {
        const email = req.body.email
        const name = req.body.name
        const response = await userModel.findOneAndUpdate({email},{name},{new:true})
        res.send(response)
    } catch (error) {
        console.log(error)
    }
})


app.delete("/delete",async(req,res)=>{
    try {
        const response = await userModel.findOneAndDelete({email: req.body.email})
        res.send(response)
    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT,console.log(`running on ${PORT}`))