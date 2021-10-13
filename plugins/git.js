const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/d614wuT.jpeg";
  r_text[1] = "https://i.imgur.com/WK9DWvh.jpeg";
  r_text[2] = "https://i.imgur.com/dE69neI.jpeg";
  r_text[3] = "https://i.imgur.com/qei4PnS.jpeg";
  r_text[4] = "https://i.imgur.com/1hGpu9y.jpeg";
    
    var i = Math.floor(5*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*✮  ❖ ᴀͥɴͭᴜᷤܓᴍᴡͫᴏͤʟ ❖  ✮*
 
 ❖ *͢ꪶ᳄ɪᴛs-ᴍᴇ  ͢ғɪʟᴏ ᴠ2*
 ❖ *ᴏᴡɴᴇʀ: wa.me/918129624395* 
 ❖ *ᴅᴇᴠᴇʟᴏᴘᴇʀ: ͢ꪶ ͢ɴᴇxᴜs࿐⁩*
 ❖ *ɢɪᴛʜᴜʙ ʟɪɴᴋ:http://github.com/nexusNw/filov2*`}) 

}));
