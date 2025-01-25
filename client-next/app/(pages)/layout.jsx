import { Toaster } from "react-hot-toast";
import Navbar from "./_components/Navbar";
import MobileNavbar from "./_components/MobileNavbar";
import LandingInfo from "./_components/LandingInfo";
import Footer from "./_components/Footer";

const PageLayout = ({ children }) => {
    return ( 
        <div>
            <main>
                <Toaster />
                <Navbar />
                <MobileNavbar />
                {children}
                <LandingInfo />
                <Footer />
            </main>
        </div>
     );
}
 
export default PageLayout;