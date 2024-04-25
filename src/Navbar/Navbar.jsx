import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import './NavStyle.css'
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {


    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    const navLinks = <>
        <NavLink className={'px-5 py-3 rounded-full  font-medium'} to="/">Home</NavLink>
        <NavLink className={'px-5 py-3 rounded-full  font-medium'} to="/allCraftItems">All Art & craft Items</NavLink>
        <NavLink className={'px-5 py-3 rounded-full  font-medium'} to="/addCraftItem">Add Craft Item</NavLink>
        <NavLink className={'px-5 py-3 rounded-full  font-medium'} to="/myCraftList">My Art & Craft List</NavLink>
      
    </>
    return (
        <div>
            <div className="navbar bg-nav py-2 px-2 shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <div tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 ">

                            {navLinks}


                        </div>
                    </div>
                    <Link to={"/"}><div className="flex gap-3 lg:text-2xl text-md rounded-xl md:p-2 items-center font-bold "><img className="w-5 h-5 lg:w-10 lg:h-10 shadow-lg rounded-md" src="/assets/images/fav.png" alt="" />
                        CurioMinds</div></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="menu menu-horizontal px-1 gap-2 text-md font-medium  bg-transparent">

                        {navLinks}

                    </div>
                </div>
                <div className="navbar-end pr-3">
                    {
                        user ?
                            <div className="flex gap-4 items-center justify-center ">
                                <Link to={"/updateProfile"} className="w-7 h-7 rounded-full tooltip" data-tip={user.displayName}>
                                    <img alt="" className=" rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100" src={user.photoURL || "assets/images/icon.png"} />
                                </Link>
                                <div>
                                    <button onClick={handleSignOut} className=" px-5 py-2 rounded-full  bg-[#0632c3] hover:bg-[#57f0f0]  font-semibold hover:text-black ">Log Out</button>
                                </div>
                            </div>
                            :
                        <div><Link className={'px-5 py-3 rounded-full  font-medium'} to="/register" >Register</Link>
                            <Link className={'px-5 py-3 rounded-full  font-medium'} to="/login" >Login</Link></div>
                    }
                </div>
            </div>

        </div>
    );
};

export default Navbar;

