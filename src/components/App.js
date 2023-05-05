import { Route, Routes } from "react-router-dom";
import Layaout from "./Layout/Layout";
import { Home } from "../pages/Home/Home";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layaout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
