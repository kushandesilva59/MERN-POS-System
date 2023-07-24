import React, { useState } from "react";
import styles from "../css/styles.css"
import { LoginForm } from '../loginForm/LoginForm'
import axios from "axios";
import {Products} from '../products/Products'
import { useNavigate} from 'react-router-dom'

export const Register = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

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

                axios.get("http://localhost:8000/customer/lastCustomer")
                .then(response =>{
                    console.log(response.data[0].cusId);

                    let cusId = response.data[0].cusId;
                    const newId = ++cusId;

                    const customer ={
                        "cusId" : newId,
                        "cusName" : name,
                        "cusAddress": address,
                        "cusEmail": email,
                        "cusPassword":password
                    }

                    axios.post("http://localhost:8000/customer/save",customer)
                });
              


                navigate('/products');
                

                
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

                    <label htmlFor="address">Address</label>
                    <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Address" id="address" name="address" />

                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password" />

                   

                    <button type="submit" onClick={registerCustomer}>Log In</button>
                </form>

                <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have and account? Login here</button>

            </div>
        </div>

    )

}