import React from 'react';
import { CiSearch } from "react-icons/ci";
import { MdExplore } from "react-icons/md";
import { MdStars } from "react-icons/md";
import { BsBellFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { IoBookmarkSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-evenly p-1 shadow-lg'>
            <img className='w-72 h-16' src="https://s3-alpha-sig.figma.com/img/153c/f988/785cdcec05510cbdc9cb1b82a17b77fc?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g6eD0TCCyQD1FqcNaf-tDNV6e~sJMa-jiSFacpyn5Xi~QLa3nO7DhLjaNAxvLwkiLRDWC~OwMtGA2litWF-K0zDvZsSkSZzoZQmhMmQvIZ06XpZdJwrFDAeG-Qte6awSq20VCLxbUYukIOMY2Uy5t-Uwad3zbHO3EW~qsdPeKQRTHOR7n1NOIIHhhl~f8R95XNIgff5mpCttw~J2SahXwMuYvLcJlMbFhUCk3zvljqbyLvPxFvxsedHnPdxzdAf5kkD4nwbsoawxIFus~skDmMKwI~915FyUQEZBiYqR8sxaCg~qDNFwcm7UY8Bwgc2kdY2FVi-WoKGG6uGNZrutXQ__" alt="" />
            <div className='flex h-8 border rounded-lg'>
                <div className='w-full md:w-64 flex items-center px-2 py-1'>
                    <input type="text" placeholder='Search here...' className='w-full focus:outline-none' />
                </div>
                <div className='bg-[#8064A2] w-fit px-3 py-2 border-lg flex items-center justify-center text-white'>
                    <CiSearch />
                </div>
            </div>
            <div className='flex items-center space-x-8'>
                <div className='flex items-center justify-center'>
                    <MdExplore className='bg-white rounded-xl w-6 h-6 text-[#8064A2]' />
                    <p className='hidden md:block'>Explore</p>
                    <IoIosArrowDown className='hidden md:block' />
                </div>
                <div className='flex items-center justify-center'>
                    <MdStars className='bg-white rounded-xl w-6 h-6 text-[#8064A2]' />
                    <p className='hidden md:block'>Hobbies</p>
                    <IoIosArrowDown className='hidden md:block' />
                </div>
                <BsBellFill className='bg-white rounded-xl w-6 h-6 text-[#8064A2]' />
                <FaCartShopping className='bg-white rounded-xl w-6 h-6 text-[#8064A2]' />
                <IoBookmarkSharp className='bg-white rounded-xl w-6 h-6 text-[#8064A2]' />
            </div>
            <p className='border px-4 py-2 rounded-xl'>Sign In</p>
        </div>
    );
}

export default Navbar;
