const mongoos = require('mongoos')
const Schema =mongoos.Schema


let userSchema = new mongoos.schema({


    username : {type : String, default: "", lowercas: true },
    password : {type : String, default: "", },
    email    : {type : String, default: "", lowercas: true , unique : true },
    friends  :[{type :schema.types.objectID ,ref: "user"}]
    isAdmin: Boolean
})


















module.exports = mongoos.model('user', userSchema )