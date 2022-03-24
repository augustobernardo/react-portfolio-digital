import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
    return (
        <section id="services">
            <h5>O que estou qualificado a fazer</h5>
            <h2>Qualificações</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__header">
                        <h3>Desenvolvimento Web</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Frontend</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Backend</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Desenvolvimento Web com React</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Desenvolvimento com Bootstrap</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Criação de páginas Web one page com o React / Bootstrap</p>
                        </li>
                    </ul>
                </article>
                
                {/* Final do Desenvolvimento Web */}
                <article className="service">
                    <div className="service__header">
                        <h3>Dev. Mobile / Dev. Python</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Desenvolvimento com React Native</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Criação de aplicações Mobile one page</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Criação de programas em Python</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Programador Python Júnior</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default Services;
