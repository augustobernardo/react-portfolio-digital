import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_x51r0sc", "template_d0ox7yl", form.current, "9pSsp5ul2JvoaOKoK")
            .then(
                (result) => {
                    console.log(result.text);
                    },
                (error) => {
                    console.log(error.text);
                }
            );

        e.target.reset()
    };

    return (
        <section id="contact">
            <h5>Para entrar em contato</h5>
            <h2>Contato</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>gutooliveira027@gmail.com</h5>
                        <a href="mailto:gutooliveira027@gmail.com" target="_blank">
                            Enviar Mensagem
                        </a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>(27) 99873-5801</h5>
                        <a href="https://api.whatsapp.com/send?phone=5527998735801" target="_blank">
                            Enviar Mensagem
                        </a>
                    </article>
                </div>
                {/* FINAL DAS OPÇÕES DE CONTATO */}
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"name="name"placeholder="Digite o seu nome e sobrenome"required/>
                    <input
                        type="email" name="email" placeholder="Digite o seu email" required/>
                    <textarea name="message" rows="7" placeholder="Digite a mensagem que deseja enviar" required></textarea>
                    <button id="sendBtn" type="submit" className="btn btn-primary">
                        Enviar Mensagem
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
