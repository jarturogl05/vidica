/**
 * General routes
 */

import { LazyExoticComponent } from 'react';
import { LoginScreen } from '../components/login/LoginScreen';
import { Roles } from '../models/roles';

type JSXElement = () => JSX.Element;

export interface RouteI {
    /**
     * Route's name
     */
    name: string;
    /**
     * Route's path
     */
    path: string;
    /**
     * Component to show in the route
     */
    Component: LazyExoticComponent<JSXElement> | JSXElement;
    /**
     * link to go of the route
     */
    to: string;
    /**
     * Indicate if the route required a logged-in user
     */
    loginRequired: boolean;
    /**
     * The allowed roles for the route
     */
    allowedRoles?: Roles[];
}

export const routes: RouteI[] = [
    {
        to: '/',
        path: '',
        name: 'Login',
        loginRequired: false,
        Component: LoginScreen,
    },
]