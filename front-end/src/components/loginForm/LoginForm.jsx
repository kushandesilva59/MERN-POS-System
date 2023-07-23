import React, { useState } from "react";
import styles from "../css/styles.css"
import { Copyright } from "../copyright/Copyright";
import axios from "axios";

export const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email     : " + email);
        console.log("Password  : " + password);

    }

    const logAsAdmin = () => {
        axios.get()
    }

    const logAsCustomer = () => {
        // Make a POST request using Axios
        axios.post('http://localhost:8000/customer/login', { "cusEmail": email, "cusPassword": password })
            .then(response => {
                // Handle the response from the server
                console.log(response.data.message);



                if (response.data.message === 'Login successful') {
                    console.log('inside if')
                    //Alert confirmation
                } else {
                    //Alert confirmation
                }
            })
            .catch(error => {
                // Handle errors, if any
                console.error(error);

            });
    }



    return (
        <div className="form">
            <div className="auth-form-container">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />

                    <label htmlFor="password">email</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password" />

                    <div className="button-panel">
                        <button id="admin-button" type="submit" onClick={logAsAdmin}>Log In as Admin</button>

                        <button id="user-button" type="submit" onClick={logAsCustomer}>Log In as Customer</button>
                    </div>
                </form>

                <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have and account? Register here</button>
            </div>
        </div>



    )

}