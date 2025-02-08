const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  PREFIXE: process.env.PREFIXE || ".",
  NOM_OWNER: process.env.NOM_OWNER || "BOSS",
  NUMERO_OWNER: process.env.NUMERO_OWNER || "50935548683",
  MODE: process.env.MODE || "privé",
  MENU: process.env.MENU || "https://i.ibb.co/ynx9QcZ/image.jpg",
  SESSION_ID: process.env.SESSION_ID || "Ovl-MD_w7eE13V0_SESSION-ID",
  LEVEL_UP: process.env.LEVEL_UP || "non",
  STICKER_PACK_NAME: process.env.STICKER_PACK_NAME || "𝚩𝚵𝚪𝐋𝚰𝚴 ⸸𝑉𝑎𝑙ℎ𝑎𝑙𝑙𝑎⸸",
  STICKER_AUTHOR_NAME: process.env.STICKER_AUTHOR_NAME || "𝚩𝚵𝚪𝐋𝚰𝚴 ⸸𝑉𝑎𝑙ℎ𝑎𝑙𝑙𝑎⸸",
  DATABASE: process.env.DATABASE || "postgresql://postgres.qnjvgxwyncnsbpfxwrbq:ovlmdmdpasse@aws-0-eu-central-1.pooler.supabase.com:6543/postgres",
  ANTIDELETE: process.env.ANTIDELETE || "oui",
  RENDER_API_KEY: process.env.RENDER_API_KEY,
};
