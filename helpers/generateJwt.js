const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return new Promise((resolve, reject) => {
    const payload = {id};

    jwt.sign(payload,process.env.JWT_KEY,
      {
        expiresIn: "24h",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("No se pudo generar e token");

        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = {
     generateToken
}
