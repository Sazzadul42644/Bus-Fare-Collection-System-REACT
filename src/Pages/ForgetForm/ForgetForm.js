import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgetForm = () => {
    let [email, setEmail] = useState("");
    const sendResetLink = (e) => {
        e.preventDefault();

        axios.post("http://127.0.0.1:8000/api/password/forget", {
            email,
        }).then(response => {
            if (response.data === "registration success") {
                alert("Email sent");

            }
            else {
                alert("Email sent");
            }
            console.log(response.data);
        }).catch(error => console.log(error))

    }
    return (
        <div>
            <div class="container">
                <div class="mt-5">
                    <h2 className='text-center'>Forgot Password</h2>
                </div>
                <div class="mx-5 my-5">
                    <form class="mx-5 col-lg-5" action="{{route('forget-password-link')}}" method="post">
                        <div class="mx-5">
                            <p>Enter your email address and we will send you a link to reset your password</p>
                            <label for="validationDefaultEmail" class="form-label ">Email</label>
                            <div className='input-group text-center'>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="validationDefaultEmail"
                                    aria-describedby="inputGroupPrepend2" name="email" placeholder="exemple@mail.com" />
                            </div>
                        </div>
                        <div class="mx-5 my-2">
                            <button onClick={sendResetLink} type="submit" class="btn btn-primary">Send Reset Password Link</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetForm;