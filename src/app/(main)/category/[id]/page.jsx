import LeftSidebar from "@/components/shared/homepage/news/LeftSidebar";
import NewsCard from "@/components/shared/homepage/news/NewsCard";
import RightSideBar from "@/components/shared/homepage/news/RightSideBar";
import { getCategories, getNewsByCategoriesId } from "@/lib/data";


const NewsCategoryPage = async({params}) => {
    const {id}=await params;
    const Categories = await getCategories();
   const News = await getNewsByCategoriesId(id);
    return (
        <div>
               <div className="grid md:grid-cols-4 gap-3 my-15">
            <div className="">
                <div className=" bg-gray-200 text-center rounded shadow">
                    <h2 className="font-bold text-lg py-5 ">All Category</h2>
                    <div className="space-y-1">
                        {Categories.map((category) => (
                            <LeftSidebar
                                activeId={id}
                                key={category.category_id}
                                category={category}
                            ></LeftSidebar>
                        ))}
                    </div>
                </div>
            </div>
            <div className="col-span-2">
                <div className="bg-gray-100 text-center rounded shadow px-2">
                    <h2 className="font-bold text-lg py-5">All News</h2>
                    <div className="space-y-4">
                        {
                            News.length > 0 ?
                            News.map((data,i)=>{
                                return(
                                    <div key={i} className="p-6 rounded-md border">
                                        <NewsCard data={data}></NewsCard>
                                    </div>
                                );
                            })
                            :<div className="flex items-center justify-center">
                                <h2 className="font-bold text-4xl  text-purple-500">No News Found</h2>
                            </div>
                            
                        }
                        
                    </div>
                </div>
            </div>
            <div>
                <div className="bg-white text-center py-5 space-y-5 rounded shadow">
                    <h2 className="font-bold text-xl">Login With</h2>
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
        </div>
    );
};

export default NewsCategoryPage;