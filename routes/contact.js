const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.render("contact", {
      layout: "layouts/layout",
    });
  } catch (error) {
    console.log(error);
    res.send("ERROR");
  }
});

module.exports = router;
