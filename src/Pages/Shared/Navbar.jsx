import { CgProfile } from "react-icons/cg";
import { Link, NavLink, useLocation } from "react-router";


const Navbar = ({ handleToggle, color }) => {

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/myCart">My Cart</NavLink></li>
        <li><NavLink to="/feedback">Feedback</NavLink></li>
    </>;

    const location = useLocation();
    console.log(location.pathname)

    const login = ' className="btn border-none bg-gray-800 text-white clear-start ';

    const navbar = 'navbar active px-10 mt-2  rounded-2xl';

    return (
        <div className={color ? 'bg-black navbar navbarNew border-white border-[1px]' : 'bg-pink-500 navbar navbarNew'}>
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
                <button onClick={() => handleToggle(!color)}>
                    <input type="checkbox" className="toggle" defaultChecked />
                </button>
                <Link to="/login" className="btn bg-black text-white border-none mr-5" >Log in <CgProfile className="text-xl"></CgProfile></Link>

            </div>
        </div>
    );
};

export default Navbar;