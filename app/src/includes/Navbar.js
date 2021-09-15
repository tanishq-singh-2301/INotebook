import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarContext from 'src/context/navbar/navbarContext';
import AuthContext from 'src/context/auth/Context';
import { AvatarGenerator } from 'random-avatar-generator';
import 'src/styles/NavBar.css';

const NavBar = (params) => {
    const [avatar, setAvatar] = useState(null);
    const { state, hide, show } = useContext(NavbarContext);
    const { user, getUser } = useContext(AuthContext);
    const hide_show_btn = () => state.sign === '-' ? hide() : show()
    const generator = new AvatarGenerator();

    // eslint-disable-next-line
    useEffect(async () => {
        setAvatar(generator.generateRandomAvatar())
        await getUser()
        // eslint-disable-next-line
    }, []);

    const jump = () => {
        if (window.innerWidth < 800) {
            hide()
        }
    }

    return (
        <>
            <nav id='sidemenu_navbar' style={state.navbar.style}>

                <div style={{ height: '.5px', border: 'none', width: '800px', backgroundColor: 'orange', position: 'absolute', bottom: '25vh', transform: 'rotate(40deg)' }}></div>
                <div style={{ height: '.5px', border: 'none', width: '800px', backgroundColor: '#CCCBF2', position: 'absolute', bottom: '20vh', transform: 'rotate(25deg)' }}></div>
                <div style={{ height: '.5px', border: 'none', width: '800px', backgroundColor: '#837A66', position: 'absolute', bottom: '35vh', transform: 'rotate(-8deg)' }}></div>

                <div className='sidemenu_navbar__parts'>
                    <div className='sidemenu_navbar__img__container'>
                        <img alt='Profile img' src={avatar} className='sidemenu_navbar__img' />
                        {
                            <div className='sidemenu_navbar__hide_show_btn' onClick={hide_show_btn} >{state.html}</div>
                        }
                    </div>
                    <div className='sidemenu_navbar__profile__container'>
                        <h6>{user.name}</h6>
                        <h6>{user.email}</h6>
                    </div>
                </div>

                <div className='sidemenu_navbar__parts middle_part'>
                    {
                        params.pages.map((res, index) => {
                            return (
                                <div key={index} className='middle_part__links'>
                                    <Link onClick={jump} to={res[1]} className='middle_part__link_tag' style={{ textDecoration: 'none', color: 'whitesmoke', width: '100%' }}>
                                        <h6>{res[2]}&ensp;{res[0]}</h6>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='sidemenu_navbar__parts bottom__part'>
                    <div className='middle_part__links' style={{ marginBottom: 0 }}>
                        <Link onClick={jump} to='/settings' className='middle_part__link_tag' style={{ textDecoration: 'none', color: 'whitesmoke', width: '100%' }}>
                            <h6><i className="fas fa-sliders-h link__icons"></i>&ensp;Settings</h6>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default NavBar;