import { Outlet } from "react-router-dom";
import { Header } from "../componentes/Header/Header";

export function Defaultlayout () {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}