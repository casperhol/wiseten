import { LayoutProps } from "@/hooks/types"
import Footer from "./footer";
import Preloader from "./Preloader";
import Navbar from "./navbar";

export default function GuestLayout({children}:LayoutProps){
    return(
        <section className="overflow-hidden">
            <div className="parent max-w-[100%] h-[10vh] md:h-[12vh] top-0 right-0 left-0 relative bg-[#003220]">
                <Navbar/>
            </div>
            <Preloader>{children}</Preloader>
            <Footer/>
        </section>  
    )
    
}
