import { useContext, useEffect, useState } from 'react';
import NavbarContext from 'src/context/navbar/navbarContext';
import NotesContext from 'src/context/notes/Context';
import { Link, useHistory } from 'react-router-dom';

const AllNotesPage = () => {
    const [docHeight, setDocHeight] = useState(0)
    const { AllNotes, notes, DeleteNote } = useContext(NotesContext)
    const NavbarContext_ = useContext(NavbarContext);
    const hide_show_btn = () => NavbarContext_.state.sign === '-' ? NavbarContext_.hide() : NavbarContext_.show()
    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            AllNotes()
        } else {
            history.push('/login');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const deleteNoteBtn = (_id) => DeleteNote(_id)

    window.addEventListener('scroll', () => {
        setDocHeight((window.scrollY / (document.querySelector('body').scrollHeight - window.innerHeight) * 100))
    })

    return (
        <>
            {
                NavbarContext_.state.sign === '-' ? null :
                    <div style={{ position: 'absolute', top: 0, left: 0, height: '12vh', width: '12vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ color: 'dimgray', height: '20px', width: '20px', cursor: 'pointer' }} onClick={hide_show_btn}>{NavbarContext_.state.html}</div>
                    </div>
            }
            <div style={{ position: 'fixed', top: '0', right: '0', width: '8px', height: '100%', borderLeft: '2px solid darkslategray' }}>
                <div style={{ height: `${docHeight}%`, width: '100%', backgroundColor: 'darkslategray' }}></div>
            </div>
            <div style={{ height: '100%', width: '100%', padding: '70px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'column' }}>
                <div style={{ height: '13vh', width: '65%', border: '2px solid black', borderRadius: '1px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginBottom: '30px' }}>
                    <div style={{ height: '100%', width: '70%', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'column', padding: '15px 30px' }}>
                        <h6 style={{ fontSize: '30px', fontWeight: '600' }}>Add New Note?</h6>
                        <h6 style={{ fontSize: '15px', fontWeight: '600', color: 'lightgray' }}>See how to add a note</h6>
                    </div>
                    <div style={{ height: '100%', width: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Link to="/addnote" onClick={hide_show_btn} style={{ height: '50%', width: '80%', outline: 'none', border: 'none', borderRadius: '1px', backgroundColor: 'black', color: 'whitesmoke', fontSize: 'large', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>New Note</Link>
                    </div>
                </div>
                <div style={{ height: '78%', width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'column' }}>
                    <h6 style={{ color: 'black', fontSize: '32px', fontWeight: '600' }}>Notes</h6>
                    <div style={{ height: '88%', width: '100%' }} className="d-flex flex-wrap">
                        {
                            notes[0] === 'loading' ?
                                <p>Loading...</p> :
                                notes.map((res) => {
                                    return (
                                        <div key={res._id} style={{ height: '20vh', width: '30vh', border: '2.5px solid black', borderRadius: '5px', marginBottom: '20px', marginRight: '20px', padding: '20px' }}>
                                            <div style={{
                                                height: '65%', width: '100%', display: 'flex', alignItems: 'flex - start', justifyContent: 'center', flexDirection: 'column'
                                            }}>
                                                <h6 style={{ color: 'black', fontSize: '20px', fontWeight: '600' }}>{res.title}</h6>
                                                <h6 style={{ color: 'gray', fontSize: '13px', fontWeight: '500' }}>{res.tag}</h6>
                                            </div>
                                            <div style={{ height: '35%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Link to={`/view/${res._id}`} style={{ color: 'black', fontSize: '13px', fontWeight: '500', textDecoration: 'none' }}>View details&ensp;
                                                    <i style={{ color: 'dimgray', fontSize: '11px', fontWeight: '600' }} className="fas fa-angle-double-right"></i>
                                                </Link>
                                                <div style={{ color: 'black', fontSize: '13px', fontWeight: '500', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '20%' }}>
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
            </div>
        </>
    )
};

export default AllNotesPage;