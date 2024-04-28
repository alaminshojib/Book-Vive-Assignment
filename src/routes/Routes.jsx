import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Root from "../mainLayout/Root";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home/Home";
import UpdateProfile from "../pages/Update_Profile/UpdateProfile";
import AllCraftitems from "../pages/allCraftItems/AllCraftitems";
import MyCraftList from "../pages/myCraftList/MyCraftList";
import AddCraftitem from "../pages/addCraftItem/AddCraftitem";
import CraftCardDetails from "../components/CraftCardDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UpdateCraftDetails from "../components/UpdateCraftDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home />, loader: () => fetchCrafts("home") },
      { path: "/updateProfile", element: <PrivateRoute><UpdateProfile /></PrivateRoute> },
      { path: "/allCraftItems", element: <AllCraftitems />, loader: () => fetchCrafts("art") },
      { path: "/CraftCardDetails/:id", element: <PrivateRoute><CraftCardDetails /></PrivateRoute>, loader: ({ params }) => fetchCraftDetails("art", params.id) },
      { path: "/CraftHomeCardDetails/:id", element: <PrivateRoute><CraftCardDetails /></PrivateRoute>, loader: ({ params }) => fetchCraftDetails("home", params.id) },
      { path: "/addCraftItem", element: <PrivateRoute><AddCraftitem /></PrivateRoute> },
      { path: "/myCraftList", element: <PrivateRoute><MyCraftList /></PrivateRoute>, loader: () => fetchCrafts("art") },
      { path: "/updateCraftDetails/:id", element: <PrivateRoute><UpdateCraftDetails /></PrivateRoute>, loader: ({ params }) => fetchCraftDetails("art", params.id) },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

const fetchCrafts = async (type) => {
  const response = await fetch(`https://art-craft-store-server-delta.vercel.app/${type}Crafts`);
  return response.json();
};

const fetchCraftDetails = async (type, id) => {
  const response = await fetch(`https://art-craft-store-server-delta.vercel.app/${type}Crafts/${id}`);
  return response.json();
};

export default router;
