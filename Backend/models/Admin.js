const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const adminSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, "Username is required"],
    },
    email:{
        type:String,
        required:[true, "Email is required"],
    },
    password:{
        type:String,
        required:[true, "Password is required"],
        minlength:6,
        select:false,
    },
} , {timestamps:true},
);

adminSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next();
    this.password =await bcrypt.hash(this.password,10);

});
adminSchema.methods.comparePassword = async function(matchPassword){
    return await bcrypt.compare(matchPassword, this.password);
}

