import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaFacebookF, FaYoutube } from "react-icons/fa6";
import { FaTwitter, FaInstagram, FaGooglePlusG } from "react-icons/fa";
import { IoLogoPinterest } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className='flex  justify-evenly p-4'>
            <div className='font-light space-y-3'>
                <div>
                    <p className='font-bold'>Hobbycue</p>
                </div>
                <div>
                    <p>About us</p>
                    <p>Our Service</p>
                    <p>Work with us</p>
                    <p>FAQ</p>
                    <p>Contact Us</p>
                </div>
            </div>
            <div className='font-light space-y-3'>
                <div className='font-light'>
                    <p className='font-bold'>How do I</p>
                </div>
                <div>
                    <p>Sign Up</p>
                    <p>Add a listing</p>
                    <p>Claim listing</p>
                    <p>Post a query</p>
                    <p>Add a blog Post</p>
                    <p>Other Queries</p>
                </div>
            </div>
            <div className='font-light space-y-3'>
                <div>
                    <p className='font-bold'>Quick Links</p>
                </div>
                <div>
                    <p>Listings</p>
                    <p>Blog Post</p>
                    <p>Shop / Store</p>
                    <p>Community</p>
                </div>
            </div>
            <div className='space-y-8'>
                <div className='space-y-2'>
                    <div>
                        <p>Social Media</p>
                    </div>
                    <div className='flex space-x-3'>
                        <FaFacebookF />
                        <FaTwitter />
                        <FaInstagram />
                        <IoLogoPinterest />
                        <FaGooglePlusG />
                        <FaYoutube />
                        <SiMinutemailer />
                        <MdEmail />
                    </div>
                </div>
                <div>
                </div>
                <div>
                    <div>
                        <p>Invite Friends</p>
                    </div>
                    <div className='flex h-8  border rounded-lg w-fit'>
                        <div className=' w-64 flex items-center px-2 py-1  '>
                            <input type="text" placeholder='Search here...' className='focus:outline-none ' />
                        </div>
                        <div className='bg-[#8064A2]  w-fit px-3 py-2 border-lg flex items-center justify-center text-white'>
                            <CiSearch />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer