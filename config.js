//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ngwenyathabani93@gmail.com";
global.location = "CowdrayPark, BYO";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "yes";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Harare";
global.github = process.env.GITHUB || "https://github.com/bladeh3x/BLADE-MD-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5121735684e9a7848a03.jpg";
global.devs = "https://t.me/alex";
global.sudo = process.env.SUDO || "263785824469;
global.owner = process.env.OWNER_NUMBER || "+263785824469";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/c5121735684e9a7848a03.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUx6RHV5MmNwSnkrRVNGRXlwNWNEWS9GVHE5RlBPMU1jK0tnVVkrQTJrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOHNhRUw4Qm4vcm1pQ3NqZVFYYTNsK1ByeGxTOTJUcmJFR3IycXNBZHRqOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTnlLeTE0a3JZQWk4N0JZOGtFaTd3ZHQ0cUVxa3YxbXlKZzE4VktDRzJzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrMkZoWE1jakhabTQwK2VxbS9hWGpGQVl2Z0o4b0syRU5IaHIrK2hMUVdFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlJa3dUVVN1S0JMVWE1Tkt3Z2ZQL1hRTTFvbkx5bmFSenI0UzlzMkM3M0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQyejhwamJ0OGo4M2FBc1JoeTBhdm5PQXBOdlFpUDNJS3ZPeXZURFk2VTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0RhRDBUOThLOVY0akJ2TFRqMTBHUE0yYnA5aStnaUc3TXI4Uk1KalQzRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMGpuM1pudDZOT05mYUZSWDVxUmtzbGJMeU91aVM4UkM1OGhEYVJSVzhFVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImIzWEhPKy95ZnFSUmlVN3lhcWNzTStoUUdQOGdEZGdXZWFEbUdTc2NmelZTL01RdVNZNG9yNVV6SzVWTFI5ak50Tk91dU9RbjNod2J1dmdXWDNteWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIwLCJhZHZTZWNyZXRLZXkiOiJBZXlVRFd0UzJaTnUzT1h6Rk50VlhtNWZaamxjQnFIT3k0N2Z0OWg3VXVFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJIZUpDenhrVFNGU1dCTjlaa1B5S0lRIiwicGhvbmVJZCI6ImJjMjkwZDFhLTE2ODYtNDVmNS05ZTljLTg4NGQyMzY4ZjdjMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TjlXMUlqb05iS21ZVmJiQ21CSmgzN0J0VFU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSCsxd0JuVEx4aG9JdmJoMVB2eXYzYlA1anpRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlAyRDRRQUhSIiwibWUiOnsiaWQiOiIyNjM3ODU4MjQ0Njk6NkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSitBemM0Q0VLbXNvY0FHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSXhKeDgzaHNJa0VRUmJPTXNmMWNIZmNyUXU2Q0U4NUdCNVRFSVJPcjRpST0iLCJhY2NvdW50U2lnbmF0dXJlIjoic05kcGFEN1BaZDMyWUJ2a2tnMEE0L054RTE2UVRQS2FHa2NwOTZob0JOSVdMUmhrWDRRRkN3RSs1eGRuSUF0WE9SU2hYOEd5V2c1WTgvNXRTY01VQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IlVwc2ErOW5rZUtXcHFCWjBCNi8yd0t3ME9GUnJkMmRUbWdSckNzKzZHNUtQS2orYUU1KzFOZ0VGc0lNRUNjeldKTXJCU2lIc3JOejFhMUJocFpYVGp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzg1ODI0NDY5OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU01TY2ZONGJDSkJFRVd6akxIOVhCMzNLMEx1Z2hQT1JnZVV4Q0VUcStJaSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NTM3NjgyMiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGWXUifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "×",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`💚TEEMAN💚™`",
  author: process.env.PACK_AUTHER || "TEEMAN-V2",
  packname: process.env.PACK_NAME || "ALEX",
  botname: process.env.BOT_NAME ||"LIL'SMOKEY",
  ownername: process.env.OWNER_NAME || "💚TEEMAN💚",
  errorChat: process.env.ERROR_CHAT || "I'M HIGH RIGHT NOW, TRY LATER WHEN I'M SOBER",
  KOYEB_API: process.env.KOYEB_API || "true",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "BLADE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
