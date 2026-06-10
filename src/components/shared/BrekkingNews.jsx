import Marquee from "react-fast-marquee";
const news=[
    {
        id: '1',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quas iste dolorum eius eligendi cumque quisquam sapiente cupiditate ipsam quidem?',
    },
    {
        id: '2',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quas iste dolorum eius eligendi cumque quisquam sapiente cupiditate ipsam quidem?',
    },
    {
        id: '3',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quas iste dolorum eius eligendi cumque quisquam sapiente cupiditate ipsam quidem?',
    },
    
];
const BrekkingNews = () => {
    return (
        <div className="flex justyfy-between items-center bg-gray-200 py-4 px-2">
            <button className="btn bg-red-500 text-white">Leatest News</button>
            <Marquee pauseOnHover speed={100}>
                {
                    news.map(n=> <span key={n.id} className="mr-9">{n.title}</span>)
                }
            </Marquee>            
        </div>
    );
};

export default BrekkingNews;