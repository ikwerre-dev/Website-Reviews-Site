import { MenuIcon, SearchCheckIcon, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const Menu = [
        { "link": "/#", "title": "Home" },
        { "link": "/#about", "title": "About" },
        { "link": "/#services", "title": "Services" },
     ]
    const [isMenuOpen, SetisMenuOpen] = useState(false)
    const toggleMenu = () => {
        isMenuOpen ? SetisMenuOpen(false) : SetisMenuOpen(true)
    }
    return (
        <div className="py-[2rem] md:py-[3rem] px-5 md:px-[10rem]">
            <div className="bg-[#000] border-[.1rem] border-[#EAE8FF] flex justify-between md:grid  md:grid-cols-3 rounded-[2rem] w-full p-[1rem]">
                <div className=" flex flex-row items-center gap-3 text-[#EAE8FF] p-[.5rem] ">
                <Link to={'/'}> <img src="https://cdn.trustpilot.net/brand-assets/4.3.0/logo-white.svg" className="w-[7rem] object-contain" alt="" /></Link>
                 </div>
                <div className="hidden md:flex gap-5 items-center justify-center text-[#EAE8FF]">
                    {
                        Menu.map((data, index) => (
                            <a href={data.link}>{data.title}</a>
                        ))
                    }
                </div>

                <div className="flex flex-row justify-end">
                     <Link to={'/search'} className="hidden md:flex  bg-[#EAE8FF] text-center justify-center items-center flex-col font-bold px-5 py-2  rounded-[5rem]  text-black">Search</Link>
                  
                    <button onClick={toggleMenu} className="flex md:hidden  bg-[#EAE8FF] px-3 py-3  rounded-[5rem]  text-black">{!isMenuOpen ? <MenuIcon /> : <X />}</button>
                </div>

            </div>
            {isMenuOpen && (
                <div className="px-[0rem] py-4">
                    <div className="flex bg-black  py-5 rounded-lg flex-col gap-5 items-center justify-center border-2 border-[#EAE8FF] text-[#EAE8FF]">
                        {
                            Menu.map((data, index) => (
                                <a href={data.link}>{data.title}</a>
                            ))
                        }
                        <div className="flex w-full px-5 text-center flex-col">
                            <Link to={'/search'} className="flex w-full bg-[#EAE8FF] text-center justify-center items-center flex-col font-bold px-5 py-2  rounded-[5rem]  text-black">Search</Link>
                        </div>
                    </div>

                </div>

            )}
        </div>
    )
}
export default Header;