import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BusOwnerNav from '../BusOwnerNav/BusOwnerNav';

const BusList = () => {
    const [buses, setBuses] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/view-bus-api")
            .then(response => {
                console.log(response.data);
                setBuses(response.data);
            }).catch(err => {
                console.log(err);
            })
    }, []);
    return (
        <div>
            <BusOwnerNav></BusOwnerNav>

            <div class="container mt-5">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Bus Name</th>
                            <th scope="col">Amount of Bus</th>
                            <th scope="col">Trade Licence</th>
                            <th scope="col">Route No</th>
                        </tr>
                    </thead>
                    <tbody>
                        {buses.map(bus => (
                            <tr key={bus.id}>
                                <td>{bus.id}</td>
                                <td>{bus.bus_name}</td>
                                <td>{bus.trade_licence}</td>
                                <td>{bus.route_no}</td>
                                <td><Link to> delete</Link></td>
                                <td><Link to={`/update-bus/${bus.id}`}> update</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BusList;