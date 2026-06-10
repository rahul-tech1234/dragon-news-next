import LeftSidebar from "@/components/shared/homepage/news/LeftSidebar";
import RightSideBar from "@/components/shared/homepage/news/RightSideBar";
const getCategories = async () => {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/news/categories",
    );
    const category = await res.json();
    const data = await category.data.news_category;
    return data;
};
export default async function Home() {
   const Categories = await getCategories();
    
    return (
        <div className="grid md:grid-cols-4 gap-3 my-15">
            <div className="">
                <div className=" bg-gray-200 text-center rounded shadow">
                    <h2 className="font-bold text-lg py-5 ">All Category</h2>
                    <div className="space-y-1">
                        {Categories.map((category) => (
                            <LeftSidebar
                                activeId={null}
                                key={category.category_id}
                                category={category}
                            ></LeftSidebar>
                        ))}
                    </div>
                </div>
            </div>
            <div className="col-span-2">
                <div className="font-bold text-3xl bg-green-100 text-center">
                    All News
                </div>
            </div>
            <div>
                <div className="bg-white text-center py-5 space-y-5 rounded shadow">
                    <h2 className="font-bold text-xl">Login With</h2>
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
}
