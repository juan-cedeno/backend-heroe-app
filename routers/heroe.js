
const {Router} = require('express')
const { createHeroe , getHeroes , getHeroeById } = require('../controller/heroe')
const {check} = require('express-validator')
const {validateCapm} = require('../middleware/validate-camp')
const {validateToken} = require('../middleware/validateToken')

const routers = Router()


routers.post('/heroe', 
[
     check('superhero' , 'Super hero is required').not().isEmpty(),
     check('publisher' , 'Publisher is required').not().isEmpty(),
     check('alter_ego' , 'Alter ego is required').not().isEmpty(),
     check('first_appearance' , 'First appearance ego is required').not().isEmpty(),
     check('characters' , 'Characters is required').not().isEmpty(),
     validateCapm
     

]
 , createHeroe)

routers.get('/heroe' , getHeroes)
routers.get('/heroe/:id', validateToken , getHeroeById)


module.exports = routers