import React from 'react';
import NotLoggedIn from '../../Shared/Header/NotLoggedIn';

const PassengerRegistration = () => {
    return (
        <div>
            <NotLoggedIn></NotLoggedIn>
            <div>
                <div className="mx-5">
                    <h2>Welcome</h2>
                </div>
                <div className="container my-5">
                    <form className="shadow-lg p-3 mb-5 bg-body rounded row g-3">
                        <div className="col-md-6">
                            <div className="col-md-6">
                                <label for="first_name" className="form-label">First name</label>
                                <input type="text" className="form-control" id="validationCustom01" placeholder="First name"
                                    name="first_name" />
                            </div>
                            <div className="col-md-6">
                                <label for="last_name" className="form-label">Last name</label>
                                <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" name="last_name" />
                                <label for="validationDefaultEmail" className="form-label">Email</label>
                                <div className="input-group">
                                    <input type="email" className="form-control" id="validationDefaultEmail"
                                        aria-describedby="inputGroupPrepend2" name="email" placeholder="exemple@mail.com" />
                                </div>
                                <label for="inputPhone" className="form-label">Phone Number</label>
                                <input type="number" className="form-control" id="inputPassword4" name="phone" placeholder="01XXXX-XXXXX" />
                                <div className="col-12">
                                    <label for="inputAddress" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="Kuratoli, Khilkhet, Bangladesh"
                                        name="address" />
                                </div>
                                <div className="col-6">
                                    <label for="inputBirthday" className="form-label">Date of birth</label><br />
                                    <input type="date" id="birthday" name="dob" />
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
                                        <input type="password" className="form-control" id="password" placeholder="Password" name="password" />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="validationDefaultCPass" className="form-label">Confrim Password</label>
                                        <input type="password" className="form-control" id="cpassword" placeholder="Confirm password"
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
                                    <button className="btn btn-primary">Register</button>
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