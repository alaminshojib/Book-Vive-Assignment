import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import './NavStyle.css'
import { AuthContext } from "../providers/AuthProvider";
import { FiSun, FiMoon } from 'react-icons/fi';

const Navbar = ({ isDarkMode, toggleTheme }) => {


    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    const navLinks = <>
        <NavLink className={'px-4 py-2 rounded-full  font-medium'} to="/">Home</NavLink>
        <NavLink className={'px-4 py-2 rounded-full  font-medium'} to="/allCraftItems">All Art & craft Items</NavLink>
        <NavLink className={'px-4 py-2 rounded-full  font-medium'} to="/addCraftItem">Add Craft Item</NavLink>
        <NavLink className={'px-4 py-2 rounded-full  font-medium'} to="/myCraftList">My Art & Craft List</NavLink>

    </>
    return (
        <div>
            <div className="navbar bg-nav py-2 px-2 shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <div tabIndex={0} className="flex menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 ">

                            {navLinks}



                        </div>
                    </div>
                    <Link to={"/"}><div className="flex gap-3 lg:text-2xl text-md rounded-xl md:p-2 items-center font-bold "><img className="w-5 h-5 lg:w-10 lg:h-10 shadow-lg rounded-md" src="/assets/arts.jpg" alt="" />
                        C͡r͡a͡ƒ͡t͡i͡q͡u͡e </div></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className=" menu menu-horizontal px-1 gap-2 text-md font-medium  bg-transparent">

                        {navLinks}


                    </div>
                </div>



                <div className="container justify-end border w-fit ml-2">
                    <label className="switch">
                        <input type="checkbox" onChange={toggleTheme} checked={isDarkMode} className="toggle-checkbox" />
                        <span className="toggle-slider"></span>
                        <span className="toggle-icon">{isDarkMode ? <FiMoon /> : <FiSun />}</span>
                    </label>
                </div>

                <div className="navbar-end pr-3">

                    {
                        user && user ?
                            <div className="flex gap-4 items-center justify-center ">

                                <Link to={"/updateProfile"} className="w-7 h-7 rounded-full tooltip" data-tip={user.displayName}>
                                    <img alt="" className=" rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100" src={user.photoURL} />
                                </Link>
                                <div>
                                    <button onClick={handleSignOut} className=" px-5 py-2 rounded-full  bg-[#0632c3] hover:bg-[#57f0f0]  font-semibold hover:text-black ">Log Out</button>
                                </div>
                            </div>
                            :
                            <div className="space-x-2"><NavLink className={'px-5 py-3 rounded-full bg-cyan-500 font-medium'} to="/register" >Register</NavLink>
                                <NavLink className={'px-5 py-3 rounded-full bg-green-500 font-medium'} to="/login" >Login</NavLink></div>
                    }
                </div>
            </div>


        </div>
    );
};


// Custom MoonIcon component
const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-current text-gray-300">
        <path d="M12 2c-5.522 0-10 4.478-10 10s4.478 10 10 10 10-4.478 10-10-4.478-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
    </svg>
);

// Custom SunIcon component
const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-current text-yellow-500">
        <path d="M12 7c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 8c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zM12 2v2" /><path d="M12 20v2" /><path d="M4.929 4.929l1.414 1.414" /><path d="M18.657 18.657l1.414 1.414" /><path d="M2 12h2" /><path d="M18 12h2" /><path d="M4.929 19.071l1.414-1.414" /><path d="M18.657 5.343l1.414-1.414" /><path d="M20 12h2" /><path d="M2 12h2" /><path d="M7.071 4.929l1.414 1.414" /><path d="M21.657 18.657l1.414 1.414" /><path d="M5.343 18.657l-1.414 1.414" /><path d="M19.071 4.929l-1.414 1.414" />
    </svg>
);

export default Navbar;

