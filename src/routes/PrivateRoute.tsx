/**
 * Private route component
 *  Only render the component if the user is logged in and their role is allowed by the route
 *  Or redirect to log in if not is allowed
 */
import { LazyExoticComponent } from 'react';
import { Navigate } from 'react-router-dom';
import { Roles } from '../models/roles';

type JSXElement = () => JSX.Element;

interface PrivateRouteI {
    isAuthenticated: boolean;
    userRole: Roles | null;
    Component: LazyExoticComponent<JSXElement> | JSXElement;
    allowedRoles: Roles[];
}

export const PrivateRoute = ({Component, isAuthenticated, allowedRoles, userRole}: PrivateRouteI) => {

    const isValidRole = !!((userRole !== null && allowedRoles.includes(userRole)) || allowedRoles.includes(Roles.ALL));

    return (
        <>
            {
                !isAuthenticated
                    ? (<Navigate to="/"/>)
                    : isValidRole
                        ? (<Component/>)
                        : (<Navigate to="/home"/>)
            }
        </>
    )
}