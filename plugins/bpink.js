const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const config = require('../config');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'bpw', fromMe: false, desc: 'Gives bp wallpaper'}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://xteam.xyz/randomimage/blackpink?APIKEY=ba370b4275f5843b";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: ` Extreme by Nexus... `}) 

}));
