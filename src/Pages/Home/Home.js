import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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
    // var user;
    // var isLoggedIn;
    // if (localStorage.getItem('user')) {
    //     user = JSON.parse(localStorage.getItem('user'));
    //     isLoggedIn = user.access_token;
    // }
    // else {

    // }
    console.log(isLoggedIn);
    // const user = JSON.parse(localStorage.getItem('user'));
    // const isLoggedIn = user.access_token;
    return (
        <div>



            <div className='mt-5 container text-justify'>
                <h2 className='text-center bg-light' >Bus Fare collection System</h2>
                <p>To make our daily transportation experience easy and hassle less. We come up with idea that passenger will able to pay bus fare using their RFID card. They don’t have to pay extra money. Security will be better. Bus owner will get actual fare and cost will be deducted because there will be no need of bus helper or conductor. People will be able to move faster. Only by punching twice in RFID receiver which will found in bus entrance the fare will be deducted from passenger account. The fare will deduct govt. given fare chart, student half pass also can be ensured. All they have to do is register first and getting their own RFID card. Punch the card entering the bus and punch again exiting the bus, that’s it, fare will be collect form passenger account via RFID receiver. For registration we will make a web app. Passenger will register here and get their ID. Then passenger can check account balance and recharge form our web app. Bus owner will also register and list their buses, collect money form their account. The bus will use GPS technology, using GPS it will able to track passenger arrival and departure time and according to that the distance will be measured, fare will be collected. As there is GPS technology in bus passengers will able to track a bus form their web app. Which will helpful for passenger and will add security to our public transport. Any accident can be easily track. Overall, "Bus automated fare collection system using RFID” project will help our day-to-day life, will beneficial for both bus owner and passenger, will add extra security.</p>
            </div>
            <div className="text-center mt-5 container">
                {
                    isLoggedIn ? (<Link className="btn btn-outline-primary" to="/logout">Log out</Link>) : (<Link className="btn btn-outline-primary" to="/login">Log in</Link>)
                }
                {/* <Link className="btn btn-outline-primary" to="/login">Log in</Link> */}
                <Link className="btn btn-outline-primary" to="/register-passenger">Passenger Registration</Link>
                <Link className="btn btn-outline-primary" to="/owner-register">Owner Registration</Link>
            </div>

        </div>
    );
};

export default Home;