const notesController = {};
const Note = require("../models/Note");

notesController.getNotes = async (req, res) => {
  const AllNotes = await Note.find();
  res.json(AllNotes);
};
notesController.createNote = async (req, res) => {
  const { title, content, author, date } = req.body;
  const newNote = new Note({
    title: title,
    content: content,
    author: author,
    date: date,
  });
  await newNote.save();
  res.send("Nota creada");
};

// https://localhost:4000/api/notes/:id
    notesController.getNote = async (req, res) => {
  const noteFound = await Note.findById(req.params.id);

  res.json(noteFound);
};
notesController.updateNote = async (req, res) => {
  const { title, content, author,date } = req.body;
  const noteFound = await Note.findByIdAndUpdate(req.params.id, {
    title,
    content,
    author,
    date,
  });

  
  await noteFound.save();
  res.json({ message: "Nota Actualizada" });
};
notesController.deleteNote = async (req, res) => {
  const noteFound = await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Nota eliminada" });
};

module.exports = notesController;
