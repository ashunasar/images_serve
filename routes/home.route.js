const express = require("express");

const router = express.Router();

router.get("/timelineposts", (req, res) => {
  res.send("Hello");
});

module.exports = router;
