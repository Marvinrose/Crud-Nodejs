const customer = require("../models/customer");

const mongoose = require("mongoose");

// GET

// Homepage

exports.homepage = async (req, res) => {
  // Home

  const messages = await req.consumeFlash("info");

  const locals = {
    title: "User Management Sysytem",
    description: "User Management Sysytem Using Nodejs",
  };

  res.render("index", { locals, messages });
};

// GET

//New customner form

exports.addCustomer = async (req, res) => {
  // Home

  const locals = {
    title: "Add New Customer - CRUD",
    description: "User Management Sysytem",
  };

  res.render("customer/add", locals);
};

// POST

//Create New customer form

exports.postCustomer = async (req, res) => {
  console.log(req.body);

  const newCustomer = new customer({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    details: req.body.details,
    tel: req.body.tel,
    email: req.body.email,
  });

  try {
    await customer.create(newCustomer);
    await req.flash("info", "New customer has been added.");

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }

  // const locals = {
  //   title: "New Customer Added!",
  //   description: "User Management Sysytem",
  // };

  // res.render("customer/add", locals);
};
