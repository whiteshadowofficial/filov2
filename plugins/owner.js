/* Copyright (C) 2021 AFNAN PALLIKKEL
CODDED AFNAN PALLIKKEL and saidali
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
PINKY
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'owner', fromMe: true, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '15369524516-1612300121@g.us') {

            return;
        }

        if (Config.PLK == 'default') {
            await message.client.sendMessage(message.jid,'*╔═════😎FILO V2😎═════╗*\n        \n*owner AFLAHXRD - http://Wa.me/+918129624395* \n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: AFLAHXRD*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.PLK + '\n\n--------------------', MessageType.text);
        }
    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'owner', fromMe: false, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '54218542512-1612300121@g.us') {

            return;
        }

        if (Config.PLK == 'default') {
            await message.client.sendMessage(message.jid,'*╔═════😎FILO V2😎═════╗*\n        \n*owner AFLAHXRD - http://Wa.me/+918129624395* \n        \n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: AFLAHXRD*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.PLK + '\n\n-------------------', MessageType.text);
        }
    }));
}

Asena.addCommand({ pattern: 'owner ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {


const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:OWNER\n'
            + 'ORG:script AflahXRD;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=918129624395:+91 8129624395\n' 
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "NEXUSNW", vcard: vcard}, MessageType.contact)
        }
    }));
}

