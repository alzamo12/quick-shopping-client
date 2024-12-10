import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router";


const Navbar = () => {

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/myCart">My Cart</NavLink></li>
        <li><NavLink to="/feedback">Feedback</NavLink></li>
    </>
    return (
        <div className="navbar mt-2 px-10 bg-pink-500 text-white rounded-[32px]">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        Quick Sopping
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <h2 className=" btn btn-ghost text-3xl">Quick Shopping</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn border-none bg-gray-800 text-white clear-start ">Log in <CgProfile className="text-xl"></CgProfile></a>
            </div>
        </div>
    );
};

export default Navbar;