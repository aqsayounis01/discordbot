//create a server on discord
// in advance setting open the developer mode 
//  discord development portal-> new application = youtube, bot> add bot> give 
// name and permission > message content (on)
// 0auth> bot (url generator) > administrator (role)
// go to generated url> add it in your server 

// install> npm install discord.js 
// we need token of discord bot (to login as the bot )
const express = require('express');
const app= express();
const {Client,GatewayIntentBits} = require('discord.js');
const shortid = require('shortid') ;
const modmod = require('./model');
const client = new Client({
    intents:[GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent]
    // intents are the permissions 
})




client.login(tokensomewhereelse);

client.on('messageCreate',async(message)=>
{
    if(message.author.bot) return;       //to come out of the loop

    if(message.content.startsWith('create'))        //for generating short id 
    {
        const url = message.content.split('create ')[1];
       
        message.reply({content:'generating '+ url});
        //check if it is there or not 

        let check = await modmod.find({url:url});
        
        if(check.length==0)
        {
            let si = shortid();

            const mod = await modmod.create({
            url:url,
            id:si
        })
        }
        check = await modmod.find({url:url});
        console.log(check[0].id);
        const id =check[0].id;
        message.reply('url generated: http://127.0.0.1:3000/'+id);

        


    }
    message.reply({ content:'hello from bot'});  // for any message 
});


app.get('/:id',async(req,res)=>
{
const url = await modmod.findOne({id:req.params.id});

res.redirect(url.url);

});




client.on('interactionCreate',(int)=>    //for commands (/)
{
    int.reply('Pong!');
})

app.listen(3000,()=>
{
    console.log("server started too");
})

