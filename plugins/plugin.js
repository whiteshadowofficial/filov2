/*
 __________   _________     ________________  ________  
     EDUTHO BUT CREDIT THERANAM ALLEGIL ETH 👈🏻👆🏻👆🏻
     
     REMOVE CHEYIYARUTH
     
     THANKS TO WHITEDEVIL-TERROR BOY
_______  __________  ___________  ________    __________     
*/


const Ktb = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const got = require('got');
const cwebp = require('cwebp-bin');
const exec = require('child_process').exec;
const os = require("os");
const white = require('../white');
const LOAD_ING = "*TRYING TO DOWNLOAD*"
const UPLOAD_ING = "*✅️ DOWNLOADING COMPLETED* \n\n *UPLOADING IN PROCESS...*"
const axios = require('axios')
const Axios = require('axios')
const Config = require('../config');
const ILOAD_ING = "*✅️Connecting To INSTAGRAM*"
const IUPLOAD_ING = "*✅️Connected To INSTAGRAM* \n\n\n *DOWNLOADING & UPLOADING IN PROCESS...*"
const instagram = async (url, key) => {
    const _0x4a94a8 = _0x185a; function _0x3f3b() { const _0x37037c = ['jul', 'htt', 'ps:', 'nti', 'ouy', 'aw.', 'kit', '/in', 'sta', '?ur', 'dat', 'get', 'arr']; _0x3f3b = function () { return _0x37037c; }; return _0x3f3b(); } function _0x185a(_0x38e93d, _0x3f3b83) { const _0x185a5f = _0x3f3b(); _0x185a = function (_0x829ec5, _0x405d60) { _0x829ec5 = _0x829ec5 - 0xe5; let _0x20f676 = _0x185a5f[_0x829ec5]; return _0x20f676; }; return _0x185a(_0x38e93d, _0x3f3b83); } if (key != _0x4a94a8(0xe5) + 'ie') throw new Error('Jul' + 'ie'); const response = await axios(_0x4a94a8(0xe6) + _0x4a94a8(0xe7) + '//u' + _0x4a94a8(0xe8) + 'tle' + 'd-1' + _0x4a94a8(0xe9) + 'r1r' + 'szh' + _0x4a94a8(0xea) + 'run' + _0x4a94a8(0xeb) + '.sh' + _0x4a94a8(0xec) + _0x4a94a8(0xed) + _0x4a94a8(0xee) + 'l=' + url); const { status, result } = response[_0x4a94a8(0xef) + 'a']; if (!status) return { 'status': status }; const { type, data } = result[0x0]; const res = await axios[_0x4a94a8(0xf0)](data, { 'responseType': _0x4a94a8(0xf1) + 'ayb' + 'uff' + 'er' }); return { 'type': type, 'data': res[_0x4a94a8(0xef) + 'a'], 'status': status };
}

const Language = require('../language');
const Lang = Language.getString('sticker');

const rows = [
 {title: 'FILO bot support group:-', description: "\n\n*https://chat.whatsapp.com/KDT4Q5F4zq99ubruR5T9k1*", rowId:"wd1"},
 {title: 'GIT:-', description: "\n\n• guthub.com/nexusNw/filov2\n\n\n", rowId:"wd2"},
 {title: 'All bot support group:-', description: "\n\n*https://chat.whatsapp.com/CY7wJC070o04yxfTuT1yPf*", rowId:"wd3"}
]

const sections = [{title: "Filov2 Menu", rows: rows}]

const button = {
 buttonText: 'Click Me Here!!!',
 description: "*Hello,This is  FILO V2*\n\n ```please check it```",
 sections: sections,
 listType: 1
}

const conf = require('../config');
let wk = conf.WORKTYPE == 'public' ? false : true

Ktb.addCommand({on: 'text', fromMe: wk, deleteCommand: false}, (async (message, match) => {
    if (message.jid === '919562803423-1627735504@g.us') {
	    
             return;
         }
         let regex1 = new RegExp('sticker')
         let regex2 = new RegExp('https://www.instagram.com/')
         let regex3 = new RegExp('owner')
         let regex4 = new RegExp('Owner')
         let regex5 = new RegExp('https://youtu.be/')
	 let regex6 = new RegExp('link')
	 
         
         
    
    if (regex2.test(message.message)) {
              
              var reply = await message.client.sendMessage(message.jid, ILOAD_ING , MessageType.text, { quoted: message.data });
    
              const { status, type, data } = await instagram('https://www.instagram.com/${match[1]}', 'julie')
               if (!status) return await message.sendMessage('*❌️SOMETHING WRONG❌️* \n\n ```REASON```: *_API KEY EXPIRED_*\n\n*CONTACT the  developer-->> (TERROR-BOY)[https://tinyurl.com/suf4xpat]*')
           
               reply = await message.client.sendMessage(message.jid,IUPLOAD_ING , MessageType.text, { quoted: message.data });
               
               if (type === 'image') return await message.sendMessage(data, MessageType.image, { caption: "*ᴍᴀᴅᴇ ʙʏ ᴡʜɪᴛᴇ ᴅᴇᴠɪʟ*", quoted: message.data  , thumbnail: White.tm_b })
               
               if (type === 'video') return await message.sendMessage(data, MessageType.video, { caption: "*ᴍᴀᴅᴇ ʙʏ ᴡʜɪᴛᴇ ᴅᴇᴠɪʟ*", quoted: message.data , thumbnail: White.tm_b })
            }

if (regex3.test(message.message)) {

    const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN: AFLAHXRD [FILOV2]\n' // full name
            + 'ORG: NEXUSNW;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=447441469243:+91 8129624395\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "AFLAHXRD [FILOV2]", vcard: vcard}, MessageType.contact)
}

if (regex4.test(message.message)) {

    const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN: AFLAHXRD [FILOV2]\n' // full name
            + 'ORG: NEXUSNW;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=447441469243:+91 8129624395\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "AFLAHXRD [FILOV2]", vcard: vcard}, MessageType.contact)
}

if (regex5.test(message.message)) {

    var reply = await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, { quoted: message.data });
	
        const {data} = await axios(`https://api.zeks.me/api/ytplaymp4?apikey=ApiKannappi&q=https://youtu.be/${match[1]}`)
	
        const { status, result } = data


	const videoBuffer = await axios.get(`${result.url_video}`, {responseType: 'arraybuffer'})

        if(!status) return await message.sendMessage('*NO RESULT FOUND🥲*')

	reply = await message.client.sendMessage(message.jid,UPLOAD_ING , MessageType.text, { quoted: message.data });

        let msg = '```'
        msg +=  `TITLE :${result.title}\n\n`
        msg +=  `THUMBNAIL :${result.thumbnail}\n\n`
        msg +=  `SOURCE :${result.source}\n\n`
        msg +=  `SIZE :${result.size}\n\n`
        msg +=  `DOWNLOADING LINK :${result.url_video}\n\n`
        msg += '```' 
	 return await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video, {mimetype: Mimetype.mp4, ptt: false , caption: msg , thumbnail: White.tm_b}); 
}	
	
}));
