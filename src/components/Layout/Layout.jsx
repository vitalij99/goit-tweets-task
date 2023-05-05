import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import style from "./layaout.module.css";
import { Loader } from "../Loader/Loader";

const Layaout = () => {
    return (
        <>
            <AppBar />
            <main>
                <section className={style.section}>
                    <div className={style.container}>
                        <Suspense fallback={<Loader />}>
                            <Outlet />
                        </Suspense>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Layaout;
