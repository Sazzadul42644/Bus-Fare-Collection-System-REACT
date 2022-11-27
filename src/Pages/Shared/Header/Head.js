import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Head = () => {
    return (
        <div className="text-end mt-5 container">
            <Link className="btn btn-outline-primary" to="/login">Log in</Link>
            <Link className="btn btn-outline-primary" to="/register-passenger">Registration</Link>
            <Link className="btn btn-outline-primary" to="/register-owner">Owner Registration</Link>
            <Link className="btn btn-outline-primary" to="/bus-list">bus list</Link>
            <Link className="btn btn-outline-primary" to="/Card-Punch">CardPunch</Link>
        </div>
    );
};

export default Head;