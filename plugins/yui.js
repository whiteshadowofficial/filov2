const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const config = require('../config');
const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'acp', fromMe: false, desc: 'Gives anime couple wallpaper'}, (async (message, match) => {

    var r_text = new Array ();



  r_text[0] = "https://zenzapi.xyz/api/random/couples?apikey=07d3f898a6";


    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: ` FILO ❤️... `}) 

}));
