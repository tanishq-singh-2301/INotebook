import { Link } from "react-router-dom";

const WebsiteHomePage = () => {
    return (
        <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', flexDirection: 'column' }}>
            <h1 style={{ color: 'whitesmoke' }}>WebsiteHomePage</h1><br />
            <Link to='/login'>login</Link><br />
            <Link to='/register'>register</Link>
        </section>
    )
};

export default WebsiteHomePage;