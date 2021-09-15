import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
// dont know how but css is linked to Login.css

const Register = () => {
    const [cred, setCred] = useState({ name: '', email: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            history.push('/')
        }
        // eslint-disable-next-line
    }, [])

    const submitForm = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        await fetch(`${process.env.REACT_APP_API_URL}/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(cred)
        })
            .then(res => res.json())
            .then(res => {
                if (res.token) {
                    localStorage.setItem('token', res.token);
                    window.location.replace('https://inotebook.vercel.app/')
                } else if (res.code === 11000) {
                    alert('Email already exists')
                } else {
                    alert(res.error)
                }
                console.log(res)
                setIsLoading(false)
            })
        setIsLoading(false)
    };
    return (
        <>
            <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100vw', flexDirection: 'column', background: 'linear-gradient(to left, #bdc3c7, #2c3e50)', border: 'none' }}>
                <div style={{ top: '0', left: '0', position: 'fixed', alignItems: 'center', justifyContent: 'space-between', display: 'flex', padding: '0 30px', height: '10vh', width: '100%' }}>
                    <span style={{ textDecoration: 'none', color: 'white', fontSize: 'larger', fontWeight: '600' }}>INotebook</span>
                    <Link to="/register" style={{ textDecoration: 'none', color: '#fff', fontSize: 'large', fontWeight: '600', textShadow: '1px 1px 50px #000', borderBottom: '2px solid whitesmoke' }}>Register</Link>
                </div>
                <form onSubmit={submitForm} className='login__form'>
                    <input required type='text' value={cred.name} onChange={(e) => setCred({ ...cred, 'name': e.target.value })} minLength={5} autoComplete="off" className='login__form__input' placeholder="Username" />
                    <input required type='email' value={cred.email} onChange={(e) => setCred({ ...cred, 'email': e.target.value })} minLength={5} autoComplete="off" className='login__form__input' placeholder="Email" />
                    <input required type='password' value={cred.password} onChange={(e) => setCred({ ...cred, 'password': e.target.value })} minLength={5} autoComplete="off" className='login__form__input' placeholder="Password" />

                    {
                        isLoading ?
                            <div className="spinner-border spinner-border-sm" style={{ backgroundColor: 'transparent', color: 'whitesmoke', fontSize: 'medium', fontWeight: '500' }} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div> :
                            <button type='submit' className="login__form__submit__btn">Login</button>
                    }
                </form>
            </section>
        </>
    )
};

export default Register;