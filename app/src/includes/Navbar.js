import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarContext from 'src/context/navbar/navbarContext';
import AuthContext from 'src/context/auth/Context';
import { RiSettings3Fill } from 'react-icons/all';
import { AvatarGenerator } from 'random-avatar-generator';

const Navbar = (params) => {
    const [avatar, setAvatar] = useState(null);
    const NavbarContext_ = useContext(NavbarContext);
    const { user, getUser } = useContext(AuthContext);
    const hide_show_btn = () => NavbarContext_.state.sign === '-' ? NavbarContext_.hide() : NavbarContext_.show()
    const generator = new AvatarGenerator();

    // eslint-disable-next-line
    useEffect(async () => {
        setAvatar(generator.generateRandomAvatar())
        await getUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <section className="navbar" style={NavbarContext_.state.navbar.style}>
                <div style={{ height: '.5px', border: 'none', width: '600px', backgroundColor: 'orange', position: 'fixed', bottom: '25vh', transform: 'rotate(40deg)' }}></div>
                <div style={{ height: '.5px', border: 'none', width: '600px', backgroundColor: '#CCCBF2', position: 'fixed', bottom: '20vh', transform: 'rotate(25deg)' }}></div>
                <div style={{ height: '.5px', border: 'none', width: '600px', backgroundColor: '#837A66', position: 'fixed', bottom: '35vh', transform: 'rotate(-8deg)' }}></div>
                <div className="navbar__top">
                    <div style={{ height: '45%', width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }} >
                        <img alt="img" src={avatar} style={{ height: '100%', borderRadius: '7px' }}></img>
                        {
                            <div style={{ color: 'dimgray', height: '20px', width: '20px', cursor: 'pointer' }} onClick={hide_show_btn}>{NavbarContext_.state.html}</div>
                        }
                    </div>
                    <div style={{ height: '55%', widt: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column', padding: '1rem 0' }}>
                        <h6 style={{ fontSize: '.9rem', color: 'white', fontWeight: '600' }}>{user.name}</h6>
                        <h6 style={{ fontSize: '.8rem', color: 'dimgray', fontWeight: '500' }}>{user.email}</h6>
                    </div>
                </div>
                <div className="navbar__middle">
                    <div style={{ height: '100%', width: '100%', padding: '4rem 2rem 2rem 0 ', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column' }}>
                        {
                            params.pages.map((res, index) => {
                                return (
                                    <div key={index} style={{ height: '10%', width: '100%', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                                        <Link style={{ textDecoration: 'none', height: '100%', display: 'flex', alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'flex-start' }} to={res[1]}>
                                            {res[2]}
                                            &ensp;
                                            <h1 style={{ fontSize: '.9rem', color: 'dimgray', fontWeight: '500' }}>{res[0]}</h1>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="navbar__bottom">
                    <div style={{ height: '100%', width: '100%', padding: '', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column' }}>
                        <div style={{ height: '100%', width: '100%', padding: '2rem 0 0 0', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                            <Link style={{ textDecoration: 'none', height: '100%', display: 'flex', alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'flex-start' }} to='/settings' >
                                <RiSettings3Fill color="dimgray" />
                                &ensp;
                                <h1 style={{ fontSize: '.9rem', color: 'dimgray', fontWeight: '500' }}>Settings</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Navbar;