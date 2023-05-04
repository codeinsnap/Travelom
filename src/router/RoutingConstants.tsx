import React, { lazy } from 'react'

const Home = lazy(() => import("../pages/Home"))
const Contact = lazy(() => import("../pages/Contact"))
const SingleHotel = lazy(() => import("../pages/HotelDetails"))
const About = lazy(() => import("../pages/About"))


const Routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/hotel-details",
        element: <SingleHotel />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/about",
        element: <About />,
    }
]


export default Routes