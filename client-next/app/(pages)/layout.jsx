import { Toaster } from "react-hot-toast";


const PageLayout = ({ children }) => {
    return ( 
        <div>
            <main>
                <Toaster />
                
                {children}

            </main>
        </div>


     );
}
 
export default PageLayout;