import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const navigate = useNavigate();

    const reset = (e) => {
        navigate('/login');
    }
    return (
        <div>
            <div class="container">
                <div class="mt-5">
                    <h2 >Reset Password </h2>
                </div>
                <div class="mx-5 my-5">
                    <form class="mx-5 col-lg-5" action="" method="put">


                        <div class="mx-5">
                            <label for="validationDefaultPassword" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Password" name="password" />

                        </div>
                        <div class="mx-5">
                            <label for="validationDefaultPassword" class="form-label">Confirm Password</label>
                            <input type="password" class="form-control" id="password" placeholder="cPassword" name="cpassword" />
                        </div>
                        <div class="mx-5 my-2">
                            <button onClick={reset} type="submit" class="btn btn-primary">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;