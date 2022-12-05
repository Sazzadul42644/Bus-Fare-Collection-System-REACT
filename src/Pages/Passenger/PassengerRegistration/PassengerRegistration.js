import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NotLoggedIn from '../../Shared/Header/NotLoggedIn';

const PassengerRegistration = () => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [phone, setPhone] = useState("");
    let [address, setAddress] = useState("");
    let [date, setDate] = useState("");
    let [message, setMessage] = useState("");
    const navigate = useNavigate();


    const registerSubmit = (e) => {
        e.preventDefault();

        axios.post("http://127.0.0.1:8000/api/passenger-register", {
            email,
            password,
            confirmPassword,
            firstName,
            lastName,
            phone,
            address
        }).then(response => {
            if (response.data === "registration success") {
                alert("registration success, please login");
                navigate('/login');
            }
            else if (response.data === "registration failed") {
                setMessage("registration failed");
            }
            else if (response.data === "user already exist") {
                setMessage("user already exist");
            }
            console.log(response.data);
        }).catch(error => console.log(error))

    }


    return (
        <div>
            <NotLoggedIn></NotLoggedIn>
            <div>
                <div className="mt-5">
                    <h2>Welcome</h2>
                </div>
                <div className="container my-5">
                    <form className="shadow-lg p-3 mb-5 bg-body rounded row g-3">
                        {message ? (
                            <label for="validationDefaultEmail" className="alert alert-danger">{message}</label>
                        ) : (
                            <label for="validationDefaultEmail" className=" ">{message}</label>
                        )}
                        <br />
                        <div className="col-md-6">
                            <div className="col-md-6">
                                <label for="first_name" className="form-label">First name</label>
                                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-control" id="validationCustom01" placeholder="First name"
                                    name="first_name" />
                            </div>
                            <div className="col-md-6">
                                <label for="last_name" className="form-label">Last name</label>
                                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="form-control" id="validationCustom02" placeholder="Last name" name="last_name" />
                                <label for="validationDefaultEmail" className="form-label">Email</label>
                                <div className="input-group">
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="validationDefaultEmail"
                                        aria-describedby="inputGroupPrepend2" name="email" placeholder="exemple@mail.com" />
                                </div>
                                <label for="inputPhone" className="form-label">Phone Number</label>
                                <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="inputPassword4" name="phone" placeholder="01XXXX-XXXXX" />
                                <div className="col-12">
                                    <label for="inputAddress" className="form-label">Address</label>
                                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="inputAddress" placeholder="Kuratoli, Khilkhet, Bangladesh"
                                        name="address" />
                                </div>
                                <div className="col-6">
                                    <label for="inputBirthday" className="form-label">Date of birth</label><br />
                                    <input value={date} onChange={(e) => setDate(e.target.value)} type="date" id="birthday" name="dob" />
                                </div>
                                <br />
                                <label for="inputGender" className="form-label">Gender</label>
                                <div className="form-check col-1">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" for="flexRadioDefault1">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check col-1">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label className="form-check-label" for="flexRadioDefault2">
                                        Female
                                    </label>
                                </div>
                                <div className="form-check col-1">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                    <label className="form-check-label" for="flexRadioDefault3">
                                        Other
                                    </label>
                                </div>
                                <div className="">
                                    <div className="col-md-6">
                                        <label for="validationDefaultPassword" className="form-label">Password</label>
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" placeholder="Password" name="password" />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="validationDefaultCPass" className="form-label">Confrim Password</label>
                                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-control" id="cpassword" placeholder="Confirm password"
                                            name="password_confirmation" />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="invalidCheck2" name="terms" />
                                        <label className="form-check-label" for="invalidCheck2">
                                            Agree to <a href="">terms and conditions</a>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button onClick={registerSubmit} className="btn btn-primary">Register</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PassengerRegistration;