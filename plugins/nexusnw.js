const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const config = require('../config');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'audio', fromMe: false, desc: 'Gives audio commands'}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/RSQlY93.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `Bgm two\n\n 


Filo


Nexus


nexusnw


Aflah


hi


Hi 


Fek 


Ariyo 


Ayn 


Aysheri 


Ayye 


Baby 


Bot 


Chill 


Da 


Delete 


Enth 


Eppadi 


Ethi 


Happy 


Hehe 


Hello 


Help 


Hlo 


How 


Kali 


Kd 


King 


Kollum 


Kopp 


Kundan 


Life 


Line 


Love 


Lover 


Muthe 


Myr 


Nallath 


Nice 


Orakkam 


Paatt 


Para 


Poda 


Povoola 


Pro 


Pwoli 


Remove 


Sad 


Scene 


Sed 


Sheri 


Sherikkum 


Single 


Thanne 


Thund 


Vaa 


Vanno 


Vannu 


Vere bot 


Wait 


Why 


ariyo 


ayn 


aysheri 


ayye 


baby 


chill 


da 


delete 


enth 


eppadi  


ethi 


happy 


hehe 


hello 


help 


hlo 


how 


kali 


kd 


king 


kollum 


kopp 


kundan 


leave 


life 


line 


love 


mrng 


muthe 


myr 


nallath 


nice 


njan 


orakkam 


paatt 


para 


poda 


podo 


povoola 


pro 


pwoli 


remove 


sad 


scene 


sed 


sheri 


sherikkum 


single 


tagall 


thanne 


thund 


vaa 


vanno 


vannu 


vere bot 


wait 


why 


hi 



Aflah  


`}) 

}));
