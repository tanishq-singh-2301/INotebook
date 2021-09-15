import NavbarContext from './navbarContext';
import { useState } from 'react';

const NavbarState = (props) => {
    const s1 = {
        navbar: {
            style: {
                left: '0'
            }
        },
        main__body: {
            style: {
                width: 'calc(100% - 300px)'
            }
        },
        sign: '-',
        html: <i className="fas fa-angle-left"></i>
    };

    const [state, setState] = useState(s1);

    const hide = () => {
        setState({
            navbar: {
                style: {
                    left: '-600px',
                }
            },
            main__body: {
                style: {
                    width: '100vw',
                    minHeight: '100vh',
                    transition: '1.4s',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                }
            },
            sign: '+',
            html: <i className="fas fa-angle-right" style={{ color: 'black' }}></i>
        })
    };

    const show = () => {
        setState({
            navbar: {
                style: {
                    left: '0',
                }
            },
            main__body: {
                style: {
                    width: 'calc(100vw - 300px)',
                    minHeight: '100vh',
                    transition: '1.4s',
                    position: 'absolute',
                    top: 0,
                    right: 0
                }
            },
            sign: '-',
            html: <i className="fas fa-angle-left"></i>
        })
    };

    return (
        <NavbarContext.Provider value={{ state, hide, show }} >
            {props.children}
        </NavbarContext.Provider>
    )
};

export default NavbarState;