import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


const Login = () => {
    var user;
    //var isLoggedIn;

    // let [token, setToken] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [errorMessage, setErrorMessage] = useState("");
    //const [localStorage, setLocalStorage] = useState("");
    let [isLoggedIn, setIsLoggedIn] = useState();
    const navigate = useNavigate();

    const checkStorage = key => {
        const storedData = localStorage.getItem(key);
        if (!storedData) console.log('Local storage is empty');
        else {
            user = JSON.parse(localStorage.getItem(key));
            setIsLoggedIn(user.access_token);
        }
    }

    useEffect(() => {
        checkStorage('user');
    }, [])

    function loginSubmit(e) {
        e.preventDefault();
        checkStorage('user');

        console.log(isLoggedIn);
        axios.post("http://127.0.0.1:8000/api/loginApi", {
            email,
            password,
            isLoggedIn
        }).then(response => {
            console.log(response.data);
            if (response.data === 'logedin!') {
                navigate('/home');
                //console.log('logedin! this device');
            }
            else if (response.data === 'this password is not matched') {
                setErrorMessage("this password is not matched");
            }
            else if (response.data === 'No user found') {
                setErrorMessage("No user found");
            }
            else {
                var token = response.data;
                console.log(token);
                var user = { userId: token.userid, access_token: token.token, userType: token.user_type };
                localStorage.setItem('user', JSON.stringify(user));
                console.log(localStorage.getItem('user'));
            }

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
                            {errorMessage ? (
                                <label for="validationDefaultEmail" className=" alert alert-danger">{errorMessage}</label>
                            ) : (
                                <label for="validationDefaultEmail" className=" ">{errorMessage}</label>
                            )}
                            <br />
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