import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PassengerList = () => {
    const [passengers, setPassengers] = useState([]);
    const [rfid, setRfid] = useState({});

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/passenger-list")
            .then(res => {
                console.log(res.data);
                setPassengers(res.data);
            })
            .catch(err => console.log(err))

    }, [])

    const assignRfid = (id, rfid) => {
        console.log(id);
        console.log(rfid);
        axios.post("http://127.0.0.1:8000/api/assign-rfid", {
            id,
            rfid
        }).then(res => {
            console.log(res.data);
            alert('assign success');
        }).catch(err => console.log(err))
    }

    const changeHandler = e => {
        setRfid({ ...rfid, [e.target.id]: e.target.value })
    }

    return (
        <div>
            <div class="container mt-5">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">first name</th>
                            <th scope="col">email</th>
                            <th scope="col">rfid</th>
                            <th scope="col">assign rfid</th>
                            <th scope="col">delete</th>
                            <th scope="col">update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {passengers.map(passenger => (
                            <tr key={passenger.id}>
                                <td>{passenger.id}</td>
                                <td>{passenger.first_name}</td>
                                <td>{passenger.email}</td>

                                {
                                    passenger.rfid ? (<td>{passenger.rfid}</td>) : (<input id={passenger.id} onChange={changeHandler} placeholder='rfid' />)
                                }
                                {
                                    passenger.rfid ? (<td><button className="btn btn-outline-primary" disabled>submit</button></td>) : (<td><button className="btn btn-primary" onClick={() => assignRfid(passenger.id, rfid[passenger.id])}>submit</button></td>)
                                }

                                {/* <td>{passenger.rfid}</td> */}
                                <td><Link to> delete</Link></td>
                                <td><Link to="/"> update</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PassengerList;