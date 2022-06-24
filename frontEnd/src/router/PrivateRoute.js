import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import NavBar from '../pages/shared/navBar';
import { isLogin, isRole } from '../utils';

const PrivateRoute = ({ role, }) => {

    const location = useLocation();

    return (
        (isLogin() && isRole(role)) ? (
            <>
                {location.pathname != '/login' && <NavBar />}
                <Outlet />
            </>
        ) : (
            <Navigate to="/login" />
        )
    );
};

export default PrivateRoute;