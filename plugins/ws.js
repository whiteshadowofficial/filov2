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
        r_text[22] = "https://i.imgur.com/pSGy86T.mp4";
        r_text[23] = "https://i.imgur.com/3kFCmjw.mp4";
        r_text[24] = "https://i.imgur.com/5OEEtvZ.mp4";
        r_text[25] = "https://i.imgur.com/OJ9Krty.mp4";
        r_text[26] = "https://i.imgur.com/bkjkhCB.mp4";
        r_text[25] = "https://i.imgur.com/VdqgDrh.mp4";
        r_text[26] = "https://i.imgur.com/XSbfAkN.mp4";
        r_text[27] = "https://i.imgur.com/i9Xplth.mp4";
        r_text[28] = "https://i.imgur.com/vjsmSP8.mp4";
        r_text[29] = "https://i.imgur.com/wJHNLeh.mp4";
        r_text[30] = "https://i.imgur.com/mKX5p74.mp4";
        r_text[31] = "https://i.imgur.com/WXEksN4.mp4";
        r_text[32] = "https://imgur.com/3VOuEfg.mp4";
        r_text[33] = "https://imgur.com/rbGjIBI.mp4";
        r_text[34] = "https://imgur.com/tt2gMXr.mp4";
        r_text[35] = "https://imgur.com/kR4XGKY.mp4";
        r_text[36] = "https://imgur.com/3PHv4Uu.mp4";
        r_text[37] = "https://imgur.com/4O5pLdC.mp4";
        r_text[38] = "https://imgur.com/Q6REjY0.mp4";
        r_text[39] = "https://imgur.com/5m5TDEJ.mp4";
        r_text[40] = "https://i.imgur.com/j8EHCh6.mp4";
        r_text[41] = "https://i.imgur.com/j8EHCh6.mp4";
        r_text[42] = "https://i.imgur.com/IUb17JQ.mp4";
        r_text[43] = "https://i.imgur.com/SH3tyRo.mp4";
        r_text[44] = "https://i.imgur.com/mSAFD9c.mp4";
        r_text[45] = "https://imgur.com/a/yY48lMK.mp4";
        r_text[46] = "https://imgur.com/64FWq3W.mp4";
        r_text[47] = "https://imgur.com/aZlS1bV.mp4";
        r_text[48] = "https://imgur.com/ed0X9m5.mp4";
        r_text[49] = "https://imgur.com/nDlrBug.mp4";
        r_text[50] = "https://imgur.com/3AczL5y.mp4";
        r_text[51] = "https://imgur.com/CeizCwC.mp4";
        r_text[52] = "https://imgur.com/XQNNBxg.mp4";
        
        

        var i = Math.floor(53*Math.random())

        var respovideo = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
        
// EXPORTING
        reply = await message.client.sendMessage(message.jid,'*𖦹ᴜᴘʟᴏᴀᴅɪɴɢ ᴡᴀ sᴛᴀᴛᴜᴢ𖦹*',MessageType.text);
        await message.client.sendMessage(message.jid, Buffer(respovideo.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '◄━━━━━━━⦁⦁ *☯︎ᴡᴀ sᴛᴀᴛᴜs ʙʏ ғɪʟᴏ❦︎* ⦁⦁━━━━━━━━►',})

    }));

} 
