import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { LuBookMarked } from "react-icons/lu";
const getSingleCategoryById=async(id)=>{
        const res=await fetch(`https://openapi.programming-hero.com/api/news/${id}`);
        const data=res.json();
        return data;
    };
export async function generateMetadata({ params}) {
  //console.log(params);
    const {id} =await params;
    const news=await getSingleCategoryById(id);
    const singleNews=await news.data[0]
    //console.log(singleNews);
    return {
        title: singleNews.title,
        description: singleNews.details,
    }

}


const NewsDetailsPage = async({params}) => {
    const {id}=await params;
    const categoryData= await getSingleCategoryById(id);
    const data=categoryData.data[0];
    //console.log(categoryData.data[0]);
    //console.log(data.category_id)
    return (
        <div className="my-8 card w-8/12 mx-auto">
            <div className="card-body">
    {/* Autho Info */}
    <div className="flex justify-between items-center bg-gray-300 rounded p-4">
        <div className="flex gap-3">
            <Image 
            src={data.author?.img} 
            alt={data.category_id} 
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
    <Image src={data.image_url} alt={data.author.name} width={100} height={100} className="w-full"></Image>
  </figure>
  <p className="text-left line-clamp-3  text-[16px] mb-4 ">{data.details}</p>
  <div className="flex justify-between items-center">
    <div className="flex items-center gap-5">
        <h2 className="flex items-center gap-2"><IoIosStar className="text-lg text-yellow-500 inline-block"></IoIosStar>{data.rating.number}</h2>
        <h2 className="flex items-center gap-2"><FaEye></FaEye>{data.total_view}</h2>
    </div>
    <Link href={`/category/${data.category_id}`}>
    <button className="btn bg-purple-500 text-white"><BsArrowLeft></BsArrowLeft> See other news for this categories</button>
    </Link>
  </div>
  </div>
        </div>
    );
};

export default NewsDetailsPage;