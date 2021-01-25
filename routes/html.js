// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

const router = require("express").Router();

//exercise input page
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//stats page
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});


module.exports = router;