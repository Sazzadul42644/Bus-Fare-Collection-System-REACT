import React from 'react';
import { Link } from 'react-router-dom';

const PassengerNav = () => {
    return (
        <div>
            <div className='container'>
                <nav class="navbar navbar-expand-lg bg-light mt-5">
                    <div class="container-fluid">
                        <Link class="navbar-brand" to="/passenger-home">BFCS</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li class="nav-item ">
                                    <Link class="nav-link active" aria-current="page" to="/passenger-home">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/passenger-travel-history">Travel History</Link>
                                </li>
                                <li class="nav-item ">
                                    <Link class="nav-link " to="/passenger-profile">Profile</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/logout">Log out</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default PassengerNav;