const express = require('express')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require('../models');

exports.register = async (req, res) => {
  try {
    const { name, email, password, phone_number, gender, address } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await db.users.create({ 
        name, 
        email, 
        password: hashedPassword,
        phone_number,
        gender,
        address
    });
    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await db.users.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }
    console.log(process);
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_KEY, { expiresIn: "1h" });
    // res.status(200).json({ token });
        res.status(200).json({
            message: "Auth granted, welcome!",
            token: token,
            email:email
        });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// exports.login = (req, res, next) => {
//     db.users.findOne({
//         where: {
//             email: req.body.email
//         }
//     }).then(user => {
//         console.log(res);
//             if (!user) {
//                 return res.status(401).json({
//                     message:
//                         "Auth failed!! either the account does't exist or you entered a wrong account"
//                 });
//             }
//             bcrypt.compare(req.body.password, user.password, (err, result) => {
//                 if (err) {
//                     return res.status(401).json({
//                         message: "Auth failed",
//                         token: token
//                     });
//                 }
//                 if (result) {
//                     const token = jwt.sign({
//                             email: user.email,
//                             password: user.id
//                         },
//                         process.env.JWT_KEY,
//                         {
//                             expiresIn: "1h"
//                         }
//                     );
//                     res.status(200).json({
//                         message: "Auth granted, welcome!",
//                         token: token
//                     });
//                 }
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({
//                 error: err
//             });
//         });
// };