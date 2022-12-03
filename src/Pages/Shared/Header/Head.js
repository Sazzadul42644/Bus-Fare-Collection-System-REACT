import React from 'react';
import { Link } from 'react-router-dom';

const Head = () => {
    // var user;
    // var isLoggedIn;
    // if (localStorage.getItem('user')) {
    //     user = JSON.parse(localStorage.getItem('user'));
    //     isLoggedIn = user.access_token;
    // }
    // else {

    // }
    // console.log(isLoggedIn);
    //const user = JSON.parse(localStorage.getItem('user'));
    //const isLoggedIn = user.access_token;
    return (
        <div className="text-end mt-5 container">
            {/* {
                isLoggedIn ? (<Link className="btn btn-outline-primary" to="/logout">Log out</Link>) : (<Link className="btn btn-outline-primary" to="/login">Log in</Link>)
            } */}
            <Link className="btn btn-outline-primary" to="/login">Log in</Link>
            <Link className="btn btn-outline-primary" to="/logout">Log out</Link>
            <Link className="btn btn-outline-primary" to="/register-passenger">Registration</Link>
            <Link className="btn btn-outline-primary" to="/register-owner">Owner Registration</Link>
            <Link className="btn btn-outline-primary" to="/bus-list">bus list</Link>
            <Link className="btn btn-outline-primary" to="/Card-Punch">CardPunch</Link>
            <Link className="btn btn-outline-primary" to="/stations">stations</Link>
        </div>
    );
};

export default Head;