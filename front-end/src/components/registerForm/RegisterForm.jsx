import React, { useState } from "react";
import styles from "../css/styles.css"
import { LoginForm } from '../loginForm/LoginForm'
import axios from "axios";
import {Products} from '../products/Products'

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

    const registerCustomer = ()=>{
        axios.post("http://localhost:8000/customer/exist",{"cusEmail":email})
        .then(response =>{
            console.log("Front end :",response.data.message);

            if(response.data.message === 'Registration succesfull'){
                console.log("inside if")
                // <Products/>
            }else{
                //error alert
            }
        }).
        catch(error =>{
            console.log(error)
        });
    }


    return (
        <div className="form">
            <div className="auth-form-container">
                <h2>Register</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="David johnson" id="name" name="name" />

                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />


                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password" />

                    <button type="submit" onClick={registerCustomer}>Log In</button>
                </form>

                <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have and account? Login here</button>

            </div>
        </div>

    )

}