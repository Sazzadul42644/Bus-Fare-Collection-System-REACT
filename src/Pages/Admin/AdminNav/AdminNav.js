import React from 'react';
import { Link } from 'react-router-dom';
// import 
const AdminHome = () => {
    return (
        <div>
            <div className="container mt-5">
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="">FCS</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/admin-home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/add-stations">Add Station</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/add-route">Add Route</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/stations">View Station</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/view-route">View Route</Link>
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
}


export default AdminHome;