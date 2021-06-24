import React from "react";
import Header from "../header";
import {Route} from "react-router-dom";

const CustomRoute = ({component: Component, ...rest}) => (
    <>
        <Header/>
        <Route {...rest} component={(props) => {
            return <Component {...props}/>
        }
        }/>
    </>
)
export default CustomRoute;
