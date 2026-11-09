
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { imageDimensions } from '../../../data/imageDimensions';
import './Home.scss';

interface HomeProps {
    onExplore: () => void;
    onAbout: () => void;
}

const imagensAbout = import.meta.glob<string>(
    '../../images/about/**/*',
    {
        eager: true,
        query: '?url',
        import: 'default',
    }
);

const imagensPortfolio = import.meta.glob<string>(
    '../../images/all/**/*',
    {
        eager: true,
        query: '?url',
        import: 'default',
    }
);

interface ImagemEncontrada {
    src: string;
    width: number;
    height: number;
}

function encontrarImagem(
    imagens: Record<string, string>,
    pasta: string,
    arquivo: string
): ImagemEncontrada {
    const caminho = Object.keys(imagens).find((caminho) =>
        caminho.includes(`/${pasta}/`) &&
        caminho.endsWith(`/${arquivo}`)
    );

    if (!caminho) {
        return { src: '', width: 0, height: 0 };
    }

    const dimensoes = imageDimensions[caminho.replace('../../images/', '')];

    return {
        src: imagens[caminho],
        width: dimensoes?.width ?? 0,
        height: dimensoes?.height ?? 0,
    };
}

const imagemHero = encontrarImagem(imagensPortfolio, 'upf', '3.jpeg');

const destaques = [
    {
        imagem: encontrarImagem(imagensAbout, 'about', '6.jpeg'),
        titulo: 'Louizi',
        categoria: 'Sobre mim',
        destino: 'about',
    },
    {
        imagem: encontrarImagem(imagensPortfolio, 'tsara', '1.jpeg'),
        titulo: 'Experiências',
        categoria: 'Arte e expressão',
        destino: 'portfolio',
    },
    {
        imagem: encontrarImagem(imagensPortfolio, 'sulemotos', '5.jpg'),
        titulo: 'Eventos',
        categoria: 'Momentos e histórias',
        destino: 'portfolio',
    },
];

export default function Home({ onExplore, onAbout }: HomeProps) {
    return (
        <div className="home">
            <header className="home__header">
                <a href="#/" className="home__logo">
                    Louizi<span>.</span>
                </a>

                <span className="home__header-label">
                    FOTOGRAFIA AUTORAL
                </span>

                <a
                    href="https://instagram.com/tmwthv"
                    target="_blank"
                    rel="noreferrer"
                    className="home__instagram"
                    aria-label="Instagram"
                >
                    <FaInstagram size={19} />
                </a>
            </header>

            <section className="home__hero">
                <div className="home__hero-content">
                    <span className="home__eyebrow">
                        FOTOGRAFIA · ARTE · EXPRESSÃO
                    </span>

                    <h1>
                        Arte
                        <br />
                        <span>Gera Arte.</span>
                    </h1>

                    <p className="home__description">
                        Cada olhar conta uma história.
                        Cada instante pode se transformar em arte.
                    </p>

                    <button
                        className="home__explore"
                        onClick={onExplore}
                    >
                        <span>Explorar portfólio</span>
                        <ArrowUpRight size={18} />
                    </button>
                </div>

                <div className="home__hero-image">
                    {imagemHero.src && (
                        <img
                            src={imagemHero.src}
                            alt="Fotografia de evento"
                            width={imagemHero.width || undefined}
                            height={imagemHero.height || undefined}
                        />
                    )}

                    <span className="home__image-caption">
                        01 — OLHARES QUE CONTAM HISTÓRIAS
                    </span>
                </div>

                <div className="home__vertical-text">
                    PORTFÓLIO 2026
                </div>

                <div className="home__scroll">
                    <span>DESCUBRA</span>
                    <ArrowDown size={15} />
                </div>
            </section>

            <section className="home__intro">
                <span className="home__eyebrow">
                    UM POUCO DO MEU OLHAR
                </span>

                <h2>
                    A arte está nos detalhes,
                    <span> nos encontros e nos momentos.</span>
                </h2>

                <p>
                    Fotografia é sobre observar, sentir e transformar
                    aquilo que acontece em algo que permanece.
                </p>
            </section>

            <section className="home__highlights">
                <div className="home__section-heading">
                    <div>
                        <span className="home__eyebrow">
                            ALGUNS REGISTROS
                        </span>

                        <h2>Um olhar sobre o mundo.</h2>
                    </div>

                    <button onClick={onExplore}>
                        Ver todos os trabalhos
                        <ArrowUpRight size={17} />
                    </button>
                </div>

                <div className="home__grid">
                    {destaques.map((foto, index) => (
                        <button
                            className="home__highlight"
                            key={foto.titulo}
                            onClick={
                                foto.destino === 'about'
                                    ? onAbout
                                    : onExplore
                            }
                        >
                            {foto.imagem.src ? (
                                <img
                                    src={foto.imagem.src}
                                    alt={foto.titulo}
                                    width={foto.imagem.width || undefined}
                                    height={foto.imagem.height || undefined}
                                />
                            ) : (
                                <div className="home__image-placeholder">
                                    Imagem não encontrada
                                </div>
                            )}

                            <div className="home__highlight-info">
                                <span>
                                    0{index + 1} / {foto.categoria}
                                </span>

                                <h3>{foto.titulo}</h3>

                                <ArrowUpRight size={19} />
                            </div>
                        </button>
                    ))}
                </div>
            </section>

            <footer className="home__footer">
                <span>LOUIZI. © 2026</span>
                <span>ARTE GERA ARTE.</span>

                <a
                    href="https://instagram.com/tmwthv"
                    target="_blank"
                    rel="noreferrer"
                >
                    INSTAGRAM <ArrowUpRight size={13} />
                </a>
            </footer>
        </div>
    );
}
