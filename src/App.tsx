import { useState } from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import About from './assets/pages/About/About';
import Contact from './assets/pages/Contact/Contact';
import Portfolio from './assets/pages/Portfolio/Portfolio';
import './styles/global.scss';

function App() {
    const [categoriaAtiva, setCategoriaAtiva] = useState('Todos os trabalhos');

    const [paginaAtiva, setPaginaAtiva] = useState<
        'portfolio' | 'sobre' | 'contato'
    >('portfolio');

    const handleCategoriaChange = (categoria: string) => {
        setCategoriaAtiva(categoria);

        if (categoria === 'Pessoal') {
            setPaginaAtiva('sobre');
        } else if (categoria === 'Contato') {
            setPaginaAtiva('contato');
        } else {
            setPaginaAtiva('portfolio');
        }
    };

    return (
        <div className="app">
            <Sidebar
                categoriaAtiva={categoriaAtiva}
                onCategoriaChange={handleCategoriaChange}
            />

            <main className="app__content">
                {paginaAtiva === 'sobre' ? (
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
