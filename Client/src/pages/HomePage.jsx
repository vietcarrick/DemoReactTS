import React from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const HomePage = () => {
    const token = useSelector((state) => state.auth.token);
    const handleLogout =  () => {
        localStorage.removeItem('persist:root');
    }
    return (
        <div>
            {token ? <Link to="/login"><div onClick={handleLogout}>Logout</div></Link> : <Link to="/login">Login</Link>}
        </div>
    );
};

export default HomePage;