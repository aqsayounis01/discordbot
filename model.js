const mongoose= require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/discordbot").then(()=>{console.log('monogo started')})

const modsch = new mongoose.Schema({
    url:{
        type:String
    },
    id:
    {
        type:String,
        unique:true
    }
});

const modmod = mongoose.model('mod',modsch);

module.exports = modmod


