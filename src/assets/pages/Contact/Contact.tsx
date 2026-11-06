import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import './Contact.scss';

function Contact() {
    return (
        <section className="contact">
            <div className="contact__content">
                <span className="contact__eyebrow">CONTATO / 2026</span>

                <div className="contact__main">
                    <p className="contact__overline">
                        TEM UM PROJETO EM MENTE?
                    </p>

                    <h1>
                        Gostou do meu
                        <br />
                        <span>trabalho?</span>
                        <br />
                        Vamos conversar.
                    </h1>

                    <p className="contact__description">
                        Se você gostou do meu trabalho e está procurando alguém
                        para registrar suas ideias, momentos ou projetos,
                        será um prazer conversar com você.
                    </p>

                    <div className="contact__options">
                        <a
                            className="contact__option"
                            href="https://wa.me/555492596226"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="contact__option-icon">
                                <MessageCircle size={22} strokeWidth={1.5} />
                            </div>

                            <div className="contact__option-info">
                                <span>FALE COMIGO PELO</span>
                                <strong>WhatsApp</strong>
                                <small>+55 54 9259-6226</small>
                            </div>

                            <ArrowUpRight
                                className="contact__option-arrow"
                                size={22}
                                strokeWidth={1.5}
                            />
                        </a>

                        <a
                            className="contact__option"
                            href="https://instagram.com/tmwthv"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="contact__option-icon">
                                <FaInstagram size={22} />
                            </div>

                            <div className="contact__option-info">
                                <span>ME ACOMPANHE NO</span>
                                <strong>Instagram</strong>
                                <small>@tmwthv</small>
                            </div>

                            <ArrowUpRight
                                className="contact__option-arrow"
                                size={22}
                                strokeWidth={1.5}
                            />
                        </a>
                    </div>
                </div>

                <footer className="contact__footer">
                    <span>VAMOS CRIAR ALGO JUNTOS?</span>
                    <span>LOUIZI. © 2026</span>
                </footer>
            </div>
        </section>
    );
}

export default Contact;
