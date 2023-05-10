require("dotenv").config();

const express = require("express");

const expressLayout = require("express-ejs-layouts");

const app = express();

const port = 5000 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// static files
app.use(express.static("public"));

// Templating engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// Home
app.get("/", (req, res) => {
  const locals = {
    title: "CRUD",
    description: "User Management Sysytem",
  };

  res.render("index", locals);
});

// handle 404
app.get("*", (req, res) => {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`Crud app listening on port ${port}`);
});
