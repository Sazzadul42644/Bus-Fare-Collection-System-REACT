import React from 'react';
import { Link } from 'react-router-dom';

const PassengerHome = () => {



    return (
        <div>
            <h2>this is PassengerHome</h2>
            <div class="container">
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
                <div>
                    <h2>Balance:</h2>
                </div>
                <div class="mt-5 d-flex">
                    <div class="col-md-3">
                        <input type="name" class="form-control" id="startingPoint" placeholder="From" />
                    </div>
                    <div class="col-md-3 mx-2">
                        <input type="name" class="form-control" id="startingPoint" placeholder="TO" />
                    </div>
                    <div>
                        <button type="submit" class="btn btn-outline-primary">Submit</button>
                    </div>
                </div>
                <div>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Route</th>
                                <th scope="col">From</th>
                                <th scope="col">To</th>
                                <th scope="col">Disteance</th>
                                <th scope="col">Fare</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PassengerHome;