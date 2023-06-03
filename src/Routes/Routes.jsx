import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../home/Home";
import Menu from "../home/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUlp/SignUp";
import Secret from "../Pages/Secret/Secret";
import PrivateRouter from "../Pages/PrivateRouter/PrivateRouter";
import DashBoard from "../LayOut/DashBoard/DashBoard";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";
import AllUsers from "../Pages/DashBoard/Allusers/AllUsers";
import AddItem from "../Pages/DashBoard/additem/AddItem";
import PrivateAdmin from "../Pages/PrivateRouter/PrivateAdmin";
import ManageItems from "../Pages/DashBoard/ManageItems/ManageItems";
import Payment from "../Pages/DashBoard/Payment/Payment";
import AdminHome from "../Pages/DashBoard/Admin/AdminHome";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/menu',
                element:<Menu></Menu>
            },
            {
                path:'/order/:category',
                element:<Order></Order>,
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/secret',
                element:<PrivateRouter><Secret></Secret></PrivateRouter>
            }
        ]
    },
    {
        path:'dashboard',
        element:<PrivateRouter><DashBoard></DashBoard></PrivateRouter>,
        children:[
            {
                path:'userHome',
                element:<UserHome></UserHome>
            },
            {
                path:'myCart',
                element:<MyCart></MyCart>
            },

            {
                path:'payment',
                element:<Payment></Payment>
            },

            // admin user
            {
                path:'adminHome',
                element:<PrivateAdmin><AdminHome></AdminHome></PrivateAdmin>
            },
            {
                path:'allUsers',
                element:<PrivateAdmin><AllUsers></AllUsers></PrivateAdmin>
            },
            {
                path:'addItem',
                element:<PrivateAdmin><AddItem></AddItem></PrivateAdmin>
            },
            {
                path:'manageitems',
                element:<PrivateAdmin><ManageItems></ManageItems></PrivateAdmin>
            }
        ]
    }
])

export default router