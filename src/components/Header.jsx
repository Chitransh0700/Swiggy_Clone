import React from 'react';
import { RxCaretDown } from "react-icons/rx";
import { HiOutlineSearch } from "react-icons/hi";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoHelpBuoy } from "react-icons/io5";
import { PiSignInBold } from "react-icons/pi";
import { MdOutlineShoppingCart } from "react-icons/md";




export default function Header() {
    const [toggle, setToggle] = React.useState(false);
    const showSideMenu = () => {
        setToggle(true);
    }

    const hideSideMenu = () => {
        setToggle(false);
    }

    const links = [{
        icon: <HiOutlineSearch/>,
        name: "Search"
    },
    {
        icon: <RiDiscountPercentLine/>,
        name: "Offers",
        sup: <span className='bg-[#ff5200] text-white px-1 rounded-full'>New</span>
    },
    {
        icon: <IoHelpBuoy/>,
        name: "Help"
    },
    {
        icon: <PiSignInBold/>,
        name: "Sign In"
    },
    {
        icon: <MdOutlineShoppingCart/>,
        name: "Cart"
    }
    ]
    return (
        <>
            <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? 'visible' : 'hidden'
            }}>
                <div onClick={(e) =>{
                    e.stopPropagation();
                }} className='w-[600px] bg-white h-full absolute duration-[400ms]'
                    style={{
                        left: toggle ? '0%' :'-100%'
                    }}
                ></div>
            </div>
            <header className='p-[15px] shadow-xl text-[#686b78]'>
            <div className='max-w-[1500px] mx-xl  flex items-center'>
                <div className='w-[100px]'>
                    <img src="images/logo.png" className='w-full' alt="" />
                </div>
                <div className=''>
                <span  className='font-bold border-b border-b-[3px] border-black'> Home </span> 
                Knowledge Park I, Greater Noida, Uttar Pradesh, India<RxCaretDown fontSize={25} className=' font-bold inline text-[#ff5200]
                cursor-pointer'onClick={showSideMenu}/>
                </div>
                <nav className='flex list-none gap-5 ml-auto text-[18px] font-semibold '>
                    {
                        links.map(
                            (links,index) => {
                            return<li key={index} className='flex cursor-pointer hover:text-[#ff5200] items-center gap-2'>
                                {links.icon}
                                {links.name}
                                <sup>{links.sup}</sup>
                            </li>
                            }
                        )
                    }
                </nav>
            </div>
            </header>
        </>
    )
}