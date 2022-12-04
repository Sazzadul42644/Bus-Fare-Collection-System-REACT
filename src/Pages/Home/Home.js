import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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
    // var user;
    // var isLoggedIn;
    // if (localStorage.getItem('user')) {
    //     user = JSON.parse(localStorage.getItem('user'));
    //     isLoggedIn = user.access_token;
    // }
    // else {

    // }
    console.log(isLoggedIn);
    // const user = JSON.parse(localStorage.getItem('user'));
    // const isLoggedIn = user.access_token;
    return (
        <div>
            <h2>Bus Fare collection System</h2>
            <p>some description</p>

            <div className="text-center mt-5 container">
                {
                    isLoggedIn ? (<Link className="btn btn-outline-primary" to="/logout">Log out</Link>) : (<Link className="btn btn-outline-primary" to="/login">Log in</Link>)
                }
                {/* <Link className="btn btn-outline-primary" to="/login">Log in</Link> */}
                <Link className="btn btn-outline-primary" to="/register-passenger">Passenger Registration</Link>
                <Link className="btn btn-outline-primary" to="/register-owner">Owner Registration</Link>
            </div>

        </div>
    );
};

export default Home;