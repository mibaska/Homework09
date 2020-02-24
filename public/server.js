const express = require("express");
const path = require("path");
const Note = require("./note.js")

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var notes = [];

app.get("/api/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
});

app.post("/api/notes", function(req, res) {
  var newNotes = req.body;

  newNotes.routeName = newNotes.title.replace(/\s+/g, "").toLowerCase();

  console.log(newNotes);

  notes.push(newNotes);

  res.json(newNotes);
});

app.delete("/api/notes/:id", function(req, res) {
  res.send("Got a DELETE request at /api/notes/:id");
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});