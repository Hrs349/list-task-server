const express = require("express");
const router = express.Router();

router.get("/complete", (req, res) => {
    res.send("tareas comopletas");
  })
router.get("/incomplete", (req, res) => {
    res.send("tareas incompletas");
  });

module.exports = router;
