import { Outlet, useLocation } from "react-router";
import Navbar from "../Pages/Shared/Navbar";
import { useState } from "react";

const Main = () => {

  const [color, setColor] = useState(false)
  // const location = useLocation();

  const handleToggle = (newColor) => {
    if (newColor) {
      // document.getElementById('main').classList.add('bg-black')
      setColor(newColor)
    }
    else {
      // document.getElementById('main').classList.add('bg-white')
      setColor(newColor)
    }
  }

  return (
    <div id="main" className={color ? ' bg-black' : ' bg-white'}>
      <div className="mx-52 pt-5">
        <Navbar handleToggle={handleToggle} color={color}></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;