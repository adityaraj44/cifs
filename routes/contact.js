const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let active = true;
    res.render("contact", {
      layout: "layouts/layout",
      active,
    });
  } catch (error) {
    console.log(error);
    res.send("ERROR");
  }
});

module.exports = router;
