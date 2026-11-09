
import { useEffect, useState } from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import About from './assets/pages/About/About';
import Contact from './assets/pages/Contact/Contact';
import Portfolio from './assets/pages/Portfolio/Portfolio';
import Home from './assets/pages/Home/Home';
import './styles/global.scss';

type Pagina = 'home' | 'portfolio' | 'sobre' | 'contato';

const rotas: Record<Pagina, string> = {
    home: '#/',
    portfolio: '#/portfolio',
    sobre: '#/sobre',
    contato: '#/contato',
};

const categoriasPorPagina: Record<Pagina, string> = {
    home: 'Página Inicial',
    portfolio: 'Todos os trabalhos',
    sobre: 'Pessoal',
    contato: 'Contato',
};

function paginaDaHash(hash: string): Pagina {
    const caminho = hash.replace(/^#\/?/, '').toLowerCase();

    if (caminho.startsWith('portfolio')) return 'portfolio';
    if (caminho.startsWith('sobre')) return 'sobre';
    if (caminho.startsWith('contato')) return 'contato';

    return 'home';
}

function rotaDaCategoria(categoria: string): Pagina {
    if (categoria === 'Pessoal') return 'sobre';
    if (categoria === 'Contato') return 'contato';
    if (categoria === 'Todos os trabalhos' || categoria === 'Eventos') {
        return 'portfolio';
    }

    return 'home';
}

function App() {
    const [paginaAtiva, setPaginaAtiva] = useState<Pagina>(() =>
        paginaDaHash(window.location.hash)
    );

    const [categoriaAtiva, setCategoriaAtiva] = useState(() =>
        categoriasPorPagina[paginaDaHash(window.location.hash)]
    );

    useEffect(() => {
        const sincronizarRota = () => {
            const pagina = paginaDaHash(window.location.hash);
            setPaginaAtiva(pagina);
            setCategoriaAtiva(categoriasPorPagina[pagina]);
        };

        window.addEventListener('hashchange', sincronizarRota);
        window.addEventListener('popstate', sincronizarRota);

        return () => {
            window.removeEventListener('hashchange', sincronizarRota);
            window.removeEventListener('popstate', sincronizarRota);
        };
    }, []);

    const irPara = (pagina: Pagina) => {
        setPaginaAtiva(pagina);
        setCategoriaAtiva(categoriasPorPagina[pagina]);

        const destino = rotas[pagina];

        if (window.location.hash !== destino) {
            window.history.pushState({ pagina }, '', destino);
        }

        window.scrollTo({ top: 0, behavior: 'auto' });
    };

    const handleCategoriaChange = (categoria: string) => {
        irPara(rotaDaCategoria(categoria));
    };

    return (
        <div className="app">
            <Sidebar
                categoriaAtiva={categoriaAtiva}
                onCategoriaChange={handleCategoriaChange}
            />

            <main className="app__content">
                {paginaAtiva === 'home' ? (
                    <Home
                        onExplore={() => irPara('portfolio')}
                        onAbout={() => irPara('sobre')}
                    />
                ) : paginaAtiva === 'sobre' ? (
                    <About onContact={() => irPara('contato')} />
                ) : paginaAtiva === 'contato' ? (
                    <Contact />
                ) : (
                    <Portfolio categoria={categoriaAtiva} />
                )}
            </main>
        </div>
    );
}

export default App;
