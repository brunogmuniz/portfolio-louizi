
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import './About.scss';

import foto1 from '../../images/about/1.jpeg';
import foto2 from '../../images/about/2.jpeg';
import foto3 from '../../images/about/3.jpeg';
import foto4 from '../../images/about/4.jpeg';
import foto6 from '../../images/about/6.jpeg';
import foto7 from '../../images/about/7.jpeg';
import foto8 from '../../images/about/8.jpeg';

const fotos = [
    {
        src: foto1,
        alt: 'Retrato pessoal de Louizi',
        className: 'about__photo--main',
    },
    {
        src: foto2,
        alt: 'Registro pessoal de Louizi',
        className: 'about__photo--small about__photo--face',
    },
    {
        src: foto3,
        alt: 'Experiência artística e expressão',
        className: 'about__photo--tall',
    },
    {
        src: foto4,
        alt: 'Momento da trajetória de Louizi',
        className: 'about__photo--wide',
    },
    {
        src: foto6,
        alt: 'Expressão corporal e movimento',
        className: 'about__photo--portrait',
    },
    {
        src: foto7,
        alt: 'Vivência artística de Louizi',
        className: 'about__photo--detail',
    },
    {
        src: foto8,
        alt: 'Retrato de encerramento',
        className: 'about__photo--last',
    },
];

export function About() {
    return (
        <main className="about">
            <motion.header
                className="about__header"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <span className="about__eyebrow">UM POUCO SOBRE MIM</span>

                <h1>
                    Arte, movimento
                    <br />
                    <span>e percepção.</span>
                </h1>

                <div className="about__intro">
                    <p>
                        Entre imagens, movimentos e experiências, construo minha trajetória
                        através da arte e das diferentes possibilidades de expressão.
                    </p>
                    <span>ARTISTA · FOTÓGRAFA · GRADUANDA EM ARTES VISUAIS</span>
                </div>
            </motion.header>

            <section className="about__gallery" aria-label="Fotografias pessoais">
                {fotos.map((foto, index) => (
                    <motion.figure
                        key={foto.src}
                        className={`about__photo ${foto.className}`}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                            duration: 0.65,
                            delay: (index % 2) * 0.08,
                        }}
                    >
                        <img
                            src={foto.src}
                            alt={foto.alt}
                            loading={index < 2 ? 'eager' : 'lazy'}
                        />
                        <figcaption>
                            {String(index + 1).padStart(2, '0')} / 07
                        </figcaption>
                    </motion.figure>
                ))}
            </section>

            <section className="about__story">
                <div className="about__story-heading">
                    <span className="about__eyebrow">MINHA TRAJETÓRIA</span>
                    <h2>Um caminho feito de experiências.</h2>
                </div>

                <div className="about__story-content">
                    <p>
                        Artista e graduanda em Artes Visuais, construo minha trajetória a
                        partir do contato com diferentes formas de expressão artística, da
                        experimentação e da busca por novas possibilidades de criação. Meu
                        interesse pela arte está relacionado à maneira como as imagens, os
                        movimentos e as experiências cotidianas podem comunicar ideias,
                        despertar sensações e construir narrativas.
                    </p>

                    <p>
                        Minha trajetória profissional teve início aos 17 anos, quando
                        comecei a atuar como professora de dança. Desde então, o contato
                        com o corpo, o movimento, a expressão e a criação coletiva passou
                        a integrar minha formação artística e pessoal. A experiência com a
                        dança proporcionou o desenvolvimento de um olhar atento à
                        gestualidade, à presença, à composição e às diferentes formas de
                        comunicação que ultrapassam a palavra. O trabalho como educadora
                        também contribuiu para o desenvolvimento de habilidades de
                        comunicação, sensibilidade, criatividade e colaboração.
                    </p>

                    <p>
                        Paralelamente à dança, desenvolvi meu interesse pela fotografia,
                        linguagem que passou a ocupar um espaço importante em minha
                        trajetória. Ao longo das minhas experiências, realizei registros
                        fotográficos de eventos universitários, explorando diferentes
                        situações, ambientes, pessoas e acontecimentos. Também integrei
                        uma empresa de fotografia, onde tive a oportunidade de ampliar
                        meus conhecimentos sobre os processos de produção fotográfica,
                        desenvolvendo tanto aspectos técnicos quanto artísticos
                        relacionados à composição, ao enquadramento e à construção de
                        imagens.
                    </p>
                </div>
            </section>

            <section className="about__quote">
                <span className="about__eyebrow">OLHAR E CRIAÇÃO</span>
                <p>
                    “A arte é um campo de experimentação, troca e construção de sentidos.”
                </p>
            </section>

            <section className="about__closing">
                <div>
                    <span className="about__eyebrow">CONTINUO EM MOVIMENTO</span>
                    <h2>
                        Sempre buscando
                        <br />
                        <span>novas formas de olhar.</span>
                    </h2>
                </div>

                <p>
                    Minha formação em Artes Visuais amplia constantemente minhas
                    possibilidades de investigação e criação, permitindo estabelecer
                    conexões entre diferentes linguagens, referências e experiências.
                    Meu percurso reúne experiências na dança, na educação e na fotografia,
                    áreas que dialogam entre si por meio da expressão, da sensibilidade
                    e da criação. Atualmente, sigo desenvolvendo minha identidade
                    artística, com interesse nas relações entre fotografia, corpo,
                    movimento e imagem.
                </p>

                <a href="#contato" className="about__contact">
                    Vamos conversar <ArrowUpRight size={17} strokeWidth={1.5} />
                </a>
            </section>
        </main>
    );
}

export default About;
