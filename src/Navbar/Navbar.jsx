import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import './NavStyle.css'
import { AuthContext } from "../providers/AuthProvider";
import { FiSun, FiMoon } from 'react-icons/fi';
import Swal from "sweetalert2";

const Navbar = ({ isDarkMode, toggleTheme }) => {


    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = async () => {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: "To gain full access, you need to log in again!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Log Out!'
            });

            if (result.isConfirmed) {
                logOut()


                if (!response.ok) {
                    throw new Error('Failed to delete craft item');
                }

                const data = await response.json();
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your craft item has been deleted.',
                        'success'
                    );

                }
            }
        } catch (error) {
            console.error('Error deleting craft item:', error);

        } finally {
            window.location.reload()
        }
    };


    const navLinks = <>
        <NavLink className={'px-4 py-2 rounded-full font-medium'} to="/">Home</NavLink>
        <NavLink className={'px-4 py-2 rounded-full font-medium'} to="/allCraftItems">All Art & craft Items</NavLink>
        <NavLink className={'px-4 py-2 rounded-full font-medium'} to="/addCraftItem">Add Craft Item</NavLink>
        <NavLink className={'px-4 py-2 rounded-full font-medium'} to="/myCraftList">My Art & Craft List</NavLink>

    </>
    return (
        <div>
            <div className="navbar bg-nav py-3 px-3 shadow-lg ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <div tabIndex={0} className="flex menu menu-sm dropdown-content mt-3 z-[3] p-2 shadow bg-slate-200  rounded-box w-52 ">
                            <NavLink className={'px-4 py-2 rounded-full text-gray-900 font-medium'} to="/">Home</NavLink>
                            <NavLink className={'px-4 py-2 rounded-full text-gray-900 font-medium'} to="/allCraftItems">All Art & craft Items</NavLink>
                            <NavLink className={'px-4 py-2 rounded-full text-gray-900 font-medium'} to="/addCraftItem">Add Craft Item</NavLink>
                            <NavLink className={'px-4 py-2 rounded-full text-gray-900 font-medium'} to="/myCraftList">My Art & Craft List</NavLink>
                            {
                                user && user ?
                                    <Link onClick={handleSignOut} className=" px-4 py-2 mt-1 rounded-full  font-medium text-gray-900">Log Out</Link>

                                    :
                                    <Link className="px-4 py-2 rounded-full mt-1  font-medium text-gray-900" to="/login" >Login</Link>
                            }

                             <div className="container justify-end px-4 mt-1">
                                <p className=" py-2 rounded-full  font-medium text-gray-900">Change Theme :</p>
                    <label className="switch">
                        <input type="checkbox" onChange={toggleTheme} checked={isDarkMode} className="toggle-checkbox" />
                        <span className="toggle-slider"></span>
                        <span className="toggle-icon">{isDarkMode ? <FiMoon /> : <FiSun />}</span>
                    </label>
                </div>


                        </div>
                    </div>
                    <Link to={"/"}><div className="flex gap-3 lg:text-2xl text-md rounded-xl md:p-2 items-center font-bold "><img className="w-5 h-5 lg:w-10 lg:h-10  shadow-lg rounded-md" src="/assets/arts.jpg" alt="" />
                        C͡r͡a͡ƒ͡t͡i͡q͡u͡e </div></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className=" menu menu-horizontal px-1 gap-2 text-md font-medium  bg-transparent">

                        {navLinks}


                    </div>
                </div>



                <div className="container justify-end w-fit ml-2 hidden lg:block">
                    <label className="switch">
                        <input type="checkbox" onChange={toggleTheme} checked={isDarkMode} className="toggle-checkbox" />
                        <span className="toggle-slider"></span>
                        <span className="toggle-icon">{isDarkMode ? <FiMoon /> : <FiSun />}</span>
                    </label>
                </div>

                <div className="navbar-end md:pr-3">

                    {
                        user && user ?
                            <div className="flex gap-4 items-center justify-center">

                                <Link to={"/updateProfile"} className="w-7 h-7 rounded-full tooltip" data-tip={user.displayName}>
                                    <img alt="" className=" rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100 w-full h-full" src={user.photoURL} />
                                </Link>
                                <div>
                                    <button onClick={handleSignOut} className="hidden md:block text-white px-5 py-2 rounded-full  bg-[#0632c3] hover:bg-[#57f0f0]  font-semibold hover:text-black ">Log Out</button>
                                </div>
                            </div>
                            :
                            <div className="space-x-2 flex justify-center items-center"><NavLink className=' px-5 py-2 mr-1 font-semibold rounded-full bg-cyan-500 ' to="/register" >Register</NavLink>
                                <NavLink className='hidden md:block px-5 py-2 rounded-full bg-green-500 font-semibold' to="/login" >Login</NavLink></div>
                    }
                </div>
            </div>


        </div>
    );
};




export default Navbar;

