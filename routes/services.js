const express = require("express");
const router = express.Router();

router.get("/atmsiteconstruction", async (req, res) => {
  try {
    res.render("atmsiteconst", {
      layout: "layouts/layout",
    });
  } catch (error) {
    console.log(error);
    res.send("ERROR");
  }
});

router.get("/tis", async (req, res) => {
  try {
    res.render("tis", {
      layout: "layouts/layout",
    });
  } catch (error) {
    console.log(error);
    res.send("ERROR");
  }
});

router.get("/electricalwork", async (req, res) => {
  try {
    res.render("electrical", {
      layout: "layouts/layout",
    });
  } catch (error) {
    console.log(error);
    res.send("ERROR");
  }
});

router.get("/carpentryfurnitureplumbing", async (req, res) => {
  try {
    res.render("cfp", {
      layout: "layouts/layout",
    });
  } catch (error) {
    console.log(error);
    res.send("ERROR");
  }
});

router.get("/atmshifting", async (req, res) => {
  try {
    res.render("atmshifting", {
      layout: "layouts/layout",
    });
  } catch (error) {
    console.log(error);
    res.send("ERROR");
  }
});

router.get("/groutinganddegrouting", async (req, res) => {
  try {
    res.render("grouting", {
      layout: "layouts/layout",
    });
  } catch (error) {
    console.log(error);
    res.send("ERROR");
  }
});

router.get("/refurbishmentandremodeling", async (req, res) => {
  try {
    res.render("refurb", {
      layout: "layouts/layout",
    });
  } catch (error) {
    console.log(error);
    res.send("ERROR");
  }
});

router.get("/srmworkandhousekeeping", async (req, res) => {
  try {
    res.render("srm", {
      layout: "layouts/layout",
    });
  } catch (error) {
    console.log(error);
    res.send("ERROR");
  }
});

router.get("/securityandmanpower", async (req, res) => {
  try {
    res.render("security", {
      layout: "layouts/layout",
    });
  } catch (error) {
    console.log(error);
    res.send("ERROR");
  }
});

router.get("/acrepairandmaintenance", async (req, res) => {
  try {
    res.render("ac", {
      layout: "layouts/layout",
    });
  } catch (error) {
    console.log(error);
    res.send("ERROR");
  }
});

module.exports = router;
