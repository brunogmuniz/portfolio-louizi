
import { motion } from 'motion/react';
import {ArrowUpRight } from 'lucide-react';
import './Sidebar.scss';

interface SidebarProps {
    categoriaAtiva: string;
    onCategoriaChange: (categoria: string) => void;
}

const categorias = [
    'Todos os trabalhos',
    'Retratos',
    'Ensaios',
    'Eventos',
    'Editorial',
    'Pessoal',
];

export function Sidebar({
                            categoriaAtiva,
                            onCategoriaChange,
                        }: SidebarProps) {
    return (
        <aside className="sidebar">
            <div className="sidebar__top">

                <motion.div
                    className="sidebar__brand"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1>Louizi<span>.</span></h1>
                    <p>FOTOGRAFIA & ARTE VISUAL</p>
                </motion.div>

                <nav className="sidebar__navigation">
          <span className="sidebar__label">
            EXPLORAR
          </span>

                    <ul>
                        {categorias.map((categoria, index) => {
                            const ativa = categoriaAtiva === categoria;

                            return (
                                <motion.li
                                    key={categoria}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.15 + index * 0.06 }}
                                >
                                    <button
                                        className={`sidebar__link ${
                                            ativa ? 'sidebar__link--active' : ''
                                        }`}
                                        onClick={() => onCategoriaChange(categoria)}
                                    >
                                        {categoria}

                                        {ativa && (
                                            <motion.span
                                                layoutId="active-underline"
                                                className="sidebar__underline"
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 350,
                                                    damping: 30,
                                                }}
                                            />
                                        )}
                                    </button>
                                </motion.li>
                            );
                        })}
                    </ul>
                </nav>

                <nav className="sidebar__navigation sidebar__information">
          <span className="sidebar__label">
            CONHEÇA
          </span>

                    <a href="#sobre" className="sidebar__link">
                        Sobre mim
                    </a>

                    <a href="#contato" className="sidebar__link">
                        Entre em contato
                    </a>
                </nav>

            </div>

            <div className="sidebar__footer">
                <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="sidebar__instagram"
                >
                    <span>INSTAGRAM</span>
                    <ArrowUpRight size={13} />
                </a>

                <span className="sidebar__copyright">
          © 2026 LOUIZI
          <br />
          TODOS OS DIREITOS RESERVADOS
        </span>
            </div>
        </aside>
    );
}
