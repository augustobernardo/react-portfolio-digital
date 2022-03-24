import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Olá, eu sou o</h5>
                <h1>Augusto Bernardo</h1>
                <h5 className="text-light">Desenvolvedor</h5>
                <CTA />
                <HeaderSocial />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className="scroll_down">
                    Rolar para baixo
                </a>
            </div>
        </header>
    );
};

export default Header;
