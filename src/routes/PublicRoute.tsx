/**
 * Public route component
 *  Only render the component if the user is not logged in
 *  Or redirect to home screen if the user is login
 */
import { LazyExoticComponent } from 'react';
import { Navigate } from 'react-router-dom';

type JSXElement = () => JSX.Element;

interface PublicRouteI {
    isAuthenticated: boolean;
    Component: LazyExoticComponent<JSXElement> | JSXElement;
}

export const PublicRoute = ({Component, isAuthenticated}: PublicRouteI) => {
    return (
        <>
            {
                !isAuthenticated
                    ? (<Component/>)
                    : (<Navigate to="/home"/>)
            }
        </>
    )
}