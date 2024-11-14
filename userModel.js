const {mongoose,Schema} = require('mongoose')
const userSchema = new Schema({ 
    name: String,
    email:String
 })
 const userModel = mongoose.model("zolb", userSchema)
 module.exports = userModel
