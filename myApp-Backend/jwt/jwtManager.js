const jwt = require("jsonwebtoken");
const secret = "top-secret";

class JwtManager {
  generate(data) {
    const token = jwt.sign(data, secret);
    return token;
  }
  verify(token) {
    const data = jwt.verify(token, secret);
    return data;
  }
}

module.exports = new JwtManager();
