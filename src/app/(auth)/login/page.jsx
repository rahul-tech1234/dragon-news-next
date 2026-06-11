'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { toast } from "react-toastify";
const LogInPage = () => {
    const {register,handleSubmit,formState:{errors},watch}=useForm();
    const [isShow,setIsShow]=useState(false)
    const handleLoginFinc=async(data)=>{
        //console.log(data)
        const {email, password}=data;
        const { data: res, error } = await authClient.signIn.email({ 
                    email: email, // required
                    password: password, // required
                    rememberMe: true,
                    callbackURL: '/',
        });
        //console.log('res=>',res, 'error=>',error )
        if(error){
             toast.error(error.message);
        }
        if(res){
            toast.success('Signip Successfull');
        }
    }
    //jhonimg jhon@gmail.com jhon HfdG#1234
    //console.log(watch('email') ,'watch')
    
    return (
        <div className="h-[80vh] flex justify-center items-center bg-slate-100  mx-auto">
            <div className="p-4 rounded-xl bg-white w-6/12">
                <h2 className="text-3xl font-bold text-center my-6">Login Your Account</h2>
                <form onSubmit={handleSubmit(handleLoginFinc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input 
                        type="email" 
                        className="email"  
                        placeholder="Type Your Email"
                         {...register("email")} />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input 
                        type={isShow? 'text' : 'password'} 
                        className="passwor" 
                         {...register("password",{required: 'password fill required'})} 
                        placeholder="Type Your passwor" />
                        <span onClick={()=>setIsShow(!isShow)} className="cursour-pointer">{isShow ? <FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>}</span>
                    </fieldset>
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    <button className="btn w-full bg-slate-700 text-white">Login</button>
                </form>
                <p className="mt-4 text-center">Don't have an account?<Link className="text-blue-500" href={'/register'}>Registration</Link></p>
            </div>
        </div>
    );
};

export default LogInPage;