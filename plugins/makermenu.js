        /* Codded by @Filo V2 BOT

Telegram: t.me/Filo V2BOT
youtube https://youtube.com/c/ICHUTECH

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Filo V2 BOT
*/

const QueenSew = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command"

if (Config.WORKTYPE == 'private') {

   QueenSew.addCommand({pattern: 'makermenu', fromMe: true}, (async (message, match) => {    

    await message.sendMessage('```❤❤❤❤❤❤❤❤❤❤❤\n\n\n\n👑Filo V2 TEXT MAKER👑```\n_~*coded by ɴᴇͥxͭᴜᷤꜱ ꜱͫɪͤʀ*~_\n\n\n\n❤❤❤❤❤❤❤❤❤❤\n\n\n\nClick..👉👉👉 ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n\n\n❤\n🌞Usage: *.freefire*\n🌚Desc: Enters the text as the caption for a freefire themed logo.\n🌝 Example : *.freefire Filo V2*\n\n🌞Usage: *.cslogo*\n🌚Desc: Enters the text as the caption for a cs go themed logo.\n🌝 Example : *.cslogo Filo V2*\n\n🌞Usage: *.crosslogo*\n🌚Desc: Enters the text as the caption for a cross themed logo.\n🌝 Example : *.crosslogo Filo V2*\n\n🌞Usage: *.bpink*\n🌚Desc: Enters the text as the caption for a blackpink themed logo.\n🌝 Example : *.bpink Filo V2*\n\n🌞Usage: *.ninjalogo*\n🌚Desc: Enters the text as the caption for a ninja themed logo.\n🌝 Example : *.ninjalogo Filo V2*\n\n🌞Usage: *.logopubg*\n🌚Desc: Converts the text into a pubg themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🌝 Example : *.logopubg Filo V2;BOT*\n\n🌞Usage: *.water2color*\n🌚Desc: Converts the text into a water themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🌝 Example : *.water2color Filo V2;BOT*\n\n🌞Usage: *.snowwrite*\n🌚Desc: Converts the text into a snowwrite themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🌝 Example : *.snowwrite Filo V2;BOT*\n\n🌞Usage: *.logowolf*\n🌚Desc: Converts the text into a wolf themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🌝 Example : *.logowolf Filo V2;BOT*\n\n🌞Usage: *.sparkling*\n🌚Desc: Converts the text into a sparkling themed imageYou must enter the heading and subheading seperated by *;* in order!\n🌝 Example : *.sparkling Filo V2;BOT*\n\n🌞Usage: *.phub*\n🌚Desc: Converts the text into phub logo.\n🌝 Example : *.phub Filo V2/BOT*\n\n🌞Usage: *.1neon*\n🌚Desc: Converts the text into neon themed image.\n🌝 Example : *.1neon Filo V2*\n\n🌞Usage: *.naruto*\n🌚Desc: Converts the text into naruto themed image.\n🌝 Example : *.naruto Filo V2*\n\n🌞Usage: *.blueneon*\n🌚Desc: Converts the text into blueneon themed image.\n🌝 Example : *.blueneon Filo V2*\n\n🌞Usage: *.2hacker*\n🌚Desc: Converts the text into hacker themed image.\n🌝 Example : *.2hacker Filo V2*\n\n🌞Usage: *.3hacker*\n🌚Desc: Converts the text into hacker themed image.\n🌝 Example : *.3hacker Filo V2*\n\n🌞Usage: *.breakwall*\n🌚Desc: Converts the text into breakwall themed image.\n🌝 Example : *.breakwall Filo V2*\n\n🌞Usage: *.dropwater*\n🌚Desc: Converts the text into dropwater themed image.\n🌝 Example : *.dropwater Filo V2*\n\n🌞Usage: *.flowertext*\n🌚Desc: Converts the text into flowertext themed image.\n🌝 Example : *.flowertext Filo V2*\n\n🌞Usage: *.sliktext*\n🌚Desc: Converts the text into sliktext themed image.\n🌝 Example : *.sliktext Filo V2*\n\n🌞Usage: *.flame*\n🌚Desc: Converts the text into flame themed image.\n🌝 Example : *.flame Filo V2*\n\n🌞Usage: *.1glow*\n🌚Desc: Converts the text into 1glow themed image.\n🌝 Example : *.1glow Filo V2*\n\n🌞Usage: *.skytext*\n🌚Desc: Converts the text into skytext themed image.\n🌝 Example : *.skytext Filo V2*\n\n🌞Usage: *.smoke*\n🌚Desc: Converts the text into smoke themed image.\n🌝 Example : *.smoke Filo V2*\n\n🌞Usage: *.lithgtext*\n🌚Desc: Converts the text into lithgtext themed image.\n🌝 Example : *.lithgtext Filo V2*\n\n🌞Usage: *.sfire*\n🌚Desc: Converts the text into sfire themed image.\n🌝 Example : *.sfire Filo V2*\n\n🌞Usage: *.sandw*\n🌚Desc: Converts the text into sandw themed image.\n🌝 Example : *.sandw Filo V2*\n\n🌞Usage: *.gplay*\n🌚Desc: Converts the text into gplay themed image.\n🌝 Example : *.gplay Filo V2*\n\n🌞Usage: *.splay*\n🌚Desc: Converts the text into splay themed image.\n🌝 Example : *.splay Filo V2*\n\n🌞Usage: *.3dbox*\n🌚Desc: Converts the text into 3dbox themed image.\n🌝 Example : *.3dbox Filo V2*\n\n🌞Usage: *.leave*\n🌚Desc: Converts the text into leave themed image.\n🌝 Example : *.leave Filo V2*\n\n🌞Usage: *.blood*\n🌚Desc: It Sends a blood image of the text provided.\n🌝 Example : *.blood Filo V2*\n\n🌞Usage: *.cloud*\n🌚Desc: It Sends a sky image of the text provided\n🌝 Example : *.cloud Filo V2*\n\n🌞Usage: *.glue*\n🌚Desc: it makes 3D Glue text\n🌝 Example : *.glue Filo V2*\n\n🌞Usage: *.watercolour*\n🌚Desc: Converts the text into a watercolour themed image.\n🌝 Example : *.watercolor Filo V2*\n\n🌞Usage: *.neonlight*\n🌚Desc: Converts the text into a neonlight themed image.\n🌝 Example : *.neonlight Filo V2*\n\n🌞Usage: *.3dtext*\n🌚Desc: Converts the provided text into a 3D style image.\n🌝 Example : *.3dtext Filo V2*\n\n🌞Usage: *.galaxy*\n🌚Desc: it makes metal galaxy text\n🌝 Example : *.galaxy Filo V2/BOT*\n\n🌞Usage: *.skull*\n🌚Desc: it makes skull logo\n🌝 Example : *.skull Filo V2*\n\n🌞Usage: *.robot*\n🌚Desc: it makes Robot logo\n🌝 Example : *.robot Filo V2*\n🌞Usage: *.toxic*\n🌚Desc: it makes Toxic logo\n🌝 Example : *.toxic Filo V2*\n\n🌞Usage: *orangeglass*\n🌚Desc: it makes gradient text\n🌝 Example : *.orangeglass Filo V2*\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*MAKED By Filo V2 BOT*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷···\n');

    }));
    QueenSew.addCommand({ pattern: '1neon ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/hartatahta?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'naruto ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/naruto?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'blueneon ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/bneon?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: '2hacker ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/matrix?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'breakwall ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: '3hacker ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/gneon?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'dropwater ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/dropwater?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'flowertext ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/flowertext?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'crosslogo ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/crosslogo?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'sliktext ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/silktext?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'flame ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/flametext?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: '1glow ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'somke ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/smoketext?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'skytext ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'cslogo ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/cslogo?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'lithgtext ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/lithgtext?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'xmas ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/crismes?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'sfire ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/tfire?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'sandw ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/sandw?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'gplay ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/gplaybutton?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'splay ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/splaybutton?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: '3dbox ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'bpink ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'leave ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/leavest?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({pattern: 'logowolf ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/wolflogo?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

}));
    QueenSew.addCommand({pattern: 'logopubg ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/pubglogo?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

}));
    QueenSew.addCommand({pattern: 'snowwrite ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/snowwrite?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

}));
   QueenSew.addCommand({pattern: 'water2color ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/watercolour?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

}));
    
}

else if (Config.WORKTYPE == 'public') {

    QueenSew.addCommand({pattern: 'makermenu', fromMe: false,}, (async (message, match) => {    

    await message.sendMessage('```👑Filo V2 TEXT MAKER👑```\n_~*coded by hisham-Muhammed*~_\n\n🌞Usage: *.freefire*\n🌚Desc: Enters the text as the caption for a freefire themed logo.\n🌝 Example : *.freefire Filo V2*\n\n🌞Usage: *.cslogo*\n🌚Desc: Enters the text as the caption for a cs go themed logo.\n🌝 Example : *.cslogo Filo V2*\n\n🌞Usage: *.crosslogo*\n🌚Desc: Enters the text as the caption for a cross themed logo.\n🌝 Example : *.crosslogo Filo V2*\n\n🌞Usage: *.bpink*\n🌚Desc: Enters the text as the caption for a blackpink themed logo.\n🌝 Example : *.bpink Filo V2*\n\n🌞Usage: *.ninjalogo*\n🌚Desc: Enters the text as the caption for a ninja themed logo.\n🌝 Example : *.ninjalogo Filo V2*\n\n🌞Usage: *.logopubg*\n🌚Desc: Converts the text into a pubg themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🌝 Example : *.logopubg Filo V2;BOT*\n\n🌞Usage: *.water2color*\n🌚Desc: Converts the text into a water themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🌝 Example : *.water2color Filo V2;BOT*\n\n🌞Usage: *.snowwrite*\n🌚Desc: Converts the text into a snowwrite themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🌝 Example : *.snowwrite Filo V2;BOT*\n\n🌞Usage: *.logowolf*\n🌚Desc: Converts the text into a wolf themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🌝 Example : *.logowolf Filo V2;BOT*\n\n🌞Usage: *.sparkling*\n🌚Desc: Converts the text into a sparkling themed imageYou must enter the heading and subheading seperated by *;* in order!\n🌝 Example : *.sparkling Filo V2;BOT*\n\n🌞Usage: *.phub*\n🌚Desc: Converts the text into phub logo.\n🌝 Example : *.phub Filo V2/BOT*\n\n🌞Usage: *.1neon*\n🌚Desc: Converts the text into neon themed image.\n🌝 Example : *.1neon Filo V2*\n\n🌞Usage: *.naruto*\n🌚Desc: Converts the text into naruto themed image.\n🌝 Example : *.naruto Filo V2*\n\n🌞Usage: *.blueneon*\n🌚Desc: Converts the text into blueneon themed image.\n🌝 Example : *.blueneon Filo V2*\n\n🌞Usage: *.2hacker*\n🌚Desc: Converts the text into hacker themed image.\n🌝 Example : *.2hacker Filo V2*\n\n🌞Usage: *.3hacker*\n🌚Desc: Converts the text into hacker themed image.\n🌝 Example : *.3hacker Filo V2*\n\n🌞Usage: *.breakwall*\n🌚Desc: Converts the text into breakwall themed image.\n🌝 Example : *.breakwall Filo V2*\n\n🌞Usage: *.dropwater*\n🌚Desc: Converts the text into dropwater themed image.\n🌝 Example : *.dropwater Filo V2*\n\n🌞Usage: *.flowertext*\n🌚Desc: Converts the text into flowertext themed image.\n🌝 Example : *.flowertext Filo V2*\n\n🌞Usage: *.sliktext*\n🌚Desc: Converts the text into sliktext themed image.\n🌝 Example : *.sliktext Filo V2*\n\n🌞Usage: *.flame*\n🌚Desc: Converts the text into flame themed image.\n🌝 Example : *.flame Filo V2*\n\n🌞Usage: *.1glow*\n🌚Desc: Converts the text into 1glow themed image.\n🌝 Example : *.1glow Filo V2*\n\n🌞Usage: *.skytext*\n🌚Desc: Converts the text into skytext themed image.\n🌝 Example : *.skytext Filo V2*\n\n🌞Usage: *.smoke*\n🌚Desc: Converts the text into smoke themed image.\n🌝 Example : *.smoke Filo V2*\n\n🌞Usage: *.lithgtext*\n🌚Desc: Converts the text into lithgtext themed image.\n🌝 Example : *.lithgtext Filo V2*\n\n🌞Usage: *.sfire*\n🌚Desc: Converts the text into sfire themed image.\n🌝 Example : *.sfire Filo V2*\n\n🌞Usage: *.sandw*\n🌚Desc: Converts the text into sandw themed image.\n🌝 Example : *.sandw Filo V2*\n\n🌞Usage: *.gplay*\n🌚Desc: Converts the text into gplay themed image.\n🌝 Example : *.gplay Filo V2*\n\n🌞Usage: *.splay*\n🌚Desc: Converts the text into splay themed image.\n🌝 Example : *.splay Filo V2*\n\n🌞Usage: *.3dbox*\n🌚Desc: Converts the text into 3dbox themed image.\n🌝 Example : *.3dbox Filo V2*\n\n🌞Usage: *.leave*\n🌚Desc: Converts the text into leave themed image.\n🌝 Example : *.leave Filo V2*\n\n🌞Usage: *.blood*\n🌚Desc: It Sends a blood image of the text provided.\n🌝 Example : *.blood Filo V2*\n\n🌞Usage: *.cloud*\n🌚Desc: It Sends a sky image of the text provided\n🌝 Example : *.cloud Filo V2*\n\n🌞Usage: *.glue*\n🌚Desc: it makes 3D Glue text\n🌝 Example : *.glue Filo V2*\n\n🌞Usage: *.watercolour*\n🌚Desc: Converts the text into a watercolour themed image.\n🌝 Example : *.watercolor Filo V2*\n\n🌞Usage: *.neonlight*\n🌚Desc: Converts the text into a neonlight themed image.\n🌝 Example : *.neonlight Filo V2*\n\n🌞Usage: *.3dtext*\n🌚Desc: Converts the provided text into a 3D style image.\n🌝 Example : *.3dtext Filo V2*\n\n🌞Usage: *.galaxy*\n🌚Desc: it makes metal galaxy text\n🌝 Example : *.galaxy Filo V2/BOT*\n\n🌞Usage: *.skull*\n🌚Desc: it makes skull logo\n🌝 Example : *.skull Filo V2*\n\n🌞Usage: *.robot*\n🌚Desc: it makes Robot logo\n🌝 Example : *.robot Filo V2*\n🌞Usage: *.toxic*\n🌚Desc: it makes Toxic logo\n🌝 Example : *.toxic Filo V2*\n\n🌞Usage: *orangeglass*\n🌚Desc: it makes gradient text\n🌝 Example : *.orangeglass Filo V2*\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*MAKED By Filo V2 BOT*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n');

    }));

    QueenSew.addCommand({ pattern: '1neon ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/hartatahta?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'naruto ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/naruto?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'blueneon ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/bneon?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: '2hacker ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/matrix?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'breakwall ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: '3hacker ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/gneon?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'dropwater ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/dropwater?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'flowertext ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/flowertext?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'crosslogo ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/crosslogo?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'sliktext ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/silktext?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'flame ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/flametext?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: '1glow ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'somke ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/smoketext?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'skytext ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'cslogo ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/cslogo?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'lithgtext ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/lithgtext?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'xmas ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/crismes?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'sfire ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/tfire?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'sandw ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/sandw?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'gplay ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/gplaybutton?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'splay ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/splaybutton?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: '3dbox ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'bpink ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({ pattern: 'leave ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/leavest?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

    }));
    QueenSew.addCommand({pattern: 'logowolf ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/wolflogo?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

}));
    QueenSew.addCommand({pattern: 'logopubg ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/pubglogo?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

}));
    QueenSew.addCommand({pattern: 'snowwrite ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/snowwrite?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

}));
   QueenSew.addCommand({pattern: 'water2color ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/watercolour?apikey=bY17wlPg4XQvRQkJRqXjPPipPd2&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*MAKED By Filo V2 BOT*' })

}));
    
    
}
