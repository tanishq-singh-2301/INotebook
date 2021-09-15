import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from 'src/imports/Views';
import 'src/styles/Calendar.css'

const Calendar = () => {
    const history = useHistory();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            history.push('/login');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <section className='main_body__div'>
                <Header />
            </section>
        </>
    )
};

export default Calendar;