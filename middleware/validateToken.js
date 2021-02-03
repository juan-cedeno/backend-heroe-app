const { request, response } = require("express");
const jwt = require('jsonwebtoken')

const validateToken = (req = request , res = response , next) => {

     const token = req.header('x-token')

     if (!token) {
          return res.json({message : 'No token'})
     }

     try {
          const {id} = jwt.verify(token , process.env.JWT_KEY)
          req.id = id
          next()

     } catch (error) {
          console.log(error);
          return res.json({message : 'Token no validate'})
     }
}
module.exports = {
     validateToken
}