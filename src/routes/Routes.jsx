import { createBrowserRouter } from "react-router-dom";
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
import UpdateCraftDetails from "../components/UpdateCraftDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage />,

        children: [

            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://art-craft-store-server-delta.vercel.app/homeCrafts')

            },
          

            {
                path: '/updateProfile',
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path: '/allCraftItems',
                element: <AllCraftitems></AllCraftitems>,
                loader: () => fetch('https://art-craft-store-server-delta.vercel.app/artCrafts')
            },
            {
                path: '/CraftCardDetails/:id',
                element: <PrivateRoute><CraftCardDetails></CraftCardDetails></PrivateRoute>,
                loader: () => fetch('https://art-craft-store-server-delta.vercel.app/artCrafts')
            },
            {
                path: '/CraftHomeCardDetails/:id',
                element: <PrivateRoute><CraftCardDetails></CraftCardDetails></PrivateRoute>,
                loader:()=>fetch('https://art-craft-store-server-delta.vercel.app/homeCrafts')
            },


            {
                path: '/addCraftItem',
                element: <PrivateRoute><AddCraftitem></AddCraftitem></PrivateRoute>
            },


            {
                path: '/myCraftList',
                element: <PrivateRoute><MyCraftList></MyCraftList></PrivateRoute>,
                loader: () => fetch('https://art-craft-store-server-delta.vercel.app/artCrafts')

            },
            {
                path: '/updateCraftDetails/:id',
                element: <PrivateRoute><UpdateCraftDetails></UpdateCraftDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://art-craft-store-server-delta.vercel.app/artCrafts/${params.id}`)

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