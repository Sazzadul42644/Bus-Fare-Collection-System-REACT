import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CardPunch = () => {
    const [cardPunches, setCardPunches] = useState([]);

    const [rfid, setRfid] = useState([]);
    const [latitude, setLat] = useState([]);
    const [longitude, setLong] = useState([]);

    // useEffect(() => {
    //     axios.get("http://127.0.0.1:8000/api/view-bus-api")
    //         .then(response => {
    //             console.log(response.data);
    //             setCardPunches(response.data);
    //         }).catch(err => {
    //             console.log(err);
    //         })
    // }, []);
    const postData = (e) => {
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/api/card-punch", {
            rfid,
            latitude,
            longitude
        })
            .then(res => console.log('posting data', res))
            .catch(err => console.log(err))

    }

    return (
        <div>
            <form className="p-3 mb-5 bg-body rounded row g-3">
                <div className="col-md-4">
                    <label for="exampleInputEmail1" className="form-label">userRFID</label>
                    <input type="text" value={rfid} onChange={(e) => setRfid(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="col-md-4">
                    <label for="exampleInputPassword1" className="form-label">latitude</label>
                    <input type="text" value={latitude} onChange={(e) => setLat(e.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="col-md-4">
                    <label for="exampleInputPassword1" className="form-label">longitude</label>
                    <input type="text" value={longitude} onChange={(e) => setLong(e.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>
                <button onClick={postData} className="btn btn-primary mt-5 col-md-4">post</button>
            </form>
        </div>
    );
};

export default CardPunch;