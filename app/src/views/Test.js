import { useContext, useEffect, useState } from 'react';
import { NavbarContext, AuthContext } from 'src/imports/Context'
import { useHistory } from 'react-router-dom'
import 'src/styles/Test.css';

const Test = () => {
    const [time, setTime] = useState('')
    const { state, hide, show } = useContext(NavbarContext);
    const { getUser } = useContext(AuthContext);
    const hide_show_btn = () => state.sign === '-' ? hide() : show()
    const history = useHistory();

    // eslint-disable-next-line
    useEffect(async () => {
        if (!localStorage.getItem('token')) {
            history.push('/login');
        }
        await getUser();

        var t = new Date().toTimeString().toString().split(' ')[0].split('');
        setTime(`${t[0]}${t[1]}${t[2]}${t[3]}${t[4]}`);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    setInterval(() => {
        var t = new Date().toTimeString().toString().split(' ')[0].split('');
        setTime(`${t[0]}${t[1]}${t[2]}${t[3]}${t[4]}`);
    }, 60000);

    return (
        <>
            <section className='main_body__div'>
                <header className='inotebook__header'>
                    <section className='in_header__section' onClick={hide_show_btn}>INotebook</section>
                    <section className='in_header__section'></section>
                    <section className='in_header__section time'>
                        <i class="far fa-clock" style={{ fontSize: 'small' }}></i>&ensp;{time}
                    </section>
                </header>
                <section className='dashboard'>

                </section>
            </section>
        </>
    )
};

export default Test;