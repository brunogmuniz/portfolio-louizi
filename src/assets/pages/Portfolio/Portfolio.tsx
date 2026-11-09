
import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import './Portfolio.scss';

interface Foto {
    src: string;
    nome: string;
}

interface Evento {
    id: string;
    titulo: string;
    descricao: string;
    pasta: string;
    quantidade: number;
    fotos: Foto[];
}

const arquivos = import.meta.glob<string>(
    '../../images/all/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
    {
        eager: true,
        query: '?url',
        import: 'default',
    }
);

function carregarFotos(pasta: string): Foto[] {
    return Object.entries(arquivos)
        .filter(([caminho]) => caminho.includes(`/all/${pasta}/`))
        .sort(([a], [b]) => {
            const numeroA = Number(a.split('/').pop()?.match(/^\d+/)?.[0] ?? 0);
            const numeroB = Number(b.split('/').pop()?.match(/^\d+/)?.[0] ?? 0);
            return numeroA - numeroB;
        })
        .map(([caminho, src]) => ({
            src,
            nome: caminho.split('/').pop() ?? 'Fotografia',
        }));
}

const eventos: Evento[] = [
    {
        id: 'upf',
        titulo: 'UPF EM DANÇA',
        descricao: 'Movimento, expressão e momentos.',
        pasta: 'upf',
        quantidade: 20,
        fotos: carregarFotos('upf'),
    },
    {
        id: 'exposol',
        titulo: 'EXPOSOL',
        descricao: 'Soledade, Rio Grande do Sul.',
        pasta: 'exposol',
        quantidade: 15,
        fotos: carregarFotos('exposol'),
    },
    {
        id: 'sulemotos',
        titulo: 'SUL E MOTOS - SOLEDADE',
        descricao: 'Evento de Motos do Grupo Bicho Véio - Soledade.',
        pasta: 'sulemotos',
        quantidade: 20,
        fotos: carregarFotos('sulemotos'),
    },
    {
        id: 'tsara',
        titulo: 'VARIETÉ DA TSARA',
        descricao: 'Arte, cultura e expressão.',
        pasta: 'tsara',
        quantidade: 8,
        fotos: carregarFotos('tsara'),
    },
];

interface PortfolioProps {
    categoria: string;
}

function Portfolio({ categoria }: PortfolioProps) {
    const [fotoAtiva, setFotoAtiva] = useState<number | null>(null);

    const eventosExibidos =
        categoria === 'Todos os trabalhos' || categoria === 'Eventos'
            ? eventos
            : [];

    const todasFotos = eventosExibidos.flatMap((evento) =>
        evento.fotos.map((foto) => ({
            ...foto,
            evento: evento.titulo,
        }))
    );

    const navegarFoto = (direcao: number) => {
        if (fotoAtiva === null || todasFotos.length === 0) return;

        setFotoAtiva(
            (fotoAtiva + direcao + todasFotos.length) % todasFotos.length
        );
    };

    useEffect(() => {
        if (fotoAtiva === null) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setFotoAtiva(null);
            if (event.key === 'ArrowRight') navegarFoto(1);
            if (event.key === 'ArrowLeft') navegarFoto(-1);
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [fotoAtiva, todasFotos.length]);

    return (
        <section className="portfolio">
            <header className="portfolio__header">
                <span className="portfolio__eyebrow">
                    PORTFÓLIO / 2026
                </span>

                <div className="portfolio__heading">
                    <div>
                        <h1>{categoria}</h1>
                        <p>
                            Uma coleção de histórias, momentos e perspectivas.
                        </p>
                    </div>

                    <span className="portfolio__total">
                        {todasFotos.length.toString().padStart(2, '0')} FOTOS
                    </span>
                </div>
            </header>

            {eventosExibidos.length > 0 ? (
                <div className="portfolio__events">
                    {eventosExibidos.map((evento, index) => {
                        const inicio = eventosExibidos
                            .slice(0, index)
                            .reduce((total, item) => total + item.fotos.length, 0);

                        return (
                            <section
                                className="portfolio__event"
                                key={evento.id}
                            >
                                <div className="portfolio__event-header">
                                    <div>
                                        <span className="portfolio__event-number">
                                            0{index + 1} / EVENTO
                                        </span>
                                        <h2>{evento.titulo}</h2>
                                        <p>{evento.descricao}</p>
                                    </div>

                                    <span className="portfolio__event-count">
                                        {evento.fotos.length
                                            .toString()
                                            .padStart(2, '0')}{' '}
                                        FOTOGRAFIAS
                                    </span>
                                </div>

                                {evento.fotos.length > 0 ? (
                                    <div className="portfolio__gallery">
                                        {evento.fotos.map((foto, fotoIndex) => (
                                            <button
                                                className="portfolio__photo"
                                                key={foto.nome}
                                                type="button"
                                                onClick={() =>
                                                    setFotoAtiva(inicio + fotoIndex)
                                                }
                                                aria-label={`Ampliar foto ${foto.nome}`}
                                            >
                                                <img
                                                    src={foto.src}
                                                    alt={`${evento.titulo} - ${foto.nome}`}
                                                    loading="lazy"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="portfolio__empty">
                                        Nenhuma foto encontrada nesta pasta.
                                    </p>
                                )}
                            </section>
                        );
                    })}
                </div>
            ) : (
                <div className="portfolio__empty-category">
                    <p>Novas fotografias em breve.</p>
                </div>
            )}

            {fotoAtiva !== null && todasFotos[fotoAtiva] && (
                <div
                    className="portfolio__lightbox"
                    onClick={() => setFotoAtiva(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Visualização de fotografia"
                >
                    <button
                        className="portfolio__lightbox-close"
                        onClick={() => setFotoAtiva(null)}
                        aria-label="Fechar"
                    >
                        <X size={25} />
                    </button>

                    <button
                        className="portfolio__lightbox-arrow portfolio__lightbox-arrow--left"
                        onClick={(event) => {
                            event.stopPropagation();
                            navegarFoto(-1);
                        }}
                        aria-label="Foto anterior"
                    >
                        <ArrowLeft size={24} />
                    </button>

                    <div
                        className="portfolio__lightbox-image"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <img
                            src={todasFotos[fotoAtiva].src}
                            alt={todasFotos[fotoAtiva].evento}
                        />

                        <div className="portfolio__lightbox-caption">
                            <span>{todasFotos[fotoAtiva].evento}</span>
                            <span>
                                {String(fotoAtiva + 1).padStart(2, '0')} /{' '}
                                {String(todasFotos.length).padStart(2, '0')}
                            </span>
                        </div>
                    </div>

                    <button
                        className="portfolio__lightbox-arrow portfolio__lightbox-arrow--right"
                        onClick={(event) => {
                            event.stopPropagation();
                            navegarFoto(1);
                        }}
                        aria-label="Próxima foto"
                    >
                        <ArrowRight size={24} />
                    </button>
                </div>
            )}
        </section>
    );
}

export default Portfolio;
