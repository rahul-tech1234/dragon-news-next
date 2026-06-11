'use client'
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const RegisterPage = () => {
    const {register,handleSubmit,formState:{errors},watch}=useForm();
    const handleLoginFunc=async(data)=>{
        //console.log(data)
        const {name,photo,email,password}=await data;
        const { data: res, error } = await authClient.signUp.email({
            name: name, 
            email: email, // required
            password: password, // required
            Image: photo, 
            callbackURL: '/'
});
//console.log('res =>', res, 'error=>', error)
if(error){
     toast.error(error.message);
}
if(res){
    toast.success('Signup Successfull');
}
    }
    //console.log(watch('email') ,'watch')
    return (
        <div className="h-[80vh] flex justify-center items-center bg-slate-100  mx-auto">
            <div className="p-4 rounded-xl bg-white w-6/12">
                <h2 className="text-3xl font-bold text-center my-6">SignUp Your Account</h2>
                <form onSubmit={handleSubmit(handleLoginFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input 
                        type="text" 
                        className="name"  
                        placeholder="Type Your Name "
                         {...register("name")} />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input 
                        type="email" 
                        className="email"  
                        placeholder="Type Your Email "
                         {...register("email")} />
                    </fieldset>
                    
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input 
                        type="text" 
                        className="name"  
                        placeholder="Type Your Photo URL "
                         {...register("photo")} />
                    </fieldset>
                    
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input 
                        type="password" 
                        className="passwor" 
                         {...register("password",{required: 'password fill required'})} 
                        placeholder="Type Your passwor" />
                    </fieldset>
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    
                    <button className="btn w-full bg-slate-700 text-white">Login</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;