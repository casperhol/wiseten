import Link from "next/link";

export default function Navigation({children}:{children:React.ReactNode}){
    return(
        <ul className="bg-[#58786cff] md:bg-transparent h-screen md:h-auto md:flex pl-3 py-4 md:py-0 pl-4 md:pl-0 pr-20 md:pr-0">
        {children}
        <li className="pb-6 md:text-[35px] text-[10px] text-white py-3 ml-[14px] md:ml-[30px]">
            <Link href="/" className="text-white text-white text-[14px] pl-2 pr-5 font-[800px] hover:bg-[#58786cff] hover:py-3 hover:rounded-lg">
                Home
            </Link>
        </li>
        <li className="pb-6 md:text-[35px] text-[10px] text-white py-3">
            <Link href="/our-strategies" className="text-white px-5 hover:text-[#FFF] text-[14px] hover:bg-[#58786cff] hover:py-3 hover:rounded-lg"> 
                Our Strategies
            </Link> 
        </li>
        <li className="pb-6 md:text-[35px] text-[10px] text-white py-3">
            <Link href="/about-us" className="text-white px-5 hover:text-[#FFF] text-[14px] hover:bg-[#58786cff] hover:py-3 hover:rounded-lg"> 
                About Us
            </Link> 
        </li>
       
        <li className="pb-6 md:text-[35px] text-[10px] text-white py-3">
            <Link href="/digital-assets" className="text-white px-4 hover:text-[#FFF] hover:bg-[#58786cff] text-[14px] hover:py-3 hover:rounded-lg"> 
                Digital Assets
            </Link> 
        </li>
        <li className="pb-6 md:text-[35px] text-[10px] text-white py-3">
            <Link href="/how-it-works" className="text-white px-5 hover:text-[#FFF] hover:bg-[#58786cff]  text-[14px] hover:py-3 hover:rounded-lg"> 
                How It Works
            </Link> 
        </li>
        
        <li className="pb-6 md:text-[35px] text-[10px] text-white py-3">
            <Link href="/contact-us" className="text-white px-5 hover:text-[#FFF] hover:bg-[#58786cff] text-[14px] hover:py-3 hover:rounded-lg"> 
                Contact us
            </Link> 
        </li>

        <li className="pb-6 md:text-[35px] text-[10px] text-white py-3 mx-4">
            <Link href={`${process.env.NEXT_PUBLIC_LOGIN_URL}`} className=" md:px-4 text-white text-[14px]  px-2 py-2 md:ml-4 hover:text-[#FFF] border rounded-[10px] border-white hover:bg-[#58786cff]"> 
                Sign In
            </Link>
        </li>
        
        <li className="pb-6 md:text-[35px] text-[10px] text-white py-3 mx-4">
            <Link href={`${process.env.NEXT_PUBLIC_LOGIN_URL}/register`} className="md:px-4 text-[#FFF] text-[14px] px-2 py-2 hover:text-[#FFF] border rounded-[10px] border-white hover:bg-[#58786cff]">
                Sign Up
            </Link>
        </li>
    </ul>
    )
}