import { useHistory } from "react-router-dom";

const NotFound = () => {
    const history = useHistory();
    history.push('/')
    return (
        <>
            <h1 style={{ color: 'whitesmoke' }}>NotFound</h1>
        </>
    )
};

export default NotFound;