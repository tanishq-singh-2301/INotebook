import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

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
        await fetch('https://inotebook-server.vercel.app/api/auth/createuser', {
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
                    history.push('/')
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
            <section style={{
                // eslint-disable-next-line
                display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', flexDirection: 'column', background: '-webkit-linear-gradient(to left, #bdc3c7, #2c3e50)', background: 'linear-gradient(to left, #bdc3c7, #2c3e50)'
            }}>
                <div style={{ top: '0', left: '0', position: 'fixed', alignItems: 'center', justifyContent: 'space-between', display: 'flex', padding: '0 30px', height: '10vh', width: '100%' }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: 'larger', fontWeight: '600' }}>INotebook</Link>
                    <Link to="/login" style={{ textDecoration: 'none', color: '#2c3e50', fontSize: 'large', fontWeight: '400' }}>Login</Link>
                </div>
                <form onSubmit={submitForm} style={{ height: '30vh', minWidth: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <input required type='text' value={cred.name} onChange={(e) => setCred({ ...cred, 'name': e.target.value })} minLength={5} autoComplete="off" className='login__form__input' placeholder="Username" />
                    <input required type='email' value={cred.email} onChange={(e) => setCred({ ...cred, 'email': e.target.value })} minLength={5} autoComplete="off" className='login__form__input' placeholder="Email" />
                    <input required type='password' value={cred.password} onChange={(e) => setCred({ ...cred, 'password': e.target.value })} minLength={5} autoComplete="off" className='login__form__input' placeholder="Password" />

                    {
                        isLoading ?
                            <div className="spinner-border spinner-border-sm" style={{ backgroundColor: 'transparent', color: 'whitesmoke', fontSize: 'medium', fontWeight: '500' }} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div> :
                            <button type='submit' className="login__form__submit__btn" style={{ display: 'block', height: '45px', width: '60%', border: '1px solid rgba(255, 255, 255, 30%)', borderRadius: '5px', outline: 'none', backgroundColor: 'rgba(255, 255, 255, 60%)', color: '#2c3e50', fontSize: 'large', fontWeight: '500', fontFamily: "'Source Sans Pro', sans-serif", transition: '.5s', marginBottom: '15px' }}>Register</button>
                    }
                </form>

            </section>
        </>
    )
};

export default Register;