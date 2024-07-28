// mostly through discord.js docs

const  { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

//this is a client 
const rest = new REST({ version: '10' }).setToken(tokensomewhereelse);


//immediately invoked function expression 
(async()=>
{
    try {
  console.log('Started refreshing application (/) commands.');
//client id in applaication in discord development portal
  await rest.put(Routes.applicationCommands(thiswasclientid), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
} )();