const mongoose = require("mongoose");
const bcrypt=require("bcrypt")
const userSchema =  new mongoose.Schema({
  userName: {
    type: String,
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
},
   password: 
   { type: String, 
    required: true, 
    unique: true }
});
userSchema.pre('save',async function(next){
if(!this.isModified('password')) return next()
this.password=await bcrypt.hash(this.password,12)
})
userSchema.methods.matchPassword=async function(enteredPassword){
  return await bcrypt.compare(enteredPassword,this.password)

}
const userDb=new mongoose.model('userDb',userSchema)
module.exports= userDb;