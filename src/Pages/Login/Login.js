import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import NotLoggedIn from '../Shared/Header/NotLoggedIn';


const Login = () => {
    //let [token, setToken] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setIsLoggedIn(user.access_token);
        }
        else {
            setIsLoggedIn(false);
        }

    }, [])

    const loginSubmit = (e) => {
        e.preventDefault();

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

                if (token.user_type === 'passenger') {
                    navigate('/passenger-home');
                }
                else if (token.user_type === 'busOwner') {
                    navigate('/busowner-home');
                }
                else if (token.user_type === 'admin') {
                    navigate('/admin-home');
                }
                else {
                    console.log('vugucugi');
                }
            }

        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div>
            <NotLoggedIn></NotLoggedIn>
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
                            <Link className='mx-5' to="/password/forget">Forget Password</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;