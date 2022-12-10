import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RouteOrderDistance = () => {
    let [route_id, setRouteID] = useState("");
    let [Station_ID, setStationID] = useState("");
    let [Order, setOrder] = useState("");
    let [distance, setDistance] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/view-bus-api")
            .then(response => {
                console.log(response.data);
                // setBuses(response.data);
            }).catch(err => {
                console.log(err);
            })
    }, []);
    return (

        <div>
            <div class="mt-5">
                <h2 className='text-center'>Route Order Distance</h2>
            </div>
            <div class="container my-5">
                <form class="shadow-lg p-3 mb-5 bg-body rounded row g-3" action="" method="">
                    <div class="col-md-7">
                        <label for="route_id" class="form-label">Route ID</label>
                        <input type="text" class="form-control" placeholder="route id" onChange={(e) => setRouteID(e.target.value)} name="route_id" />
                    </div>
                    <div class="col-md-7">
                        <label for="Station ID" class="form-label">Station ID</label>
                        <input type="text" class="form-control" id="validationCustom02" placeholder="Station ID" onChange={(e) => setStationID(e.target.value)} name="Station_ID" />

                    </div>
                    <br />
                    <div class="col-md-7">
                        <label for="validationDefaultEmail" class="Order">Order</label>
                        <div class="input-group">

                            <input type="Order" class="form-control" id="validationDefaultEmail"
                                aria-describedby="inputGroupPrepend2" name="Order" onChange={(e) => setOrder(e.target.value)} placeholder="1" />
                        </div>
                    </div>
                    <div class="col-md-7">
                        <label for="validationDefaultEmail" class="distance">Distance</label>
                        <div class="input-group">

                            <input type="Distance" class="form-control" id="validationDefaultEmail"
                                aria-describedby="inputGroupPrepend2" name="Distance" placeholder="20" onChange={(e) => setDistance(e.target.value)}
                                value="" />
                        </div>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RouteOrderDistance;