/* Copyright (C) 2021 AMALSER.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Amalser - Amal
Wa.me/+919895828468
*/

const Neotro = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


Neotro.addCommand({pattern: 'help', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: '💌 Setvar', description: ",setvar      commands❦︎\n\n ", rowId:" rowid1"},
        {title: '💖 Git', description: ",git      -about filo✰\n\n ", rowId:"rowid2"},
        {title: '💚 Xmedia', description: ",xmedia       commands➪\n ", rowId:" rowid3"},
        {title: 'OWNER ✅️', description: "✰✰✰✰✰✰✰✰✰✰\n\n\nBOT OWNER.\n\n\n *Nexus_Sir* \n\n http://wa.me/+918129624395\n\n ", rowId:" rowid4"},
        {title: 'Free fire', description: "Free fire logo.\n\n\n*_50 FF LOGO PACK_*\n\n*🧞‍♂️.ff01 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff02 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff03 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff04 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff5 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff6 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff07 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff08 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff09 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff10 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff12 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff13 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff14 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff15 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff16 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff17 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff18 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff19 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff20 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff21 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff22 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff23 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff24 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff25 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff26 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff27 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff28 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff29 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff30 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff31 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff32 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff33 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff34 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff35 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff36 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff37 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff38 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff39 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff40 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff41 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff42 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff43 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff44 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff45 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff46 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff47 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff48 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff49 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff50 : Makes FF logo*\n*send free fire logo* ", rowId:" rowid5"},
        {title: 'Full Commands✨', description: ",list   commands💝", rowld:" rowid3"}
       ]
       
       const sections = [{title: "ɪᴛs-ᴍᴇ~ɴᴇxᴜs ❤️", rows: rows}]
       
       const button = {
        buttonText: '𝗖𝗟𝗜𝗖𝗞 𝗛𝗘𝗥𝗘',
        description: "𝐅𝐢𝐥𝐨 𝐕2🔰",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
