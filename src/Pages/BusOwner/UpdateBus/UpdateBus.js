import React from 'react';
import { Link } from 'react-router-dom';
import BusOwnerNav from '../BusOwnerNav/BusOwnerNav';

const UpdateBus = () => {
    return (
        <div className='container'>
            <BusOwnerNav></BusOwnerNav>
            <div class="m-5">
                <h2>Update Bus Information</h2>
            </div>
            <div class="container my-5">
                <form class="shadow-lg p-3 mb-5 bg-body rounded row g-3" action="" method="post">
                    <div class="col-md-7">
                        <input type="hidden" class="form-control" value="{{$bus['id']}}" name="id" />
                    </div>
                    <div class="col-md-7">
                        <label for="bus_name" class="form-label">Bus name</label>
                        <input type="text" class="form-control" placeholder="bus name" name="bus_name" />
                    </div>
                    <div class="col-md-7">
                        <label for="Amount of Bus" class="form-label">Amount of Bus</label>
                        <input type="text" class="form-control" id="validationCustom02" placeholder="Amount of Bus" name="Amount_of_Bus" />

                    </div>
                    <div class="col-md-7">
                        <label for="validationDefaultEmail" class="Trade_Licence">Trade Licence</label>
                        <div class="input-group">

                            <input type="Trade_Licence" class="form-control" id="validationDefaultEmail"
                                aria-describedby="inputGroupPrepend2" name="Trade_Licence" placeholder="1234567" />
                        </div>
                    </div>
                    <div class="col-md-7">
                        <label for="validationDefaultEmail" class="Route_no">Routed No.</label>
                        <div class="input-group">

                            <input type="Route_no" class="form-control" id="validationDefaultEmail"
                                aria-describedby="inputGroupPrepend2" name="Route_no" placeholder="A-101" />
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" name="terms" />
                            <label class="form-check-label" for="invalidCheck2">
                                Agree to <Link to="">terms and conditions</Link>
                            </label>
                        </div>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateBus;