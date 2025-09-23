const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

exports.loginruth = async (req, res) => {
  //authenticate user
  const { name, age } = req.body;

  const user = { name: name, userage: age };

  const accestoken = jwt.sign(user, process.env.ACCESTOKEN, {
    expiresIn: "2h",
  });
  res.json({ accestoken: accestoken, user });
};

exports.post = async (req, res) => {
  const post = [
    {
      name: "anwar",
      content: "holy book",
    },
    { name: "ilham", content: "sunnah book" },
    { name: "fatima", content: "hadith notes" },
  ];
  const userposts=post.filter(p=>p.name===req.user.name)

  res.json({ post:userposts,//optional
     loogedinuser: req.user });
};
