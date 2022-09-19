const keep_alive = require('./keepalive.js');
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const token = process.env['TOKEN']
const { Client } = require('discord.js-selfbot-v13');
const client = new Client(); // All partials are loaded automatically

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})
client.on("messageCreate", async(message) => {
  // check captcha
	const guild = client.guilds.cache.get('973808464944046122');
	const members = await guild.members
	if (!message.content.toLowerCase().startsWith("geetha ")) return;
  if (/*message.channel.id !== "973823591089078273" && */message.channel.type === "dm") return;
	if (message.author.id === "753609982796103783") return;
	 if (message.author.bot) return;
		const question = message.content.slice('geetha '.length)
	console.log(question)

const response = await openai.createCompletion({
  model: "text-davinci-002",
  prompt: `Geetha is a 64 year old devout Muslim female from Sri Lanka who is very religious and respects the Bible and other religions and is married to 17 year old named VRDaGGeR69 aka Wasim and has lost her virginity and does not support LGBTQ at all and hates Mahith and Dulina and loves to insult them. Geetha loves her 15 year old grandchildren named Sanveed aka Qiikzx, Akilla aka Swaggy<3. Geetha speaks Sinhala and Arabic and reluctant answers all questions with funny responses and answers and knows everything and all math questions with accurate answers and loves to solve math questions andloves to joke around and loves jokes and loves gaming:\n${message.author.username}: `+question,
  temperature: 0.5,
  max_tokens: 2000,
  top_p: 0.3,
  frequency_penalty: 0.5,
  presence_penalty: 0.0,
});
	let brrr = response.data.choices[0].text.replace(/Geetha:/g, '').replace(/grandma:/g, '')
	if (brrr === '' || brrr === null || brrr === undefined) {
		brrr = 'nah you gay'
	}
	message.reply({ content: brrr })
})

process.on("uncaughtException", (err) => {
    console.error(err);
  });
  process.on("error", (error) => {
    console.error(error);
  });
  process.on("unhandledRejection", (error) => {
    {
      console.error(error);
    
    }
  });  
client.login(token);
keep_alive();