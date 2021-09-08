const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
      layout: "layouts/layout",
    });
  } catch (error) {
    console.log(error);
    res.send("ERROR");
  }
});

router.get("/home", async (req, res) => {
  try {
    res.redirect("/");
  } catch (error) {
    res.send("ERROR");
  }
});

module.exports = router;
