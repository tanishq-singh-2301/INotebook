import AuthContext from './Context';
import { useState } from 'react';

const AuthState = (props) => {
    const [auth, setAuth] = useState({ auth: false, token: '' });
    const token = localStorage.getItem('token');
    if (token) {
        setAuth({ auth: true, token })
    }
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthState