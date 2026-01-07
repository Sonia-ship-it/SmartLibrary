import {createBrowserRouter} from "react-router-dom"
import App  from "../App"
import { Home } from "../pages/home/Home";
import { Login } from "../components/login";
import { Register } from "../components/Register"
import { CartPage } from "../pages/books/cartPage";
import { CheckOut } from "../pages/books/checkOut";
import { SingleBook } from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                 path: "/",
                 element: <Home/>,
            },
               {
                 path: "/checkout",
                 element: <PrivateRoute><CheckOut /></PrivateRoute> ,
            },
               {
                 path: "/cart",
                 element: <CartPage />,
            },
            {
                path: "/login",
                element: <Login />,
            },
             {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/books/:id",
                element: < SingleBook/>
            }
        ]
    },
]);
export default router;