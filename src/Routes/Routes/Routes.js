import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import Course from "../../Pages/Course/Course";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import IndividualCourse from "../../Pages/IndividualCourse/IndividualCourse";
import Login from "../../Pages/Login/Login";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";
import PremiumAccess from "../../Pages/PremiumAccess/PremiumAccess";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/course',
                element: <Course></Course>,
                loader: () => fetch('https://knowledge-for-today-server.vercel.app/course')
            },
            {
                path: '/course/:id',
                element: <IndividualCourse></IndividualCourse>,
                loader: ({params}) => fetch(`https://knowledge-for-today-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/premium/:id',
                element: <PrivateRoute><PremiumAccess></PremiumAccess></PrivateRoute>,
                loader: ({params}) => fetch(`https://knowledge-for-today-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
])