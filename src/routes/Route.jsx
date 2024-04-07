//Layouts
import MainLayout from "../layouts/MainLayout";

//Pages
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Management from '../pages/Management'
import Statistic from '../pages/Statistic'


const publicRoute = [
    { path: '/', page: Login, layout: null },
]

const privateRoute = [
    { path: '/dashboard', page: Dashboard, layout: MainLayout },
    { path: '/management', page: Management, layout: MainLayout },
    { path: '/statistic', page: Statistic, layout: MainLayout },
]

export { publicRoute, privateRoute };