import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
    let [token, setToken] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const loginSubmit = () => {
        var obj = { email: email, password: password };
        alert(obj.email);
        axios.post("http://127.0.0.1:8000/api/loginApi", obj)
            .then(resp => {
                var token = resp.data;
                console.log(token);
                var user = { userId: token.userid, access_token: token.token };
                localStorage.setItem('user', JSON.stringify(user));
                console.log(localStorage.getItem('user'));
            }).catch(err => {
                console.log(err);
            });


    }

    return (

        <div>
            <div className="container">
                <div className="mt-5">
                    <h2 >Welcome</h2>
                </div>
                <div className="mx-5 my-5">
                    <form className="mx-5 col-lg-5">
                        <div className="mx-5">
                            <label for="validationDefaultEmail" className="form-label ">Email</label>
                            <div className="input-group">
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="validationDefaultEmail"
                                    aria-describedby="inputGroupPrepend2" name="email" placeholder="exemple@mail.com"
                                />
                            </div>

                        </div>
                        <div className="mx-5">
                            <label for="validationDefaultPassword" className="form-label">Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" placeholder="Password" name="password" />

                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="mx-5 my-2">
                            <button onClick={loginSubmit} className="btn btn-primary">Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;