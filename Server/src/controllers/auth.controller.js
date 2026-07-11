const userModel=require("../models/user.model");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");


async function registerUser(req,res) {
  try {
     const {fullName,email,password, phoneNo}=req.body;
     if(!fullName || !email || !phoneNo || !password){
      return res.status(404).json({message:"All the Input are Requires"})
     }

     const isUserAlreadyExists=await userModel.findOne({email});
     
     if(isUserAlreadyExists){
      return res.status(400).json({message:"User is already Exists"})
     }

     const hashedPassword=await bcrypt.hash(password,10);

     const newUser=await userModel.create({
      fullName,
      email,
      phoneNo,
      password:hashedPassword,
     })

     return res.status(201).json({message:"Account is Created"})

  } catch (error) {
    console.log(error);
    return res.status(500).json({message:"Registration part is error"})
  }

}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Credentials are required"
      });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    const isPassword = await bcrypt.compare(password, user.password);

    if (!isPassword) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax"
    });

    res.status(200).json({
      message: "User logged in successfully"
    });

  } catch (error) {
    return res.status(500).json({
      message: "Login error"
    });
  }
}

function logout(req,res){
  res.clearCookie("token");
  return res.status(200).json({message:"User logged out successfully"});
}

module.exports={
  registerUser,
  login,
  logout
}
