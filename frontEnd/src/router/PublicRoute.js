import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import NavBar from '../pages/shared/navBar';
import { getHome, isLogin } from '../utils';

const PublicRoute = ({ restricted, }) => {

    const location = useLocation();

    return (
        (isLogin() && restricted) ? (
            <Navigate to={getHome()} />
        ) : (
            <>
                {location.pathname != '/login' && <NavBar />}
                <Outlet />
            </>
        )
    );
};

export default PublicRoute;