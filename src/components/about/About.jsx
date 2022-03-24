import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id="about">
            <h5>Para saber mais</h5>
            <h2>Sobre mim</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experiência</h5>
                            <small>1 ano de trabalho</small>
                        </article>

                    {/* <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Clientes</h5>
                            <small>+10</small>
                        </article>*/}

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <small>20+ projetos completos</small>
                        </article>
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi architecto quasi suscipit velit officia rerum 
                        sed impedit minus mollitia libero aliquam aut cupiditate ipsam quis, minima sunt esse non dolorem. Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Quisquam distinctio alias cum dolore aliquid earum officiis consequuntur porro debitis illo quam 
                        dignissimos, animi ad ratione placeat esse optio officia ducimus.
                    </p>

                    <a href="#contact" className="btn btn-primary">Me envie uma mensagem</a>
                </div>
            </div>
        </section>
    );
};

export default About;
