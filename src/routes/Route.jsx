//Layouts
import MainLayout from "../layouts/MainLayout";

//Pages
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import BookingManagement from "../pages/Management/Bookings";
import UserManagement from "../pages/Management/User";
import ProfitStatistic from "../pages/Statistic/Profit"
import ReservationStatistic from "../pages/Statistic/Reservations";


const publicRoute = [
    { path: '/', page: Login, layout: null },
]

const privateRoute = [
    { path: 'dashboard', page: Dashboard, layout: MainLayout },
    { path: 'management/booking', page: BookingManagement, layout: MainLayout },
    { path: 'management/users', page: UserManagement, layout: MainLayout },
    { path: 'statistic/profit', page: ProfitStatistic, layout: MainLayout },
    { path: 'statistic/reservation', page: ReservationStatistic, layout: MainLayout },
]

export { publicRoute, privateRoute };