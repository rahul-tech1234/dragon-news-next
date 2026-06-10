import userAvatar from '@/assets/user.png'
import Image from "next/image";
import Link from "next/link";
import NavLink from './NavLink';
const Navbar = () => {
    return (
        <div className='flex justify-between items-center mt-6'>
            <div></div>
            <ul className='flex justify-between items-center gap-4 text-gray-700'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li> <NavLink href={'/about'}>About</NavLink></li>
                <li><NavLink href={'/carrer'}>Carrer</NavLink></li>
            </ul>
            <div className='flex items-center gap-3'>
                <Image src={userAvatar} alt='User Avatar' width={60} height={60}></Image>
                <button className='btn bg-purple-500 text-white'>
                    <Link href={'/login'}>Login</Link>
                </button>
            </div>
        </div>

    );
};

export default Navbar;