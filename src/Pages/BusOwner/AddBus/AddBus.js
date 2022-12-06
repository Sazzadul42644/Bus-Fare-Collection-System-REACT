import axios, { Axios } from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BusOwnerNav from '../BusOwnerNav/BusOwnerNav';


const AddBus = () => {
    let [bus_name, setBusName] = useState("");
    let [Amount_of_Bus, setAmountofBus] = useState("");
    let [Trade_Licence, setTradeLicence] = useState("");
    let [Route_no, setFirstName] = useState("");

    const addBusSubmit = (e) => {
        e.preventDefault();

        axios.post("http://127.0.0.1:8000/api/add-bus", {
            bus_name,
            Amount_of_Bus,
            Trade_Licence,
            Route_no,
        }).then(response => {
            console.log(response.data);
        }).catch(error => console.log(error))

    }
    return (
        <div className='container'>
            <BusOwnerNav></BusOwnerNav>
            <div className="mt-5">
                <h2 className='text-center'>ADD Bus</h2>
            </div>
            <div className="container my-5">
                <form className="shadow-lg p-3 mb-5 bg-body rounded row g-3" action="" method="post">
                    <div className="col-md-7">
                        <label for="bus_name" className="form-label">Bus name</label>
                        <input type="text" value={bus_name} onChange={(e) => setBusName(e.target.value)} className="form-control" id="validationCustom01" placeholder="bus name" name="bus_name" />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-7">
                        <label for="Amount of Bus" className="form-label">Amount of Bus</label>
                        <input type="text" value={Amount_of_Bus} onChange={(e) => setAmountofBus(e.target.value)} className="form-control" id="validationCustom02" placeholder="Amount of Bus" name="Amount_of_Bus" />

                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <br />
                    <div className="col-md-7">
                        <label for="validationDefaultEmail" className="Trade_Licence">Trade Licence</label>
                        <div className="input-group">

                            <input type="Trade_Licence" value={Trade_Licence} onChange={(e) => setTradeLicence(e.target.value)} className="form-control" id="validationDefaultEmail" aria-describedby="inputGroupPrepend2" name="Trade_Licence" placeholder="1234567" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <label for="validationDefaultEmail" className="Route_no">Route No.</label>
                        <div className="input-group">

                            <input type="Route_no" value={Route_no} onChange={(e) => setFirstName(e.target.value)} className="form-control" id="validationDefaultEmail"
                                aria-describedby="inputGroupPrepend2" name="Route_no" placeholder="A-101" />
                        </div>
                    </div>

                    <div className="col-12">
                        <button onClick={addBusSubmit} className="btn btn-primary">Add bus</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBus;