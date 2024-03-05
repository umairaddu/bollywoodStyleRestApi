
import { useNavigate } from "react-router-dom"
import style from "../CSS/Ragister.module.css"
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { baseUrl } from "./api";
import { FaEye, FaEyeSlash } from 'react-icons/fa';



// ... (import statements)

export const Ragester = () => {
    const { register, handleSubmit, formState } = useForm();
    const { errors } = formState;
    const [data, setdata] = useState({});
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(true); // State to manage password visibility
    // const [role, setRole] = useState("user"); // Default role is user


    let temp;

    const loginpage = () => {
        navigate('/login')
    }

    const submit = async (formData) => {
        try {
            // Make API call with form data
            const response = await axios.post(`${baseUrl}user/registration`, formData);
            console.log(response.data.token);
            temp = response;
            if (response.data.status === "success") {
                setTimeout(() => {
                    toast.success("Register successfully")
                    localStorage.setItem('token', response.data.token);
                    navigate('/login');
                }, 2000);


            } else if (response.data.status === "failed") {
                toast.error("Email already exists")
            }
            // if (response.data.status === "failed") {

            //     toast.success("Email already exists")

            // }
        } catch (error) {
            console.log(error);
        }

        // You can still set the data locally if needed
        setdata(formData);
        console.log(formData);
        console.log(temp, "from temp variable");
    }

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div className={style.bg}>
            <ToastContainer />

            <div className={style.boxcon}>
                <div className={style.containt}>
                    <Form onSubmit={handleSubmit(submit)}>
                        <h1>Sing up </h1>
                        <input type="text" placeholder="Username" {...register("username", { required: { value: true, message: "please Enter Name", trim: true } })} />
                        <p style={{ color: "red" }}>{errors?.username?.message}</p>
                        <input type="text" placeholder="Email" {...register("email", { required: { value: true, message: "please Enter email", trim: true } })} />
                        <p style={{ color: "red" }}>{errors?.email?.message}</p>
                        <p style={{ color: "red" }}>{ }</p>

                        {/* <input type="text" placeholder="Password" {...register('password', { required: { value: true, trim: true } })} /><br /><br /> */}
                       
                        
                        <input
                        style={{marginLeft:"14px"}}
                            type={passwordShown ? 'text' : 'password'}
                            placeholder="Enter your password"
                            {...register('password', { required: { value: true, trim: true } })}
                        />
                        <span
                            onClick={togglePasswordVisiblity}
                            style={{ position: "relative", right: "30px" }}
                        >
                            {passwordShown ? <FaEyeSlash /> : <FaEye />}
                        </span>
                        <br />
                        <br />

                        <input style={{marginLeft:"14px"}} type="text" placeholder="re-Password" {...register('password_confirmation', { required: { value: true, trim: true } })} />
                        
                        <span
                            onClick={togglePasswordVisiblity}
                            style={{ position: "relative", right: "30px" }}
                        >
                            {passwordShown ? <FaEyeSlash /> : <FaEye />}
                        </span>
                        <br />
                        <button className={style.singnbtn} type="submit">Sign Up</button>
                        <br />
                        <button className={style.btn} onClick={loginpage}>Login</button>
                    </Form>
                </div>
            </div>
        </div>
    );
}
