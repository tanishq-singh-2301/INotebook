import { useContext, useEffect } from 'react';
import NavbarContext from 'src/context/navbar/navbarContext';
import { useHistory } from 'react-router-dom';

const Settings = () => {
    const { state, hide, show } = useContext(NavbarContext);
    const hide_show_btn = () => state.sign === '-' ? hide() : show()
    const history = useHistory();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            history.push('/login');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        history.push('/login')
    }

    return (
        <>
            <nav style={{ height: '10vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', padding: '0 50px' }}>
                <div style={{ height: '100%', width: '10%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <h6 onClick={hide_show_btn} style={{ textDecoration: 'none', color: 'black', fontSize: 'larger', fontWeight: '600', cursor: 'pointer' }}>Settings</h6>
                </div>
                <div style={{ height: '100%', width: '40%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>

                </div>
                <div style={{ height: '100%', width: '10%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <h6 onClick={logout} style={{ textDecoration: 'none', color: 'black', fontSize: 'larger', fontWeight: '600', cursor: 'pointer' }}>Logout</h6>
                </div>
            </nav>
        </>
    )
};

export default Settings;