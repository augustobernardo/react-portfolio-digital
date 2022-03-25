import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id="qualifications">
            <h5>Quais habilidades eu tenho</h5>
            <h2>Minhas habilidades</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Desenvolvimento Frontend</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experiente</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Intermediário</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>JavaSacript</h4>
                                <small className="text-light">Intermediário</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Intermediário</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>React Native</h4>
                                <small className="text-light">Intermediário</small>
                            </div>
                        </article>
                    </div>
                </div>

                {/* Final do frontend*/}

                <div className="experince__backend">
                <h3>Desenvolvimento Backend</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Python</h4>
                                <small className="text-light">Experiente</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Node JS</h4>
                                <small className="text-light">Básico</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>MongoDB</h4>
                                <small className="text-light">Básico</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>                            
                                <h4>MySQL</h4>
                                <small className="text-light">Básico</small>
                            </div>
                        </article>
                    </div>
                </div>

                {/* Final backend */}

            </div>
        </section>
    );
};

export default Experience;
