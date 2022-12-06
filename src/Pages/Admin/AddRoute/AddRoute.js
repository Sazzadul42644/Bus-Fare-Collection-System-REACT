import axios from 'axios';
import React, { useState } from 'react';
import AdminNav from '../AdminNav/AdminNav';

const AddRoute = () => {
    //let [route_id, setRoute_id] = useState("");
    let [route_no, setRoute_no] = useState("");
    let [route_name, setRouteName] = useState("");


    const addRouteSubmit = (e) => {
        console.log("response.data");
        e.preventDefault();

        axios.post("http://127.0.0.1:8000/api/add-route", {
            route_no,
            route_name
        }).then(response => {
            console.log(response.data);
        }).catch(error => console.log(error))

    }
    return (
        <div>
            <AdminNav></AdminNav>
            <div className='container'>
                <div className="mt-5">
                    <h2 className='text-center'>ADD Route</h2>
                </div>
                <div className="container my-5">
                    <form className="shadow-lg p-3 mb-5 bg-body rounded row g-3" action="" method="post">
                        <div className="col-md-7">
                            <label for="validationDefaultEmail" className="route_no">Route No.</label>
                            <div className="input-group">

                                <input type="route_no" value={route_no} onChange={(e) => setRoute_no(e.target.value)} className="form-control" id="validationDefaultEmail"
                                    aria-describedby="inputGroupPrepend2" name="route_no" placeholder="A-101" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <label for="Route Name" className="form-label">Route Name</label>
                            <input type="text" value={route_name} onChange={(e) => setRouteName(e.target.value)} className="form-control" id="validationCustom02" placeholder="Route Name" name="route_name" />

                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <br />
                        <div className="col-12">
                            <button onClick={addRouteSubmit} className="btn btn-primary">Add Route</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddRoute;