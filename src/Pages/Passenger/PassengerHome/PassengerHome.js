import React from 'react';
import { Link } from 'react-router-dom';
import PassengerNav from '../PassengerNav/PassengerNav';

const PassengerHome = () => {



    return (
        <div>
            <div class="container">
                <PassengerNav></PassengerNav>
                <div>
                    <h2>Balance:500</h2>
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
                                <td>Kuratali</td>
                                <td>Banasri</td>
                                <td>59km</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Banasri</td>
                                <td>Kuratali</td>
                                <td>59km</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Kuratali</td>
                                <td>Mirpur 10</td>
                                <td>59.3km</td>
                                <td>40</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PassengerHome;