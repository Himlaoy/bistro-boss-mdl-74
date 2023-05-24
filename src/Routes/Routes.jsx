import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../home/Home";
import Menu from "../home/Menu/Menu";
import Order from "../Pages/Order/Order";

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
            }
        ]
    }
])

export default router