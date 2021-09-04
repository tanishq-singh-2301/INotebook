const Notes = require('../../model/Notes');
const { validationResult } = require('express-validator');

/* NOTES/HOME, AND MODULE EXPORT */
exports.home = async (req, res) => {
    res.json({
        path_name: "Home",
        url: "/api/notes"
    });
};

/* NOTES/TEST, AND MODULE EXPORT */
exports.test = async (req, res) => {
    res.json({
        path_name: "Test",
        url: "/api/notes/test"
    });
};

/* NOTES/ALLNOTES, AND MODULE EXPORT */
exports.allnotes = async (req, res) => {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
};

/* NOTES/ADDNOTE, AND MODULE EXPORT */
exports.addnote = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.errors });
        }
        const { title, description, tag } = req.body;
        const note = await Notes.create({
            title,
            description,
            tag,
            user: req.user.id
        });
        res.json({ note });
    } catch (error) {
        res.status(500).json({ error });
    }
};

/* NOTES/UPDATENOTE, AND MODULE EXPORT */
exports.updatenote = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.errors })
        }
        const { title, description, tag } = req.body;
        let newNote = {
            title,
            description,
            tag
        };

        if (title) newNote.title === title;
        if (description) newNote.description === description;
        if (tag) newNote.tag === tag;

        const noteData = await Notes.findById(req.params.id);
        if (noteData.user.toString() !== req.user.id) {
            res.status(401).json({ error: 'Not Allowed' });
        }

        await Notes.findOneAndUpdate({ _id: req.params.id }, newNote, { new: true });
        const updatedNote = await Notes.findById(req.params.id);
        res.json(updatedNote);
    } catch (error) {
        res.status(500).json({ error });
    }
};

/* NOTES/DELETENOTE, AND MODULE EXPORT */
exports.deletenote = async (req, res) => {
    try {
        const noteData = await Notes.findById(req.params.id);
        if (!noteData) {
            return res.status(404).json({ error: 'Not found' });
        }
        if (noteData.user.toString() !== req.user.id) {
            res.status(401).json({ error: 'Not Allowed' });
        }

        const note = await Notes.findByIdAndDelete(req.params.id);
        if (note) {
            res.json({ deleted: true });
        } else {
            res.status(500).json({ deleted: false, error: "Something's wrong" });
        }
    } catch (error) {
        res.status(500).json({ error });
    }
};