import React,{useState} from "react";
import styles from "../css/styles.css"

export const Login =(props) => {
    const [email,setEmail]  = useState("");
    const [password,setPassword]  = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email     : "+email);
        console.log("Password  : "+password);
    }

    return(
<div className="form">
<div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>

                <label htmlFor="password">email</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password"/>

                <button type="submit">Log In</button>
            </form>

            <button className="link-btn" onClick={()=>props.onFormSwitch('register')}>Don't have and account? Register here</button>
        </div>
</div>

       

    )

}