/* Copyright (C) 2021 Amalser.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
const Asena = require('../events');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('admin');
const mut = Language.getString('mute');
const END = "clear all messages"

async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {
        if (member.id.split('@')[0] === user.split('@')[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

const jid = '1234@s.whatsapp.net'
// can also be a group
const response = await conn.sendMessage (jid, 'hello!', MessageType.text)
}));// send a message

Asena.addCommand({pattern: 'cler', fromMe: true, desc: END, dontAddCommandList: true}, (async (message, match) => {

await conn.deleteMessage (jid, {id: response.messageID, remoteJid: jid, fromMe: true})
}));// will delete the sent message for everyone!

Asena.addCommand({pattern: 'clear', fromMe: true, desc: END, dontAddCommandList: true}, (async (message, match) => {

await conn.clearMessage (jid, {id: response.messageID, remoteJid: jid, fromMe: true})
 }));// will delete the sent message for only you!
