const express = require('express');
const bcrypt = require("bcrypt");
const router = express.Router();
const db = require('../models');
const multer = require('multer');
var sanitizer = require('sanitize')();

// Get all customer
router.get('/', async (req, res) => {
  try {
    const customerData = await db.users.findAll();
    if(customerData.length == 0 ) {
        console.log("There is No customer is Exist, please Add new.");
    }
    res.json(customerData);
  } catch (err) {
    res.status(500).json({ message: 'please check your path Once.' });
  }
});

// Get Specific customer
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const customerSpcData = await db.users.findByPk(id);
      if(customerSpcData.length == 0 ) {
          console.log("There is No customer is Exist, please add.");
      }
      res.json(customerSpcData);
    } catch (err) {
      res.status(500).json({ message: 'Your request is not fullfilled, please check after some time.' });
    }
  });

// Create a customer
router.post('/', async (req, res) => {
    const { name, email, password, phone_number, gender, address } = req.body;
    try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const strlrgender = gender.toLowerCase();
    const newcustomers = await db.users.create({
      name,
      email,
      password: hashedPassword,
      phone_number,
      gender:strlrgender,
      address
    });
    res.json(newcustomers);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'There is some issue to add customer.'});
  }
});

// Update a customer
router.put('/:id', async (req, res) => {
  const { id } = req.params;
    const { name, email, password, phone_number, gender,address } = req.body;
  try {
    const customerExt = await db.users.findByPk(id);
    if (!customerExt) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    customerExt.name = name;
    customerExt.email = email;
    customerExt.password = password;
    customerExt.phone_number = phone_number;
    customerExt.gender = gender;
    customerExt.address = address;
    await customerExt.save();
    res.json(customerExt);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Found Some Error to get specific Customer.' });
  }
});

// Delete a customer
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const customerExt = await db.users.findByPk(id);
    if (!customerExt) {
      return res.status(404).json({ message: 'Customer is not Exist.' });
    }
    await customerExt.destroy();
    res.json({ message: 'Customer deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

const uploads = multer({dest: "uploads"});
router.use('/profile', uploads.single('proimg'), (req, res) => {
    try {
        res.status(200).send('Image Uploaded Successfully');
    } catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});

module.exports = router;
