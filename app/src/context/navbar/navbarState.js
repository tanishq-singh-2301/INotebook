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
                width: '80vw'
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
                    left: '-400px',
                    overflow: 'hidden',
                    transition: '1.2s'
                }
            },
            main__body: {
                style: {
                    width: '100vw',
                    transition: '1.2s'
                }
            },
            sign: '+',
            html: <i className="fas fa-angle-right" style={{ color: 'black' }}></i>
        })
    };

    const hideInstant = () => {
        setState({
            navbar: {
                style: {
                    left: '-400px',
                    overflow: 'hidden',
                    display: 'none'
                }
            },
            main__body: {
                style: {
                    width: '100vw',
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
                    transition: '1.2s'
                }
            },
            main__body: {
                style: {
                    width: '80vw',
                    transition: '1.2s'
                }
            },
            sign: '-',
            html: <i className="fas fa-angle-left"></i>
        })
    };

    return (
        <NavbarContext.Provider value={{ state, hide, show, hideInstant }} >
            {props.children}
        </NavbarContext.Provider>
    )
};

export default NavbarState;