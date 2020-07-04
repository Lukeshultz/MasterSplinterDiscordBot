const discord = require("discord.js");
const nuke = new discord.Client();
const prefix = "ms!";
var isAdmin = false;
var trollMode = false;
const resetMessage = "Hello, and welcome! :heart: Please read over the rules in <#711300534631530621>, choose your roles in <#711300534631530619>, write an introduction in <#711300534631530620> Ping any Admin once you have completed all of these steps, do not DM them.";
var isBotMessage = false;



nuke.on('ready', () =>
{
//nuke.channels.find(x => x.name === 'ask-to-get-accepted').send('Hello! I\'m now connected!');
console.log(" ")
console.log(`${nuke.user.tag} is online.`);
nuke.user.setPresence({ game: { name: `Making people read the rules!` }, type: 0 });
});







nuke.on('message', (msg)=>{
	
if(msg.member.roles.find(r => r.name === "Bots") || msg.member.roles.find(r => r.name === "Master Splinter"))
{
	isBotMessage = true;
}
else
{
	isBotMessage = false;
}
	
isAdmin = false;	

if(msg.member.roles.find(r => r.name === "Bot Dev") && msg.content.indexOf('troll true') !== -1 && trollMode === false){
	console.log("trollMode is now on");
	trollMode = true;
}
if(msg.member.roles.find(r => r.name === "Bot Dev") && msg.content.indexOf('troll false') !== -1 && trollMode === true){
	console.log("trollMode is now off");
	trollMode = false;
}




if(trollMode === true && msg.member.roles.find(r => r.name === "Bot Dev") && msg.content.indexOf('gimme pp back') !== -1)
{
	console.log('getting pp back');
	for(var i = 0; i < 50; i++)
	{
		msg.channel.send("<@312350272737509397> pls give luke his pp back!");
		msg.delete(1000);
	}
}




if(msg.member.roles.find(r => r.name === "Admin") || msg.member.roles.find(r => r.name === "Mod")|| msg.member.roles.find(r => r.name === "Bot Dev")){
	isAdmin = true;
}

//did read

	if(isAdmin === false && msg.content.indexOf('🥛') !== -1 && msg.channel.name === 'ask-to-get-accepted' && isBotMessage === false)
	{
		console.log('read rules');
		msg.delete();
		msg.reply("Thank you for reading the rules!" + " <@&728633258677633090> <@&728633258677633089>").then(d_msg => {d_msg.delete((10)*1000);});
		
	}
	
	//did not read
	if(isAdmin == false && msg.content.indexOf('🥛') === -1 && msg.channel.name === 'ask-to-get-accepted' && isBotMessage === false)
	{
		console.log('hasn\'t read rules');
		
		msg.reply("Sorry, please go back and read over the rules completely!").then(d_msg => {d_msg.delete((10)*1000);});
		msg.delete((10)*1000);
		
	}


if(msg.member.roles.find(r => r.name === "Admin") || msg.member.roles.find(r => r.name === "Mod")|| msg.member.roles.find(r => r.name === "Bot Dev")){
	if (msg.content.toLowerCase()==="reset" && msg.channel.name === 'ask-to-get-accepted') {
			async function clear() {
				msg.delete();
				const fetched = await msg.channel.fetchMessages({limit: 99});
				msg.channel.bulkDelete(fetched);
			}
			clear();
			
		msg.channel.send(resetMessage);
	}
}
});
nuke.login(process.env.token);