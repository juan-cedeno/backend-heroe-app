const {request , response} = require('express')
const { validationResult } = require('express-validator')

const validateCapm = (req = request , res = response , next) => {

     const errores = validationResult(req)

     if(!errores.isEmpty()) {
          return res.json({
               message : errores.array()[0].msg
          })
     }

     next()

}

module.exports = {
     validateCapm
}