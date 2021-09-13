const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let active = true;
    res.render("homepage", {
      layout: "layouts/layout",
      active,
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
