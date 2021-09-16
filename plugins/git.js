const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/d614wuT.png";
  r_text[1] = "https://i.imgur.com/WK9DWvh.png";
  r_text[2] = "https://i.imgur.com/dE69neI.png";
  r_text[3] = "https://i.imgur.com/qei4PnS.png";
  r_text[4] = "https://i.imgur.com/1hGpu9y.png";
    
    var i = Math.floor(5*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*FILO V2 by AFLAHXRD*\n
\n*owner number wa.me/918129624395*\n
\n*CONTACT OWNER THROUGH social networks- (Instagram) @nexus.efx*\n
\n*Git link : www.github.com/nexusNw/filov2*\n\n
\n*USE ME FOR GOOD ,NOT FOR WORST🙂*\n
`}) 

}));
