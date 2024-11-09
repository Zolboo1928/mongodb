const express = require("express")
const { MongoClient } = require("mongodb")
const app = express()
const PORT = 8000
app.use(express.json())

const client = new MongoClient ("mongodb+srv://zolbootulgaa1928:GZTe9utxieEM84wv@clusterofzolboo.v6qau.mongodb.net/?retryWrites=true&w=majority&appName=clusterOfZolboo");

let db;
const connectTodb =  ()=>{
    try {
         client.connect()
         db = client.db("sample_mflix");
        console.log("successfully connected")
    } catch (error) {
        console.log(error, "failed to connect")
    }
}
connectTodb()

app.get("/users", async(req,res)=>{
   try {
     const users = await db.collection("users").find().toArray()
     console.log(users)
     res.send(users)
   } catch (error) {
    console.log(error)
   }
})

app.post("/users", async(req,res)=>{
    try {
        const body = req.body
        const user = await db.collection("users").insertOne(body)
        res.send(user)
    } catch (error) {
        res.send(`error:${error}`)
    }
})

app.listen(PORT,console.log(`running on ${PORT}`))