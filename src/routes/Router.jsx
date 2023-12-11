import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

import Login from "../pages/Login";
import SingUp from "../pages/SingUp";
import GeneralRecipes from "../pages/GeralRecipes"
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import UserProvider from '../context/UserContext'

const Router = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Login/>,
        },
        {
            path: "/home",
            element: <Home/>,
        },
        {
            path: "/signup",
            element: <SingUp/>,
        },
        {
            path: '*',
            element: <NotFound/>,
        },
        {
            path: "/receitas",
            element: <GeneralRecipes/>,
        },
        {
            path: "/Try",
            element: <UserProvider/>,
        }
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default Router