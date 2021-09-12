import AuthContext from './Context';
import { useState } from 'react';

const AuthState = (props) => {
    const [user, setUser] = useState({ _id: null, name: null, email: null, date: null });
    const token = localStorage.getItem('token');

    const getUser = async () => {
        await fetch('https://inotebook-server.vercel.app/api/auth/getuser', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'auth-token': token
            }
        })
            .then(res => res.json())
            .then(res => setUser(res.data))
    }

    return (
        <AuthContext.Provider value={{ user, getUser }}>
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthState