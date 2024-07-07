const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "252633141196";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_37_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDksXG4gICAgICAgIDQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAzOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzksXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjUwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDM3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYzLFxuICAgICAgICA4NixcbiAgICAgICAgNzMsXG4gICAgICAgIDQyLFxuICAgICAgICA3OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDU5LFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI0LFxuICAgICAgICA2MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxODUsXG4gICAgICAgIDM2LFxuICAgICAgICA0OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDksXG4gICAgICAgIDUwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzksXG4gICAgICAgIDQyLFxuICAgICAgICAzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDkyLFxuICAgICAgICAyNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxODMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDY1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDMzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQxLFxuICAgICAgICA2MixcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDM5LFxuICAgICAgICA1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICA0OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjI5LFxuICAgICAgICA5MSxcbiAgICAgICAgODMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDg5LFxuICAgICAgICAzMixcbiAgICAgICAgNjQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMixcbiAgICAgICAgNjksXG4gICAgICAgIDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDUzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTMxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3MSxcbiAgICAgICAgODksXG4gICAgICAgIDIwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMixcbiAgICAgICAgMTU2LFxuICAgICAgICAzNSxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NixcbiAgICAgICAgODUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNixcbiAgICAgICAgMTE3LFxuICAgICAgICA4NSxcbiAgICAgICAgNTksXG4gICAgICAgIDQ4LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiakxwZ2c5RTFDWVQwMGdYK296a0ZVOTJ2VmJuVy9aRDhUc3M1LzRRcElIcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiT1NYRGFmNUJUYmVkU19GMTNpQWlrUVwiLFxuICBcInBob25lSWRcIjogXCI5MjUzN2Q2YS1lOWQ2LTQyODgtOGI4MC1lN2VkZjA0ZWI2NjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMCxcbiAgICAgIDEzNyxcbiAgICAgIDYzLFxuICAgICAgMjU1LFxuICAgICAgMjQzLFxuICAgICAgOTAsXG4gICAgICAxNjgsXG4gICAgICAwLFxuICAgICAgMjE4LFxuICAgICAgMTE2LFxuICAgICAgMTk4LFxuICAgICAgMTMyLFxuICAgICAgMCxcbiAgICAgIDUxLFxuICAgICAgMTk1LFxuICAgICAgMjExLFxuICAgICAgMTEsXG4gICAgICAxNDEsXG4gICAgICAyMDUsXG4gICAgICAyMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjMsXG4gICAgICA3MSxcbiAgICAgIDE1OSxcbiAgICAgIDE2MixcbiAgICAgIDIyMCxcbiAgICAgIDI0NixcbiAgICAgIDE5NixcbiAgICAgIDE0OCxcbiAgICAgIDE2LFxuICAgICAgMjQyLFxuICAgICAgMTc4LFxuICAgICAgMTE2LFxuICAgICAgMTk4LFxuICAgICAgMTQzLFxuICAgICAgMTI4LFxuICAgICAgNzEsXG4gICAgICAyMzksXG4gICAgICAyNTUsXG4gICAgICAxOTUsXG4gICAgICAxNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUUs0TjJXRDdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1MjYzMzE0MTE5Njo5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc4MjcwOTk4Mjc4MjY4OjkwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xDTHIrUUVFSXkwcXJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieTVMZEZhdjdSdDBScjkxaU52M1Y2TU1SUmdFcXlhOEFaSVVhVzArTWNUbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJrVEVMYjN0a1UzNWRSWGZoQkQ0QkJEVHJ2YVp3TWl0V29LelovRHNreUhBaFRyUm5maHFlR2VobHRvZG1vVjRnRWJHeExNVUM1dW11K3FOQmU2cTJDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJUdy8yWGlwQ2txNmNMRzZ5TzhLU3dmQ01pWm52MzBGa3owT2M4YnNSYVNkWXBYeGUrMHFYYXNpQUlDREtxcFYwNWR5bW9yUXdLMGVPSXl0T1ZVNUVDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTI2MzMxNDExOTY6OTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDM1OTQzOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUl4RVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSXhFLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUXQ1QTBrOUtqUU1YZFRTelJrcXEyUk1FajNWRGxtdlhSdGZhY29hdkRobz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjg0MjI4NTI3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE5NzMzMDcyMTIyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
