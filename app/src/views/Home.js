import { useContext, useEffect } from 'react';
import NavbarContext from 'src/context/navbar/navbarContext';
import { Link } from 'react-router-dom'

const Home = () => {
    const NavbarContext_ = useContext(NavbarContext);
    const hide_show_btn = () => NavbarContext_.state.sign === '-' ? NavbarContext_.hide() : NavbarContext_.show()
    // const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token')
        // if(!token){
        //     history.push('/register')
        // } else {

        // }
        console.log(token)
    })

    return (
        <>
            {
                NavbarContext_.state.sign === '-' ? null :
                    <div style={{ position: 'absolute', top: 0, left: 0, height: '12vh', width: '12vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ color: 'dimgray', height: '20px', width: '20px', cursor: 'pointer' }} onClick={hide_show_btn}>{NavbarContext_.state.html}</div>
                    </div>
            }
            <div style={{ height: '100%', width: '100%', padding: '70px' }}>
                <div style={{ height: '13vh', width: '65%', border: '2px solid black', borderRadius: '1px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <div style={{ height: '100%', width: '70%', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'column', padding: '15px 30px' }}>
                        <h6 style={{ fontSize: '30px', fontWeight: '600' }}>Add New Note?</h6>
                        <h6 style={{ fontSize: '15px', fontWeight: '600', color: 'lightgray' }}>See how to add a note</h6>
                    </div>
                    <div style={{ height: '100%', width: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Link to="/addnote" onClick={hide_show_btn} style={{ height: '50%', width: '80%', outline: 'none', border: 'none', borderRadius: '1px', backgroundColor: 'black', color: 'whitesmoke', fontSize: 'large', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>New Note</Link>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;