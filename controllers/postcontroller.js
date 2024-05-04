const Post = require("../models");
const bcrypt = require("bcrypt");

exports.createPost = async (req, res) => {
    try {
        const { name, email, password, phone_number, gender, address } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const strlrgender = gender.toLowerCase();
        const newPost = await Post.users.create({
            name,
            email,
            password: hashedPassword,
            phone_number,
            gender: strlrgender,
            address
        });
        res.status(201).json({ message: "Post created successfully", post: newPost });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.users.findAll();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password, phone_number, gender, address } = req.body;
        const customerExt = await Post.users.findByPk(id);
        if (!customerExt) {
            return res.status(404).json({ message: "Post not found" });
        }
        customerExt.name = name;
        customerExt.email = email;
        customerExt.password = password;
        customerExt.phone_number = phone_number;
        customerExt.gender = gender;
        customerExt.address = address;
        await customerExt.update({ name, email, password, phone_number, gender, address });
        res.status(200).json({ message: "Post updated successfully", customerExt });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await Post.users.findByPk(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "Post not found" });
    }
    await deletedUser.destroy();
    res.json({ message: 'Customer deleted successfully' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};