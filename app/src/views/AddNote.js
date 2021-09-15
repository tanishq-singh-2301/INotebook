import { useContext, useEffect, useState } from 'react';
import NavbarContext from 'src/context/navbar/navbarContext';
import NoteContext from 'src/context/notes/Context';
import { useHistory } from 'react-router-dom';
import 'src/styles/AddNote.css';

const AddNote = (params) => {
    const [isLoading, setIsLoading] = useState(false);
    const [note, setNote] = useState({ title: null, description: null })
    const { hide, show, state } = useContext(NavbarContext);
    const { AddNote, notes, EditNote } = useContext(NoteContext);
    const isEdit = params.match.path === '/editnote/:id' ? true : false;
    const isView = params.match.path === '/view/:id' ? true : false;
    const isAddNote = params.match.path === '/addnote' ? true : false;
    const history = useHistory()

    // eslint-disable-next-line
    useEffect(async () => {
        if (!localStorage.getItem('token')) {
            history.push('/login');
        }
        if (isEdit) {
            if (notes[0] === 'loading') {
                history.push('/')
                return;
            }
            setNote((notes.filter(res => res._id === params.match.params.id))[0]);
        } else if (isView) {
            if (notes[0] === 'loading') {
                history.push('/')
                return;
            }
            setNote((notes.filter(res => res._id === params.match.params.id))[0]);
        } else if (isAddNote) {
            setNote({
                title: '#NewNote',
                description: `1. You can change the note name by clicking above.\n2. Write here your note.\n3. After completing the note press the 'add note' button`
            })
        }
        // eslint-disable-next-line
    }, [])

    const hide_show_btn = () => state.sign === '-' ? hide() : show()

    const AddNoteBtn = async () => {
        setIsLoading(true)
        if (isEdit) {
            await EditNote(note)
        } else if (isView) {
            console.log('a')
        } else if (isAddNote) {
            await AddNote(note)
            hide_show_btn()
        }
        setIsLoading(false)
        history.push('/allnotes')
    }

    return (
        <>
            <nav className='addnote__nav' >
                <div>
                    <h6 onClick={hide_show_btn}>INotebook</h6>
                </div>
                {
                    window.innerWidth < 320 ?
                        null : <input value={note.title} disabled={true}></input>
                }
                {
                    window.innerWidth > 450 ?
                        <div></div> : null
                }
            </nav>
            <div id="addnote_form">
                <section className='addnote_form_section'>
                    {
                        isView ? null :
                            <input className='addnote_form_input_title' value={note.title} onChange={(e) => { isView ? console.log(null) : setNote({ ...note, 'title': e.target.value }) }}></input>
                    }
                    <textarea className='addnote_form_input_textarea' autoCorrect='off' autoFocus='off' autoComplete='off' autoCapitalize='off' value={note.description} readOnly={isView} onChange={(e) => { isView ? console.log(null) : setNote({ ...note, 'description': e.target.value }) }}></textarea>
                </section>
                {
                    isView ? null :
                        isLoading ?
                            <div className="spinner-border spinner-border-sm" style={{ backgroundColor: 'transparent', position: 'fixed', right: '100px', bottom: '40px', color: 'whitesmoke', fontSize: 'medium', fontWeight: '500' }} role="status"></div>
                            : <button type='button' onClick={AddNoteBtn} id='note_submit_btn' style={{ height: '7vh', minWidth: '80px', width: '13vw', backgroundColor: '#393D42', position: 'fixed', right: '40px', bottom: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', outline: 'none', border: 'none', color: 'whitesmoke', fontSize: 'medium', fontWeight: '500' }}>
                                {isEdit ? 'Save' : 'Add Note'}
                            </button>
                }
            </div>

        </>
    )
};

export default AddNote;
