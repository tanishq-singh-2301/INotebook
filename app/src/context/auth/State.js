import AuthContext from './Context';
import { useState } from 'react';

const AuthState = (props) => {
    const [user, setUser] = useState({ _id: null, name: null, email: null, date: null });
    const token = localStorage.getItem('token');
    const [greetings, setGreetings] = useState('')
    const [quote, setQuote] = useState({ text: null, author: null });

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

    const getEssentials = async () => {
        var t = new Date().toTimeString().toString().split(' ')[0].split('');
        var timeHr = (t[0] + t[1]);

        if (timeHr > 12 && timeHr < 17)
            setGreetings('Good Afternoon')
        else if (timeHr > 17)
            setGreetings('Good Evening')
        else if (timeHr < 12)
            setGreetings('Good Morning')

        await fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1')
            .then(res => res.json())
            .then(res => setQuote(res.quotes[0]))
    }

    return (
        <AuthContext.Provider value={{ user, getUser, getEssentials, greetings, quote }}>
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthState