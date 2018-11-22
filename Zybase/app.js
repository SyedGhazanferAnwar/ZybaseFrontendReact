const app = require("express")();
const bodyparse = require("body-parser");
const passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
const express = require("express");
var cookieParser = require("cookie-parser");
const expressSession = require("express-session");
var expressValidator = require("express-validator");
const randomStr = require("randomstring");
data = randomStr.generate(320);
var mysql = require("mysql");
var userModel = require("./models/user");

var cors = require("cors");
////////////////////////////////databse connection/////////////////////////////////////////////

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "zybase"
});
conn.connect(err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("connected to zybase");
});

///////////////////////////////////////express middlewares////////////////////////////////////////

app.use(
  expressSession({ secret: "sherry", saveUninitialized: true, resave: true })
);
app.use(cookieParser());
app.use(bodyparse.json());
app.use(bodyparse.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(
  expressValidator({
    errorFormatter: function(param, msg, value) {
      var namespace = param.split("."),
        root = namespace.shift(),
        formParam = root;

      while (namespace.length) {
        formParam += "[" + namespace.shift() + "]";
      }
      return {
        param: formParam,
        msg: msg,
        value: value
      };
    }
  })
);

//////////////////////////////////////pasprt config////////////////////////////////////////////////////
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function(email, password, done) {
      console.log("verifying user");
      userModel.authenticateUserByEmail(conn, email, password, (err, user) => {
        if (err) throw err;
        if (user == null) {
          done(null, false, { message: "Invalid Credentials" });
          console.log("Invalid Credentials");
        } else {
          done(null, user[0]);
        }
      });
    }
  )
);
passport.serializeUser(function(user, done) {
  done(null, user.email); //unique key defined
});
passport.deserializeUser(function(email, done) {
  userModel.getUserByEmail(conn, email, function(err, user) {
    //can pass username because we have the object and unique key is defined username
    if (err) throw err;
    else if (user == null) console.log("user doesn't exist");
    else {
      done(err, user[0]);
    }
  });
});

//////////////////////////////////////////app//////////////////////////////////////////////////////

app.listen(5000, e => {
  if (e) throw e;
  console.log("Server running at 5000");
});

app.get("/", (req, res) => {
  userModel.getAllUsers(conn, (err, resu) => {
    if (err) throw err;
    res.json(resu);
  });
});
app.get("/checkauthenticated", (req, res) => {
  if (req.user == null) {
    res.json({ authenticate: "false", statusCode: 400 });
  } else {
    res.json({ authenticate: "true", statusCode: 200 });
  }
});
app.get("/logout", (req, res) => {
  req.logout();
  res.json({ message: "Successfully Logged Out", statusCode: 200 });
});
app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/register.html");
});
app.post("/user/add", (req, res) => {
  user = [];
  user.username = req.body.username;
  user.first_name = req.body.first_name;
  user.last_name = req.body.last_name;
  user.password = req.body.password;
  user.product_id = req.body.product_id;
  user.email = req.body.email;

  userModel.createUser(conn, user, () => {
    res.redirect("/");
  });
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});

//Login handling
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/loginSucessfull",
    failureRedirect: "/loginFailed"
  }),
  (req, res) => {
    res.redirect("/");
  }
);
app.get("/loginSucessfull", function(req, res) {
  // res.send(req.user.username + " logged in");
  res.json({
    authenticate: "true",
    message: "Login Sucessful"
  });
});
app.get("/loginFailed", function(req, res) {
  res.json({
    authenticate: "false",
    message: "Invalid Credentials"
  });
});

//Register handling
app.post("/register", (req, res) => {
  console.log(req.body);
  userModel.createUser(conn, req.body, (err, msg) => {
    if (err == null) {
      res.json({ message: msg, statusCode: 200 });
    } else {
      console.log(err);
      res.json({ message: err, statusCode: 400 });
    }
  });
});

//
//
//
//
//
app.post("/logintest", (req, res) => {
  console.log(req.body);
  res.redirect("/login");
});

app.post("/test", function(req, res) {
  console.log("yolo");
  console.log(req.body);
  res.send("hello world");
});
