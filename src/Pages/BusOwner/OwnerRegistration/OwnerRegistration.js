import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NotLoggedIn from '../../Shared/Header/NotLoggedIn';

const OwnerRegistration = () => {
    let [company_name, setCompanyName] = useState("");
    let [owner_name, setOwnerName] = useState("");
    let [email, setemail] = useState("");
    let [phone, setPhone] = useState("");
    let [address, setAddress] = useState("");
    let [password, setPassword] = useState("");
    let [message, setMessage] = useState("");
    const navigate = useNavigate();


    const registerSubmit = (e) => {
        e.preventDefault();

        axios.post("http://127.0.0.1:8000/api/bus-owner-register", {
            company_name,
            owner_name,
            email,
            phone,
            address,
            password,
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
            <div className='container'>
                <div className="mt-5">
                    <h2 className='text-center'>Welcome</h2>
                </div>
                <div class="container my-5">
                    <form class=" shadow-lg p-3 mb-5 bg-body rounded row g-3" action="{{route('owner-registration')}}"
                        method="post">
                        <div class="col-md-6">
                            <label for="company_name" class="form-label">Company name</label>
                            <input type="text" class="form-control" id="validationCustom02" placeholder="Company name"
                                name="company_name" value={company_name} onChange={(e) => setCompanyName(e.target.value)} />

                        </div>
                        <div class="col-md-6">
                            <label for="owner_name" class="form-label">Owner name</label>
                            <input type="text" class="form-control" id="validationCustom01" placeholder="Owner name"
                                name="owner_name" value={owner_name} onChange={(e) => setOwnerName(e.target.value)} />

                        </div>

                        <div class="col-md-6">
                            <label for="validationDefaultEmail" class="form-label">Email</label>
                            <div class="input-group">

                                <input type="email" class="form-control" id="validationDefaultEmail"
                                    aria-describedby="inputGroupPrepend2" name="email" placeholder="exemple@mail.com"
                                    value={email} onChange={(e) => setemail(e.target.value)} />
                            </div>

                        </div>
                        <div class="col-md-6">
                            <label for="inputPhone" class="form-label">Phone Number</label>
                            <input type="number" class="form-control" id="inputPassword4" name="phone" placeholder="01XXXX-XXXXX"
                                value={phone} onChange={(e) => setPhone(e.target.value)} />

                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="Kuratoli, Khilkhet, Bangladesh"
                                name="address" value={address} onChange={(e) => setAddress(e.target.value)} />

                        </div>


                        <div class="">
                            <div class="col-md-6">
                                <label for="validationDefaultPassword" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />


                            </div>
                            <div class="col-md-6">
                                <label for="validationDefaultCPass" class="form-label">Confrim Password</label>
                                <input type="password" class="form-control" id="cpassword" placeholder="Confirm password"
                                    name="password_confirmation" />

                            </div>
                        </div>


                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" name="terms" />
                                <label class="form-check-label" for="invalidCheck2">
                                    Agree to <a href="">terms and conditions</a>
                                </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <button onClick={registerSubmit} type="submit" class="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default OwnerRegistration;