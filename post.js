const mongoos = require('mongoos')
const Schema =mongoos.Schema


//post schema

let postSchema = new mongoos.schema({

title: {type : string ,default : ""},
content : { type : string , default : ""},
publishDate : {type : string , default: date.now},

// array of sub-documents
comment:[{

commenter: string,
content : {type: string , default: ""}



}],
author : {type : Schema.Types .objectID, ref :"user"}


})
module.exports = mongoos.model('post', postSchema )