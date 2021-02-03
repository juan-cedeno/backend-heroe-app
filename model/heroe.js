const {Schema , model} = require('mongoose')


const heroeSchema = new Schema ({


        superhero: {
             type : String,
             required : true
        }, 
        publisher: {
             type : String,
             required : true
        }, 
        alter_ego: {
             type : String,
             required : true,
        },
        first_appearance: {
             type :  String,
             required : true
        },
        characters: {
             type : String,
             required : true
        }
})

module.exports = model('Heroe' , heroeSchema)


