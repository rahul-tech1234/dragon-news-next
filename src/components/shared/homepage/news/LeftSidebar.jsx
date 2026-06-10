import Link from "next/link";
const LeftSidebar = ({category,activeId}) => {
    const isactive=category.category_id==activeId
    console.log(isactive);
     return (
        <div>
            <Link 
            href={`/category/${category.category_id}`}
            className={`btn inline-block w-full font-medium ${isactive && 'bg-purple-500'} `}>{category.category_name}
            </Link>
        </div>
    );
};

export default LeftSidebar;