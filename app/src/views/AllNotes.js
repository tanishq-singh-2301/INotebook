import { useContext, useEffect, useState } from 'react';
import { NotesContext } from 'src/imports/Context';
import { useHistory, Link } from 'react-router-dom';
import { Header } from 'src/imports/Views';
import 'src/styles/AllNotes.css';

const AllNotesPage = () => {
    const [docHeight, setDocHeight] = useState(0);
    const { AllNotes, notes, DeleteNote } = useContext(NotesContext);
    const history = useHistory();
    const deleteNoteBtn = (_id) => DeleteNote(_id)

    window.addEventListener('scroll', () => {
        setDocHeight((window.scrollY / (document.querySelector('body').scrollHeight - window.innerHeight) * 100))
    })

    // eslint-disable-next-line
    useEffect(async () => {
        if (localStorage.getItem('token')) { AllNotes() }
        else { history.push('/login') }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div style={{ position: 'fixed', top: '0', right: '0', width: '8px', height: '100%', borderLeft: '1px solid dimgray' }}>
                <div style={{ height: `${docHeight}%`, width: '100%', backgroundColor: 'dimgray' }}></div>
            </div>
            <section className='main_body__div'>
                <Header />
                <div className='allnotes__addnote'>
                    <div className='addnote_container'>
                        <div>
                            <h1>Wanna write something?</h1>
                        </div>
                        <div>
                            <button>New Note</button>
                        </div>
                    </div>
                </div>
                <section className='dashboard'>
                    <div className='dashboard_statistic'>
                        <h1>Notes</h1>
                        <div className='stats'>
                            {
                                notes[0] === 'loading' ?
                                    <p>Loading...</p> :
                                    notes.map((res) => {
                                        return (
                                            <div key={res._id} className='particular_note'>
                                                <div className='note_heading'>
                                                    <span>{res.title}</span>
                                                    <h6>{res.tag}</h6>
                                                </div>
                                                <div className='note_operations'>
                                                    <Link to={`/view/${res._id}`}>View details&ensp;
                                                        <i style={{ color: 'dimgray', fontSize: '11px', fontWeight: '600' }} className="fas fa-angle-double-right"></i>
                                                    </Link>
                                                    <div>
                                                        <i onClick={() => deleteNoteBtn(res._id)} style={{ cursor: 'pointer', color: 'dimgray', fontSize: '13px', fontWeight: '600' }} className="far fa-trash-alt"></i>
                                                        <Link to={`/editnote/${res._id}`} style={{ color: 'dimgray', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }} className="far fa-edit"></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                            }
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
};

export default AllNotesPage;