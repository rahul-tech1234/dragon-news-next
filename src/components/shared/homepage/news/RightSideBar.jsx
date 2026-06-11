import Image from "next/image";
import { BsGithub, BsGoogle } from "react-icons/bs";
import Class from "@/assets/class.png";
import Swimming from '@/assets/swimming.png'
import Play from '@/assets/playground.png'    
import Banner from '@/assets/bg.png'
import Facebook from '@/assets/fb.png'
import Twitter from '@/assets/twitter.png'
import Insta from '@/assets/instagram.png'
const RightSideBar = () => {
    return (
        <div className="space-y-2">
            <button className="btn border border-blue-500 text-blue-500 w-full flex items-center font-normal"><BsGoogle></BsGoogle>Login with Google</button>            
            <button className="btn flex items-center w-full border font-normal"><BsGithub></BsGithub>Login with Google</button>



<h2 className="font-bold  text-lg text-gray-700 my-5">Find Us On</h2>
                <div className="border border-gray-300 rounded-md space-y-3 py-3 space-x-3">
                    <button 
                    className="flex items-center border-b w-full border-gray-300 py-3 text-left">
                        <div className="flex justify-center items-center mx-3 bg-gray-300 w-10 h-10 rounded-full">
                        <Image src={Facebook} alt="Facebook" className="" />        
                        </div>
                        
                          Facebook</button>
                    <button 
                    className="flex items-center border-b w-full border-gray-300 py-3 text-left">
                        <div className="flex justify-center items-center mx-3 bg-gray-300 w-10 h-10 rounded-full">
                        <Image src={Twitter} alt="Facebook" className="" />        
                        </div>
                        
                          Twitter</button>
                    <button 
                    className="flex items-center  w-full py-3 text-left">
                        <div className="flex justify-center items-center mx-3 bg-gray-300 w-10 h-10 rounded-full">
                        <Image src={Insta} alt="Facebook" className="" />        
                        </div>
                        
                          Instagram</button>
                </div>
 <div className="bg-gray-200 py-5 px-2 space-y-2">
                 <h2 className="font-bold  text-lg text-gray-700 mb-5">Q-Zone</h2>
                 <div>
                    <Image src={Swimming} alt="Swimming"></Image>
                 </div>
                 <div>
                    <Image src={Class} alt="Class"></Image>
                 </div>
                 <div>
                    <Image src={Play} alt="Play Ground"></Image>
                 </div>
                 <div>
                    <Image src={Banner} alt="Banner"></Image>
                 </div>
                 
            </div>


            
        </div>
    );
};

export default RightSideBar;