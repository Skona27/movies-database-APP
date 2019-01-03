var express = require('express');
var router = express.Router();

const DB = require("../models");
const User = require("../models/user");


router.get('/', async function(req, res, next) {
  let query = `select * from users`;

  try {
    let result = await DB.query(query);
    res.send(result);
  } catch(err) {
    throw new Error(err);
  }
});

router.get("/add", async function (req, res) {
  let email = "emai2l@email.com";
  let password = "haslotajne";

  try {
    let user = await User.AddUser(email, password);
    res.send(user);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
