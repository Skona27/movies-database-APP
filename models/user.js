const DB = require("./index");

module.exports.AddUser = async function (email, password) {
    let user = [email, password];

    try {
        await DB.query("INSERT INTO users (email, password) VALUES (?, ?)", user);
        return await DB.query("SELECT * FROM users WHERE email = ?", email);
    } catch (err) {
        throw new Error(err);
    }
};