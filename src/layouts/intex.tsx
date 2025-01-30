import { Outlet } from "react-router-dom";
import { Header } from "../componentes/Header/Header";
import { LayoutContainer } from "../layouts/DefaultLayout/styles";

export function Defaultlayout () {
    return (
        <LayoutContainer>
            <Header />
            <Outlet />
        </LayoutContainer>
    )
}