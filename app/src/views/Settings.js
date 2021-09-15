import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from 'src/imports/Views';
import 'src/styles/Settings.css';

const Settings = () => {
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
            <section className='main_body__div'>
                <Header />
                <div className='logoutbtn'>
                    <span onClick={logout}>Logout</span>
                </div>
            </section>
        </>
    )
};

export default Settings;