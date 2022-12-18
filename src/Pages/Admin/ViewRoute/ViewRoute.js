import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminNav from '../AdminNav/AdminNav';

const ViewRoute = () => {
    const [routes, setBuses] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/route-list")
            .then(response => {
                console.log(response.data);
                setBuses(response.data);
            }).catch(err => {
                console.log(err);
            })
    }, []);
    return (
        <div>
            <AdminNav></AdminNav>
            <div class="container mt-5">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Route No</th>
                            <th scope="col">Route Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {routes.map(route => (
                            <tr key={route.route_id}>
                                <td>{route.route_no}</td>
                                <td>{route.route_name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewRoute;