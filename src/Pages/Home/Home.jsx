import { useLocation } from "react-router";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import Products from "./Products";

const Home = () => {

    const location = useLocation();

    if(location.pathname === '/login'){
        document.getElementById('root').classList.add('bg-indigo-500')
    }

    return (
        <div className=" ">
          
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;