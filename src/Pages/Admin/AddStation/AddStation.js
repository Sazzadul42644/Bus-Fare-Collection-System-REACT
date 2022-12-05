import React from 'react';
import AdminNav from '../AdminNav/AdminNav';

const AddStation = () => {
    return (
        <div>
            <AdminNav></AdminNav>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Latitude" aria-label="Latitude" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Longitude" aria-label="Longitude" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="StationName" aria-label="StationName" />
                    </div>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary mt-3">Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default AddStation;