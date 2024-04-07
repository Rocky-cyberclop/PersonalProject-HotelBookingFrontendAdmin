import { Navigate, useLocation } from 'react-router-dom';

function PrivateRouter({ children }) {

    const isHasToken = localStorage.getItem('admin');

    const location = useLocation();
    if (!isHasToken) {
        return (
            <Navigate
                to="/"
                state={{ from: location }}
            />
        );
    }

    return children;
}

export default PrivateRouter;