import createContext from "./Context";
import { useState } from 'react';

const NoteState = (props) => {
    const [notes, setNotes] = useState(['loading']);
    const auth_token = localStorage.getItem('token');

    const AllNotes = async () => {
        await fetch(`${process.env.REACT_APP_API_URL}/api/notes/allnotes`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'auth-token': auth_token
            }
        })
            .then(res => res.json())
            .then(res => setNotes(res))
            .catch(err => alert('something went wrong'))
    };

    const AddNote = async (note_data) => {
        setNotes(notes.concat(note_data))
        await fetch(`${process.env.REACT_APP_API_URL}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'auth-token': auth_token
            },
            body: JSON.stringify({
                title: note_data.title,
                description: note_data.description
            })
        })
            .then(res => res.json())
            .then(res => {
                // setNotes(res)
                if (res.error) {
                    alert('something went wrong')
                }
            })
            .catch(err => alert('something went wrong'))
    };

    const Note = async () => { };

    const DeleteNote = async (_id) => {
        setNotes(notes.filter(res => res._id !== _id))
        await fetch(`${process.env.REACT_APP_API_URL}/api/notes/deletenote/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'auth-token': auth_token
            }
        })
            .catch(err => alert('something went wrong'))
    };

    const EditNote = async (note_data) => {
        setNotes([...notes.filter(res => res._id !== note_data._id)].concat(note_data))
        await fetch(`${process.env.REACT_APP_API_URL}/api/notes/updatenote/${note_data._id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'auth-token': auth_token
            },
            body: JSON.stringify(note_data)
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => alert('something went wrong'))
    };

    return (
        <createContext.Provider value={{ notes, AllNotes, Note, DeleteNote, EditNote, AddNote }} >
            {props.children}
        </createContext.Provider>
    )
};

export default NoteState;