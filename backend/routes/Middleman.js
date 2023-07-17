const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const userModel = require('../models/users')
const {validateToken} = require('../middlewares/Auth')

const {sign} = require('jsonwebtoken')
//create user
router.post("/createUser", async(req,res)=>{
    const user = req.body //data to send to db
    const {password,username,specs} = req.body
    bcrypt.hash(password,10).then((hash)=>{
        userModel.create({
            username:username,
            password:hash,
            specs:specs
        })
    })
    

    res.json(user)
})

//login
router.post("/login",async(req,res)=>{
    const { username, password } = req.body;
    const user = await userModel.findOne( {username:username} );

    if (user) {
        bcrypt.compare(password, user.password).then((same) => {
            if (!same) {
                return res.json({ error: "Incorrect password" });
            }
            const Token = sign({username:username,specs:user.specs},"importantToken")
            return res.json(Token);
        });
    } else {
        return res.json({ error: "Username Does Not Exist" });
    }

    
})


//get user to check if it exists
router.get("/getUsers", async (req,res)=>{
    const { username } = req.query;

  try {
    const user = await userModel.findOne({
        username: { $regex: new RegExp(`^${username}$`, 'i') },
      });
    if (user) {
      return res.json({ error: 'Username Exists' });
    } else {
      return res.json({ message: 'Username Available' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }

    

})



router.get("/auth",validateToken,(req,res)=>{
  res.json(req.user)
})

router.put("/specs", async (req, res) => {
  const { title ,username,type } = req.body;
  const typeObj = {
    [`specs.${type}`]:title
  }
  try {
    await userModel.updateOne({username: username},{ $set: typeObj} );
    return res.json(title);
  } catch (error) {
    
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/getSpecs",async (req,res)=>{
    
    const user = await userModel.findOne(req.body)
    if(user){
      return res.json(user.specs)
    }
    else{
      return res.json({ error: "Internal Server Error" });
    }
    


})



module.exports = router