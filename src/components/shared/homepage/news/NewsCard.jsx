import Image from "next/image";
import Link from "next/link";
import { CiShare2, CiStar } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { LuBookMarked } from "react-icons/lu";

const NewsCard = ({data}) => {
    //console.log(data._id);
    return (
        <div className="card bg-base-100 shadow-sm">
  <div className="card-body">
    {/* Autho Info */}
    <div className="flex justify-between items-center bg-gray-300 rounded p-4">
        <div className="flex gap-3">
            <Image 
            src={data.author?.img} 
            alt={data._id} 
            height={40} 
            width={40 } 
            className="rounded-full"></Image>
            <div className="text-left">
                <h2 className="font-semibold">{data.author.name}</h2>
                <p className="text-xs">{data.author.published_date}</p>
            </div>
        </div>
        <div className="flex justify-between items-center">
            <CiShare2 className="text-xl"></CiShare2>
            <LuBookMarked className="text-xl"></LuBookMarked>
        </div>
    </div>
    <h2 className="card-title font-bold text-left py-3">{data.title}</h2>
    <figure>
    <Image src={data.image_url} alt={data._id} width={100} height={100} className="w-full"></Image>
  </figure>
  <p className="text-left line-clamp-3  text-[16px] mb-4 ">{data.details}</p>
  <div className="flex justify-between items-center">
    <div className="flex items-center gap-5">
        <h2 className="flex items-center gap-2"><IoIosStar className="text-lg text-yellow-500 inline-block"></IoIosStar>{data.rating.number}</h2>
        <h2 className="flex items-center gap-2"><FaEye></FaEye>{data.total_view}</h2>
    </div>
    <Link href={`/news/${data._id}`}>
    <button className="btn bg-purple-500 text-white">See details</button>
    </Link>
  </div>
  </div>
  
</div>


    );
};

export default NewsCard;