import React from "react";
import CV from "../../assets/curriculo-augusto.pdf";

const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className="btn">
                Baixar o currículo
            </a>
            <a href="#contact" className="btn btn-primary">
                Envie uma mensagem
            </a>
        </div>
    );
};

export default CTA;
