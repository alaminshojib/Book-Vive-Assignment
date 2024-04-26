
import { createBrowserRouter, useParams } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Root from "../mainLayout/Root";
import Home from "../pages/Home/Home";
import UpdateProfile from "../pages/Update_Profile/UpdateProfile";
import ErrorPage from "../components/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AllCraftitems from "../pages/allCraftItems/AllCraftitems";
import MyCraftList from "../pages/myCraftList/MyCraftList";
import AddCraftitem from "../pages/addCraftItem/AddCraftitem";
import CraftCardDetails from "../components/CraftCardDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage />,

        children: [
            {
                path: '/',
                element: <Home></Home>
            },
           
            {
                path: '/updateProfile',
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path: '/allCraftItems',
                element: <AllCraftitems></AllCraftitems>,
                loader: () => fetch('http://localhost:5000/coffee')
            },
            {
                path: '/CraftCardDetails/:id',
                element: <CraftCardDetails></CraftCardDetails>,
                loader: () => fetch('http://localhost:5000/coffee')
            },

            
            {
                path: '/addCraftItem',
                element: <AddCraftitem></AddCraftitem>
            },

            
            {
                path: '/myCraftList',
                element: <MyCraftList></MyCraftList>
            },

            


            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }

]);

export default router;