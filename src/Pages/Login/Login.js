import React from 'react';
import Head from '../Shared/Header/Head';

const Login = () => {
    return (

        <div>
            <div className="container">
                <div className="mt-5">
                    <h2 >Welcome</h2>
                </div>
                <div className="mx-5 my-5">
                    <form className="mx-5 col-lg-5" action="{{route('login-user')}}" method="post">

                        <div className="mx-5">
                            <label for="validationDefaultEmail" className="form-label ">Email</label>
                            <div className="input-group">
                                <input type="email" className="form-control" id="validationDefaultEmail"
                                    aria-describedby="inputGroupPrepend2" name="email" placeholder="exemple@mail.com"
                                />
                            </div>

                        </div>
                        <div className="mx-5">
                            <label for="validationDefaultPassword" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" name="password" />

                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="mx-5 my-2">
                            <button type="submit" className="btn btn-primary">Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;