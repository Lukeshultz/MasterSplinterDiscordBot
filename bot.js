const discord = require("discord.js");
const nuke = new discord.Client();
const prefix = "ms!";
var isAdmin = false;
const token = "NzI4NzA0MjQ5NTg3OTU3ODIw.Xv_uyA.ve_nXV4aKSIs3uzLMoNmIX1DnKg";
nuke.on('ready', () =>
{
//nuke.channels.find(x => x.name === 'ask-to-get-accepted').send('Hello! I\'m now connected!');
console.log(" ")
console.log(`${nuke.user.tag} is online.`);
nuke.user.setPresence({ game: { name: `Making people read the rules!` }, type: 0 });
});

nuke.on('message', (msg)=>{
	
isAdmin = false;	
	
if(msg.member.roles.find(r => r.name === "Admin") || msg.member.roles.find(r => r.name === "Mod")){
	isAdmin = true;
}

//did read

	if(isAdmin === false && msg.content.indexOf('🥛') !== -1 &&
	 msg.channel.name === 'ask-to-get-accepted' &&
	 msg.content.indexOf("Thank you for reading the rules! <@&728633258677633090> <@&728633258677633089>") === -1 &&
	msg.content.indexOf("Sorry, please go back and read over the rules completely!") === -1 &&
	msg.content.indexOf("Hello, and welcome! :heart: Please read over the rules in <#711300534631530621>, choose your roles in <#711300534631530619>, write an introduction in <#711300534631530620> Ping any Admin once you have completed all of these steps, do not DM them.") === -1)
	{
		console.log('read rules');
		msg.delete();
		msg.reply("Thank you for reading the rules!" + " <@&728633258677633090> <@&728633258677633089>").then(d_msg => {d_msg.delete((10)*1000);});
		
	}
	
	//did not read
	if(isAdmin == false && msg.content.indexOf('🥛') === -1 && msg.channel.name === 'ask-to-get-accepted'&&
	 msg.content.indexOf("Thank you for reading the rules! <@&728633258677633090> <@&728633258677633089>") === -1 &&
	msg.content.indexOf("Sorry, please go back and read over the rules completely!") === -1 &&
	msg.content.indexOf("Hello, and welcome! :heart: Please read over the rules in <#711300534631530621>, choose your roles in <#711300534631530619>, write an introduction in <#711300534631530620> Ping any Admin once you have completed all of these steps, do not DM them.") === -1)
	{
		console.log('hasn\'t read rules');
		msg.reply("Sorry, please go back and read over the rules completely!").then(d_msg => {d_msg.delete((10)*1000);});
		msg.delete(5000);
		
	}


if(msg.member.roles.find(r => r.name === "Admin") || msg.member.roles.find(r => r.name === "Mod")){
	if (msg.content.toLowerCase()==="reset" && msg.channel.name === 'ask-to-get-accepted') {
			async function clear() {
				msg.delete();
				const fetched = await msg.channel.fetchMessages({limit: 99});
				msg.channel.bulkDelete(fetched);
			}
			clear();
			
		msg.channel.send("Hello, and welcome! :heart: Please read over the rules in <#711300534631530621>, choose your roles in <#711300534631530619>, write an introduction in <#711300534631530620> Ping any Admin once you have completed all of these steps, do not DM them.");
	}
}
});
nuke.login(token);
