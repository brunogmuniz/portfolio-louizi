
import { useState } from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import About from './assets/pages/About/About';
import Contact from './assets/pages/Contact/Contact';
import Portfolio from './assets/pages/Portfolio/Portfolio';
import Home from './assets/pages/Home/Home';
import './styles/global.scss';

function App() {
    const [categoriaAtiva, setCategoriaAtiva] = useState('Pagina Inicial');

    const [paginaAtiva, setPaginaAtiva] = useState<
        'home' | 'portfolio' | 'sobre' | 'contato'
    >('home');

    const handleCategoriaChange = (categoria: string) => {
        setCategoriaAtiva(categoria);

        if (categoria === 'Pagina Inicial') {
            setPaginaAtiva('home');
        } else if (categoria === 'Pessoal') {
            setPaginaAtiva('sobre');
        } else if (categoria === 'Contato') {
            setPaginaAtiva('contato');
        } else {
            setPaginaAtiva('portfolio');
        }
    };

    const handleExplore = () => {
        setCategoriaAtiva('Todos os trabalhos');
        setPaginaAtiva('portfolio');
    };

    const handleAbout = () => {
        setCategoriaAtiva('Pessoal');
        setPaginaAtiva('sobre');
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
                        onExplore={handleExplore}
                        onAbout={handleAbout}
                    />
                ) : paginaAtiva === 'sobre' ? (
                    <About />
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
