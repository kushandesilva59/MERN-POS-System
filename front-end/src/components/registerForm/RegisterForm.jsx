import React, { useState } from "react";
import styles from "../css/styles.css"
import { LoginForm } from '../loginForm/LoginForm'


export const Register = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name     : " + name);
        console.log("email    : " + email);
        console.log("Password : " + password);
    }


    return (
        <div className="form">
            <div className="auth-form-container">
                <h2>Register</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Full name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="David johnson" id="name" name="name" />

                    <label htmlFor="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />


                    <label htmlFor="password">email</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password" />

                    <button type="submit">Log In</button>
                </form>

                <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have and account? Login here</button>

            </div>
        </div>

    )

}