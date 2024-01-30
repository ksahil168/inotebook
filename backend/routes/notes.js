const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");


//route 1: get all the notes using : get "/api/auth/getuser". login required

router.get("/fetchallnotes", fetchuser,async(req, res) => {
  const notes = await Notes.find({user: req.user.id});
  res.json(notes);
});

module.exports = router;
