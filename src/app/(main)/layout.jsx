import BrekkingNews from "@/components/shared/BrekkingNews";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";

const MainLayout = ({children}) => {
    return (
        <>
            <Header></Header>
            <BrekkingNews></BrekkingNews>
            <Navbar></Navbar>
            {children}  
        </>
    );
};

export default MainLayout;