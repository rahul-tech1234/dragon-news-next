import Link from "next/link";
const LogInPage = () => {
    return (
        <div className="h-[80vh] flex justify-center items-center bg-slate-100 w-8/12 mx-auto">
            <div className="p-4 rounded-xl bg-white">
                <h2 className="text-3xl font-bold text-center mb-6">Login Your Account</h2>
                <form>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" className="email" placeholder="Type Your Email" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="passwors" className="passwors" placeholder="Type Your passwors" />
                    </fieldset>
                    <button className="btn w-full bg-slate-700 text-white">Login</button>
                </form>
                <p className="mt-4 text-center">Don't have an account?<Link className="text-blue-500" href={'/register'}>Registration</Link></p>
            </div>
        </div>
    );
};

export default LogInPage;