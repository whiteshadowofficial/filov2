/* Copyright © 2021 TERROR BOY.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WHITE DEVIL ----»»» TERROR BOY
*/

const Ktb = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('whatsappstatus');

// WHATSAPP STATUS 

// THANKS FOR THIS PLUGIN - KARTHIK_TERROR-BOY


if (Config.WORKTYPE == 'private') {

    Ktb.addCommand({pattern: 'ws', fromMe: true, desc: Lang.WS}, (async (message, match) => {
        
     var reply = await message.client.sendMessage(message.jid,'*➪ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴡᴀ sᴛᴀᴛᴜs༄*', MessageType.text);
 
        var r_text = new Array ();

        r_text[0] = "https://i.imgur.com/v09GD66.mp4";
        r_text[1] = "https://i.imgur.com/ffznHmU.mp4";
        r_text[2] = "https://i.imgur.com/u67PFx3.mp4";
        r_text[3] = "https://i.imgur.com/NzLjpdp.mp4";
        r_text[4] = "https://i.imgur.com/14nyxqC.mp4";
        r_text[5] = "https://i.imgur.com/a3ZI9MP.mp4";
        r_text[6] = "https://i.imgur.com/vowUoHC.mp4";
        r_text[7] = "https://i.imgur.com/jqUdWby.mp4";
        r_text[8] = "https://i.imgur.com/mDyoEYv.mp4";
        r_text[9] = "https://i.imgur.com/IJ3jpAL.mp4";
        r_text[10] = "https://i.imgur.com/6WNGqck.mp4";
        r_text[11] = "https://i.imgur.com/LAhRkYV.mp4";
        r_text[12] = "https://i.imgur.com/TavrDy7.mp4";
        r_text[13] = "https://i.imgur.com/hxh13aX.mp4";
        r_text[14] = "https://i.imgur.com/FMd3MS3.mp4";
        r_text[15] = "https://i.imgur.com/KNNkd8x.mp4";
        r_text[16] = "https://i.imgur.com/B6ZHYsw.mp4";
        r_text[17] = "https://i.imgur.com/ArQGo5H.mp4";
        r_text[18] = "https://i.imgur.com/rjXo4Zj.mp4";
        r_text[19] = "https://i.imgur.com/tK03ROX.mp4";
        r_text[20] = "https://i.imgur.com/kPgFfHL.mp4";
        r_text[21] = "https://i.imgur.com/u8CXxVp.mp4";
        r_text[21] = "https://i.imgur.com/yZvyxee.mp4"; 
        
        

        var i = Math.floor(22*Math.random())

        var respovideo = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
        
// EXPORTING
        reply = await message.client.sendMessage(message.jid,'*𖦹ᴜᴘʟᴏᴀᴅɪɴɢ ᴡᴀ sᴛᴀᴛᴜᴢ𖦹*', MessageType.text);
        await message.client.sendMessage(message.jid, Buffer(respovideo.data), MessageType.video, {mimetype: Mimetype.mp4, quoted: message.data, caption: '◄━━━━━━━⦁⦁ *☯︎ᴡᴀ sᴛᴀᴛᴜs ʙʏ ғɪʟᴏ❦︎* ⦁⦁━━━━━━━━►'})

        
    }));
}
else if (Config.WORKTYPE == 'public') {

    Ktb.addCommand({pattern: 'ws', fromMe: false, desc: Lang.WS}, (async (message, match) => {
        
      var reply = await message.client.sendMessage(message.jid,'*➪ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴡᴀ sᴛᴀᴛᴜs༄*',MessageType.text);
 
     
        
        var r_text = new Array ();

        r_text[0] = "https://i.imgur.com/v09GD66.mp4";
        r_text[1] = "https://i.imgur.com/ffznHmU.mp4";
        r_text[2] = "https://i.imgur.com/u67PFx3.mp4";
        r_text[3] = "https://i.imgur.com/NzLjpdp.mp4";
        r_text[4] = "https://i.imgur.com/14nyxqC.mp4";
        r_text[5] = "https://i.imgur.com/a3ZI9MP.mp4";
        r_text[6] = "https://i.imgur.com/vowUoHC.mp4";
        r_text[7] = "https://i.imgur.com/jqUdWby.mp4";
        r_text[8] = "https://i.imgur.com/mDyoEYv.mp4";
        r_text[9] = "https://i.imgur.com/IJ3jpAL.mp4";
        r_text[10] = "https://i.imgur.com/6WNGqck.mp4";
        r_text[11] = "https://i.imgur.com/LAhRkYV.mp4";
        r_text[12] = "https://i.imgur.com/TavrDy7.mp4";
        r_text[13] = "https://i.imgur.com/hxh13aX.mp4";
        r_text[14] = "https://i.imgur.com/FMd3MS3.mp4";
        r_text[15] = "https://i.imgur.com/KNNkd8x.mp4";
        r_text[16] = "https://i.imgur.com/B6ZHYsw.mp4";
        r_text[17] = "https://i.imgur.com/ArQGo5H.mp4";
        r_text[18] = "https://i.imgur.com/rjXo4Zj.mp4";
        r_text[19] = "https://i.imgur.com/tK03ROX.mp4";
        r_text[20] = "https://i.imgur.com/kPgFfHL.mp4";
        r_text[21] = "https://i.imgur.com/u8CXxVp.mp4";
        r_text[21] = "https://i.imgur.com/yZvyxee.mp4";
        
        

        var i = Math.floor(22*Math.random())

        var respovideo = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
        
// EXPORTING
        reply = await message.client.sendMessage(message.jid,'*𖦹ᴜᴘʟᴏᴀᴅɪɴɢ ᴡᴀ sᴛᴀᴛᴜᴢ𖦹*',MessageType.text);
        await message.client.sendMessage(message.jid, Buffer(respovideo.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '◄━━━━━━━⦁⦁ *☯︎ᴡᴀ sᴛᴀᴛᴜs ʙʏ ғɪʟᴏ❦︎* ⦁⦁━━━━━━━━►',})

    }));

} 
