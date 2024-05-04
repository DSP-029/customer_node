const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");
const app = express();
//Define Port which drive from else default set as 3000.
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Create a route for customer.
app.use("/api/auth", authRoutes);
app.use('/api/post', postRoutes);
// app.use('/api/customer', usersRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});