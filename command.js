// mostly through discord.js docs

const  { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

//this is a client 
const rest = new REST({ version: '10' }).setToken('MTI2NjcxNjA0NDg2NTU3MjkyNQ.GPb83n.ojMQdQtHxYPu2ufaBVB0MLe2PHJ5y2M2XruEAw');


//immediately invoked function expression 
(async()=>
{
    try {
  console.log('Started refreshing application (/) commands.');
//client id in applaication in discord development portal
  await rest.put(Routes.applicationCommands('1266716044865572925'), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
} )();