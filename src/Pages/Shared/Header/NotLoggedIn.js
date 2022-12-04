import React from 'react';
import { Link } from 'react-router-dom';

const NotLoggedIn = () => {
    return (
        <div>
            <div className="text-end mt-5 container">
                <Link className="btn btn-outline-primary" to="/login">Log in</Link>
                <Link className="btn btn-outline-primary" to="/register-passenger">Passenger Registration</Link>
                <Link className="btn btn-outline-primary" to="/register-owner">Bus Owner Registration</Link>
            </div>
        </div>
    );
};

export default NotLoggedIn;