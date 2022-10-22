import { Suspense, useContext } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"
import { routes } from "./routes"
import { AuthContext } from "../context/AuthContext";

export const Navigation = () => {
    const authContext = useContext(AuthContext);

    return (
        <>
            <Suspense fallback={<span>Cargando...</span>}>
                <BrowserRouter>
                    <Routes>
                        {
                            routes.map(({path, allowedRoles, loginRequired, Component}) => {
                                return loginRequired
                                    ? (<Route key={path} path={path} element={<PrivateRoute allowedRoles={allowedRoles ?? []}
                                                                                            isAuthenticated={!!authContext?.user}
                                                                                            Component={Component}
                                                                                            userRole={authContext?.userRole ?? null}/>}/>)
                                    : (<Route key={path} path={path}
                                              element={<PublicRoute Component={Component} isAuthenticated={!!authContext?.user}/>}/>)
                            })
                        }
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    )
}


