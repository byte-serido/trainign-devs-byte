const jwt = require("jsonwebtoken");
const authConfig = require("./auth");

export function generateToken(params = {}) {
  //junta o secret com o token   // espira em 24hs (86400 segundos)
  return jwt.sign(params, authConfig.secret, { expiresIn: 86400 });
}
