import 'src/styles/Header.css';
import { NavbarContext } from 'src/imports/Context';
import { useContext, useState, useEffect } from 'react';

const Header = () => {
    const [time, setTime] = useState('');
    const { state, hide, show } = useContext(NavbarContext);
    const hide_show_btn = () => state.sign === '-' ? hide() : show()

    // eslint-disable-next-line
    useEffect(() => {
        var t = new Date().toTimeString().toString().split(' ')[0].split('');
        setTime(`${t[0]}${t[1]}${t[2]}${t[3]}${t[4]}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    setInterval(() => {
        var t = new Date().toTimeString().toString().split(' ')[0].split('');
        setTime(`${t[0]}${t[1]}${t[2]}${t[3]}${t[4]}`);
    }, 60000);

    return (
        <header className='inotebook__header'>
            <section className='in_header__section' onClick={hide_show_btn}>INotebook</section>
            <section className='in_header__section'></section>
            <section className='in_header__section time'>
                <i className="far fa-clock" style={{ fontSize: 'small' }}></i>&ensp;{time}
            </section>
        </header >
    )
};

export default Header;