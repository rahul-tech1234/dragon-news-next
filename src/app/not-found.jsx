import Link from "next/link";
const NotFoundPage = () => {
    return (
        <div className="h-[80vh] flex justify-center items-center flex-col gap-5">
            <h2 className="text-4xl text-purple-500">This Page Not Found</h2>
            <Link href={'/'} className="bg-purple-500 text-center text-white btn">Back To Home</Link>
        </div>
    );
};

export default NotFoundPage;