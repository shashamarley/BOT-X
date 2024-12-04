 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
//═══════[Required Variables]════════\\
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ms.excelamadi@yahoo.com";
global.location = "Rivers,Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Xcelsama:Xcel@xcelsama.qpklf.mongodb.net/?retryWrites=true&w=majority&appName=Xcelsama";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Excelsama/BOT-X";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m";
global.website = process.env.GURL || " https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/jTJDVYj/Leonardo-Phoenix-A-vibrant-animestyle-illustration-of-a-young-2.jpg";
global.devs = "254779167048";
global.sudo = process.env.SUDO || "254779167048";
global.owner = process.env.OWNER_NUMBER || "254779167047";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia05GeXAxZHZ6VnZBKzlpenkvVmFhbnVweUZkS3o5R1NndkgrMy9CZGYwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicDF4NG9aM3RLbXEvZXFuYkw4aEFFZW01ZXlRZVZNZy9UUW5WYUJaL1BEMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSDQ5ZmRwMEh3MVlGQ1lSSzZBSXFwQS9rYXZWWVJmbUZTWXhHanF5OTBNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Z21wbEpwb2kvUVpnTmtKbXJvQnBUUUFoZS9xSzBIbGtteFJTVDNEU1RjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZQNkpsTlpRRW5WSFkyMUFUWDY1aDd2UDNYTlpDTnJSdHdJK2dudTRzMzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRQYTRnN1VWdWhZRHZzSEo3eWxhZXFDbmJPZC8vOE9aWDZQS3BQVjkzQW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1BWbjZSNUlBSlZNUlMxZFFmUHY0emZZY2pkV0xpbGcwVUtzRXBrZnJGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUVLWmltbURZUFNZSStCZ1Bkb0VZOFJqMi9EZzJhcTUyWFVNaUp3QkpBaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZxMkt2ZTBGYUlMUW1NZHVZVTFiTHhqZGM2Q0dNL2FLcFdSbmJSb2NNRDZLSHp4WVVBV29NdVliajhndkNRZVJjd3N3YVdEazJQSll4VVU2VEkwamdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA3LCJhZHZTZWNyZXRLZXkiOiI0Z1hwUGFWWnJXRVVYR3RMTnpYSmNNR1JxZ0tqYjhKWlNORjlSOEx1YWI4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc3OTE2NzA0OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxMUYzRDc1MzA0Mzc2RTI3QzZCRUE4OEIzNzVFMjM4OCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMzMjkzMDQ4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3NzkxNjcwNDhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDY4MzI2NDRDQUM2RDU2NUVCQjY2QUM4QkQyM0RDQzIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMzI5MzA1MH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoibWx1MnlPZWtTcnlmUjUwbXk3LXF4USIsInBob25lSWQiOiJlMjQxNWJhYi1mY2FjLTQyZmMtYWIyYi1jMmQwMzZmNmYyNTUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3E4ZWhvTzhrY0F6VCtldDVuZGZzUVRBaGQ0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBIbDlWSzFweHFCWTFYUXhKd1ZWOUMxeE1zbz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI4VFZEWDUzSCIsIm1lIjp7ImlkIjoiMjU0Nzc5MTY3MDQ4OjEyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuC6uCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnVxMTR3QkVPZm52N29HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiajJQSnpib3BnbDduM0QwSDM3YXJhcUpZQkpGUVVUQm5uNUVqOXUvVlRYUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiK2txZHd3NVR3ZTZHYmUxYjJzZWU1TFdIR0tEeEdkTUZpT1FDbzV2MFBlbVpCZHJOVjIxNHdseG1sOVhDUDJqZUprODJJWjIvN3o0TzdxaGNSLzdEQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IjJrYi8wM3N5ZG5SSU9kNlhIaEYva3phaldZRzBlNllJTkVXSGZGc2RCUEF1cFZ5THZMaUdrVUNoNUJhODJpVlhCZkdCOGE4N0xSRWZmd1lhN3J0OGlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0Nzc5MTY3MDQ4OjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlk5anljMjZLWUplNTl3OUI5KzJxMnFpV0FTUlVGRXdaNStSSS9idjFVMTAifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzMyOTMwNDUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQitYIn0= " // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "*",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BOT-X ™`",
  author: process.env.PACK_AUTHER || "Xcelsama",
  packname: process.env.PACK_NAME || "BOT-X",
  botname: process.env.BOT_NAME || "BOT-X",
  ownername: process.env.OWNER_NAME || "Xcelsama",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.UI|| "BOT-X.UI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
