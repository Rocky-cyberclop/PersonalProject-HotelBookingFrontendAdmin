//Layouts
import MainLayout from "../layouts/MainLayout";

//Pages
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import BookingManagement from "../pages/Management/Bookings";
import RoomManagement from "../pages/Management/Rooms";
import RoomTypeManagement from "../pages/Management/RoomTypes";
import ProfitStatistic from "../pages/Statistic/Profit"
import ReservationStatistic from "../pages/Statistic/Reservations";


const publicRoute = [
    { path: '/', page: Login, layout: null },
]

const privateRoute = [
    { path: 'dashboard', page: Dashboard, layout: MainLayout },
    { path: 'management/booking', page: BookingManagement, layout: MainLayout },
    { path: 'management/rooms', page: RoomManagement, layout: MainLayout },
    { path: 'management/roomTypes', page: RoomTypeManagement, layout: MainLayout },
    { path: 'statistic/profit', page: ProfitStatistic, layout: MainLayout },
    { path: 'statistic/reservation', page: ReservationStatistic, layout: MainLayout },
]

export { publicRoute, privateRoute };