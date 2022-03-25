import React from "react";
import "./footer.css";
import { BsGithub, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <footer id="footer">
            <a href="#" className="footer__logo">
                AUGUSTO
            </a>

            <ul className="permalinks">
                <li> <a href="#">Home</a> </li>
                <li> <a href="#about">Sobre</a> </li>
                <li> <a href="#habilities">Experiência</a> </li>
                <li> <a href="#qualifications">Qualificações</a> </li>
                <li> <a href="#portfolio">Portfolio</a> </li>
                <li> <a href="#contact">Contato</a> </li>
            </ul>

            <div className="footer__socials">
                <a href="https://github.com/augustobernardo">
                    <BsInstagram />
                </a>
                <a href="https://www.instagram.com/guto_ooliveira/">
                    <BsGithub />
                </a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Augusto Bernardo. Todos os direitos reservados</small>
            </div>
        </footer>
    );
};

export default Footer;
