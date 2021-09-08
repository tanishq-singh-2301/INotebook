import { useContext } from 'react';
import NavbarContext from 'src/context/navbar/navbarContext';

const AddNote = () => {
    const NavbarContext_ = useContext(NavbarContext);
    const hide_show_btn = () => {
        NavbarContext_.state.sign === '-' ? NavbarContext_.hide() : NavbarContext_.show()
    }
    return (
        <>
            {
                NavbarContext_.state.sign === '-' ? null :
                    <div style={{ position: 'absolute', top: 0, left: 0, height: '12vh', width: '12vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <h1 onClick={hide_show_btn}>{NavbarContext_.state.sign}</h1>
                    </div>
            }
        </>
    )
};

export default AddNote;