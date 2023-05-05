import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import style from "./AppBar.module.scss";

const AppBar = () => {
    const location = useLocation();

    return (
        <header className={style.header}>
            <nav>
                <NavLink
                    to={location.pathname === "/tweets" ? "/" : "tweets"}
                    className={style.link}
                >
                    {location.pathname === "/tweets" ? "Back" : "Tweets"}
                </NavLink>
            </nav>
        </header>
    );
};

export default AppBar;
