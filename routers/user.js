
const {Router} = require('express')
const { check } = require('express-validator')
const {registerUser , loginUser , renewToken} = require('../controller/user')
const {validateCapm} = require('../middleware/validate-camp')
const { validateToken } = require('../middleware/validateToken')

const routers = Router()

routers.post('/register',
[
     check('name' , 'Name is required').not().isEmpty(),
     check('email' , 'Email is required').not().isEmpty(),
     check('email' , 'Email is invalid').isEmail(),
     check('password' , 'Password is required').not().isEmpty(),
     check('password' , 'Password password must be 6 characters').isLength({min : 6}),
     validateCapm
]
 , registerUser)

 routers.post('/login' , 
 [
     check('email' , 'Email is required').not().isEmpty(),
     check('email' , 'Email is invalid').isEmail(),
     check('password' , 'Password is required').not().isEmpty(),
     validateCapm
 ]
  , loginUser)

  routers.get('/renew' , validateToken , renewToken)




module.exports = routers