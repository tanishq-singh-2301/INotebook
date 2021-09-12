import { useContext, useEffect, useState } from 'react';
import NavbarContext from 'src/context/navbar/navbarContext';
import NoteContext from 'src/context/notes/Context';
import { useHistory } from 'react-router-dom';

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
            try {
                console.log(!notes[1].title)
            } catch {
                history.push('/')
            }
            setNote((notes.filter(res => res._id === params.match.params.id))[0]);
        } else if (isView) {
            try {
                console.log(!notes[1].title)
            } catch {
                history.push('/')
            }
            setNote((notes.filter(res => res._id === params.match.params.id))[0]);
        } else if (isAddNote) {
            setNote({
                _id: Math.random(100),
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
            <nav style={{ height: '8vh', width: '100vw', backgroundColor: '#131212', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '.5px solid #393D42' }}>
                <div style={{ height: '100%', width: '10%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: '30px' }}>
                    <h6 onClick={hide_show_btn} style={{ textDecoration: 'none', color: 'whitesmoke', fontSize: 'large', fontWeight: '600', cursor: 'pointer' }}>INotebook</h6>
                </div>
                <input value={note.title} style={{ height: '100%', width: '20%', border: 'none', outline: 'none', backgroundColor: 'transparent', color: 'whitesmoke', textAlign: 'center', fontSize: 'large', fontWeight: '600', letterSpacing: '.5px' }} disabled={true}></input>
                <div style={{ height: '100%', width: '10%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '30px' }}></div>
            </nav>
            <div id="addnote_form" style={{ height: '92vh', width: '100%', backgroundColor: '#131212', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <section style={{ height: '80%', width: '43vw', backgroundColor: '#131212', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column' }}>
                    <input value={note.title} onChange={(e) => { isView ? console.log(e.target.value) : setNote({ ...note, 'title': e.target.value }) }} style={{ height: '7%', width: '20%', border: 'none', outline: 'none', backgroundColor: 'transparent', color: 'whitesmoke', textAlign: 'left', fontSize: 'large', fontWeight: '600', letterSpacing: '.5px', marginBottom: '10px' }}></input>
                    <textarea autoCorrect='off' autoFocus='off' autoComplete='off' autoCapitalize='off' value={note.description} onChange={(e) => { isView ? console.log(e.target.value) : setNote({ ...note, 'description': e.target.value }) }} style={{ height: '93%', width: '100%', outline: 'none', border: 'none', backgroundColor: 'transparent', color: 'whitesmoke', textAlign: 'left', fontSize: 'medium', fontWeight: '400', letterSpacing: '.5px' }}></textarea>
                </section>
                {
                    isView ? null :
                        isLoading ?
                            <div className="spinner-border spinner-border-sm" style={{ backgroundColor: 'transparent', position: 'fixed', right: '100px', bottom: '40px', color: 'whitesmoke', fontSize: 'medium', fontWeight: '500' }} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div> :
                            <button type='button' onClick={AddNoteBtn} id='note_submit_btn' style={{ height: '7vh', width: '13vw', backgroundColor: '#393D42', position: 'fixed', right: '40px', bottom: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', outline: 'none', border: 'none', color: 'whitesmoke', fontSize: 'medium', fontWeight: '500' }}>
                                {isEdit ? 'Save' : 'Add Note'}
                            </button>
                }
            </div>
        </>
    )
};

export default AddNote;
