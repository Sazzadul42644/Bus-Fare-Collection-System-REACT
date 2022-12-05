import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ViewStation = () => {
    const [stations, setStations] = useState([]);


    const getData = (e) => {
        axios.get("http://127.0.0.1:8000/api/stations")
            .then(res => {
                console.log(res.data);
                setStations(res.data);
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="container">
            <button onClick={getData} className="btn btn-primary mt-3 col-md-2">get station name</button>
            <div class="mt-5">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">station id</th>
                            <th scope="col">station name</th>
                            <th scope="col">latitude</th>
                            <th scope="col">longitude</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stations.map(station => (
                            <tr key={station.id}>
                                <td>{station.station_id}</td>
                                <td>{station.station_name}</td>
                                <td>{station.latitude}</td>
                                <td>{station.longitude}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ViewStation;