
import { useState } from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import './styles/global.scss';

function App() {
    const [categoriaAtiva, setCategoriaAtiva] = useState(
        'Todos os trabalhos'
    );

    return (
        <div className="app">
            <Sidebar
                categoriaAtiva={categoriaAtiva}
                onCategoriaChange={setCategoriaAtiva}
            />

            <main className="app__content">
                <span>PORTFÓLIO / 2026</span>
                <h2>{categoriaAtiva}</h2>
                <p>
                    Uma coleção de histórias, momentos e perspectivas.
                </p>
            </main>
        </div>
    );
}

export default App;
