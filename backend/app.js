const express = require("express");
const https = require("https");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const userRoute = require("./Routes/user");
const routeExpense = require('./Routes/expense');
const paymentRoute = require("./Routes/payment");
const permiumRoute = require("./Routes/permium");
const passwordroute = require("./Routes/password");
const Sequelize = require("./util/database");
const User = require("./models/user");
const { expenseUser } = require("./models/expense");
const Order = require("./models/order");
const fileurl = require("./models/fileurl");
const forgotpassword = require("./models/passwordReq");
const path = require("path");
const fs = require("fs");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);

// app.use(morgan('combined',{stream:accessLogStream}));
//production
app.use(helmet());
app.use(cors());

//middlewares
app.use(bodyParser.json());

//routes
app.use("/user", userRoute);
app.use("/expense", routeExpense);
app.use("/purchase", paymentRoute);
app.use("/premium", permiumRoute);
app.use("/password", passwordroute);

User.hasMany(expenseUser);
expenseUser.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(forgotpassword);
forgotpassword.belongsTo(User);

User.hasMany(fileurl);
fileurl.belongsTo(User);

Sequelize.sync()
  .then((result) => {
    app.listen(process.env.PORT, () => {
      console.log(`Server Listening on Port ${process.env.PORT} ......`);
    });
    console.log("DATABASE CONNECTED");
  })
  .catch((err) => {
    console.log(err);
  });
