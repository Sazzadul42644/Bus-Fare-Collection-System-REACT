import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NotLoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setIsLoggedIn(user.access_token);
        }
        else {
            setIsLoggedIn(false);
        }

    }, [])
    return (
        <div>
            <div className="text-end mt-5 container">
                {
                    isLoggedIn ? (<Link className="btn btn-outline-primary" to="/logout">Log out</Link>) : (<Link className="btn btn-outline-primary" to="/login">Log in</Link>)
                }
                {/* <Link className="btn btn-outline-primary" to="/login">Log in</Link> */}
                <Link className="btn btn-outline-primary" to="/register-passenger">Passenger Registration</Link>
                <Link className="btn btn-outline-primary" to="/register-owner">Bus Owner Registration</Link>
            </div>
        </div>
    );
};

export default NotLoggedIn;