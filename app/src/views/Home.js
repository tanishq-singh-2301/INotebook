import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from 'src/imports/Context';
import { Header } from 'src/imports/Views';
import 'src/styles/Home.css';

const Home = () => {
    const { getUser, user, greetings, quote, getEssentials } = useContext(AuthContext);
    const history = useHistory();

    // eslint-disable-next-line
    useEffect(async () => {
        if (!localStorage.getItem('token')) {
            history.push('/login');
        }
        await getUser();
        await getEssentials();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <section className='main_body__div'>
                <Header />
                <section className='dashboard'>
                    <div className='dashboard_name'>
                        {greetings !== '' ? <h1>{greetings}, {user.name}</h1> : null}
                    </div>
                    {
                        quote.text ?
                            (window.innerWidth > 400 || quote.text.toString().length < 160) ?
                                <div className='dashboard_quote'>
                                    <h1>{quote.author} ~</h1>
                                    <span>{quote.text}!</span>
                                </div> : console.log("Word limit exceded for quote visibility.") : null
                    }
                    <div className='dashboard_statistic'>
                        <h1>Statistics</h1>
                        <div className='stats'>
                            <div className='particular_stat'>
                                <span>Total Words</span>
                                <h1>1230</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
};

export default Home;