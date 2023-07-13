import React,{useState} from "react";
import { Login } from "../loginForm/LoginForm";
import { Register } from "../registerForm/RegisterForm";

export const  Form = () => {
    const [currentForm, setCurrentForm] = useState("login")

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }


  return (
    <div>
         {
            currentForm === "login" ?   <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
        }
    </div>
  )
}
