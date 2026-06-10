'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavLink = ({children,href}) => {
    const pathname=usePathname();
    const isActive=href==pathname;
    console.log(pathname)
    return (
        <div>
            <Link href={href} className={`${isActive && 'border-b-2 border-gray-700'}`}>{children}</Link>
        </div>
    );
};

export default NavLink;