const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
 
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
 PHONE: process.env.NUMBER === undefined ? '918129624395' : process.env.NUMBER,   
 OA_NAME: process.env.DEPLOYER === undefined ? 'Someone' : process.env.DEPLOYER,    

};
