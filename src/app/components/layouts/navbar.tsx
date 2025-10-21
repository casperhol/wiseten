'use client';
import { useState } from "react";
import useScroll from "@/app/components/navigation-scroll-effect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import Navigation from "./navigation";
import ImageComponent from "@/app/components/image-component";
import logo from "../../../../public/images/gold_white.png";

export default function Navbar(){
    const [navbar, setNavbar] = useState(false);
    const [navbarBg, setNavbarBg] = useState('#58786cff');

    useScroll((scrollPosition) => {
        if(scrollPosition > 50) {setNavbarBg('bg-[#58786cff]');} else {setNavbarBg('bg-transparent');}
    });

    return(
        <header>
            <nav className={`w-full fixed top-0 z-20 border-b-1 border-[#58786cff] ${navbar? '#003220':`${navbarBg}`}`}>
                <div className={`mx-auto md:items-center md:flex px-0 md:px-8 w-full py-4 ${navbar?'py-0':''} md:py-0`}> 
                    <div className="grow">
                        <div className={`flex items-center justify-between px-5 md:px-0 ${navbar?'bg-[#58786cff] h-[90px] mt-[-30px]':''}`}>
                            {navbar &&(
                                <div className="md:hidden px-4">
                                    <button className="text-white rounded-md outline-none py-4 md:py-0" onClick={() => setNavbar(!navbar)}>
                                        <FontAwesomeIcon icon={faTimes} className="text-lg text-white"/>
                                    </button>
                                </div>
                            )}
                            <Link href="/" className={`px-1 md:pb-3 ${navbar ? 'hidden' : 'block'}`}>
                                <ImageComponent url={logo} alt="logo" className="w-[140px] md:w-[200px]" priority={true}/>
                            </Link>
                            <div className="md:hidden">
                                <div className="elfsight-app-06d147fb-00de-4799-a868-f25d8c133c24" data-elfsight-app-lazy/>
                            </div>
                            {!navbar &&(
                                <div className="md:hidden px-4">
                                    <button className="text-white rounded-md outline-none" onClick={() => setNavbar(!navbar)}>
                                        <FontAwesomeIcon icon={faBars} className="text-lg text-white"/>
                                    </button>
                                </div>
                            )}
                        </div> 
                    </div>
                    <div className="flex-none">
                        <div className="grid md:grid-cols-12 float-right">
                            <div className="col-span-12">
                                <div className={`flex pb-3 bg-transparent md:block md:pb-0 sm:mt-[-20px] mt-[-62px] md:mt-0 md:ml-0 md:p-0 ${navbar?'block bg-transparent':'hidden'}`}>
                                    <ul className="md:bg-transparent h-screen md:h-auto md:flex pl-3 md:py-0 md:pl-0">
                                       <Navigation>
                                            <div className={`md:pt-0 pb-5 px-1 md:hidden ${navbar ? 'block mt-[-25px]':'hidden'}`}>
                                                <ImageComponent url={logo} alt="logo" className="w-[120px] md:w-[241px]" priority={true}/>
                                            </div>
                                       </Navigation>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
