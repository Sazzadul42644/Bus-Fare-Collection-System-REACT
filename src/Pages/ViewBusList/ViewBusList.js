import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewBusList = () => {
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
            <table>
                <tr>
                    <th>ID</th>
                    <th>bus name </th>
                    <th> route</th>
                </tr>
                {buses.map(bus => (
                    <tr key={bus.id}>
                        <td>{bus.id}</td>
                        <td>{bus.bus_name}</td>
                        <td>{bus.route_no}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default ViewBusList;