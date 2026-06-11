'use client'
import userAvatar from '@/assets/user.png'
import Image from "next/image";
import Link from "next/link";
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
const Navbar = () => {
    const { data: session,isPending } = authClient.useSession();
    const user=session?.user;
    console.log('user=>', user);
    return (
        <div className='flex justify-between items-center mt-6'>
            <div></div>
            <ul className='flex justify-between items-center gap-4 text-gray-700'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li> <NavLink href={'/about'}>About</NavLink></li>
                <li><NavLink href={'/carrer'}>Carrer</NavLink></li>
            </ul>
            {  isPending ? <span className="loading loading-dots loading-md"></span>:
                user ?
                <div className='flex items-center gap-3'>
                <h2>hello  {user.name}</h2>
                <Image src={userAvatar} alt='User Avatar' width={60} height={60}></Image>
                <button className='btn bg-purple-500 text-white' 
                onClick={async()=>await authClient.signOut()}>
                    Logout
                </button>
            </div>:<Link href={'/login'}>Login</Link>
            }
            
        </div>

    );
};

export default Navbar;