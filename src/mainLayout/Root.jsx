import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";


// App.js
import React, { useState } from 'react';
import './Root.css'; // Assuming you have your global styles defined in App.css

function Root() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <div className={isDarkMode ? 'dark' : 'light' }>
            
            <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode}></Navbar>
            <div><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
}





export default Root;