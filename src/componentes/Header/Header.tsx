import { HeaderContainer } from "./styles";
import Logo from "././../../assets/Logo.svg"
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <img src={Logo} alt="" />
            <nav>
                <NavLink to="/"><Timer size={24} /></NavLink>
                <NavLink to="/history"><Scroll size={24} /></NavLink>

            </nav>

        </HeaderContainer>
    )
}