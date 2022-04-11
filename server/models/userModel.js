//what type of datas we are requiring from a user


const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userRegSchema = mongoose.Schema(
  {
    firstname: {
      type: "string",
      required: true,
    },
    lastname: {
      type: "string",
      required: true,
    },
    gender: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
    },
    pic: {
      type: "string",
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  {
    timestamps: true,
  }
);

//bevore saving the operation. calling a middleware function and
// bcrypting the passowrd
userRegSchema.pre('save', async function (next) {
    //if the passowrd is not modified the go to next
    if(!this.isModified('password')){
        next();
    }
    //generating salt bcrypting
    const salt = await bcrypt.genSalt(6);
    this.password = await bcrypt.hash(this.password, salt);
})

//decrypting our passowrd
userRegSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

const User = mongoose.model('User',userRegSchema);

module.exports = User;