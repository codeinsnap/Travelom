// ** Router imports
import {useRoutes } from "react-router-dom"
import Routes from "./RoutingConstants"

const Router = () => {
    const routes = useRoutes([...Routes])
    return routes
}

export default Router