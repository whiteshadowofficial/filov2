/* Copyright (C) 2021 Vai838.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsenaDuplicated
*/

const Ktb = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

//KTB:-KARTHIK_TERROR-BOY

const b64 = "Simsim plugin."
const usage = ".nexu <text>"

const encypt = "```Enter the text!```"

Ktb.addCommand({ pattern: 'nexu ?(.*)', fromMe: false, desc: b64, usage: usage }, async (message, match) => {

        const Wtb = match[1]
        
        if (match[1] === '') return await message.client.sendMessage(message.jid, encypt, MessageType.text);

        await axios
          .get(`https://zenzapi.xyz/api/simih2?apikey=07d3f898a6&text=${Wtb}`)
          .then(async (response) => {
            const {
              message,
            } = response.data

            const msg = `*nexu--》* ${message}\n`
            await message.client.sendMessage(message.jid, msg, MessageType.text)
           })
      },
    )
