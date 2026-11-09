
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import './Sidebar.scss';

interface SidebarProps {
    categoriaAtiva: string;
    onCategoriaChange: (categoria: string) => void;
}

const categorias = [
    'Página Inicial',
    'Todos os trabalhos',
    'Pessoal',
    'Contato'
];

export function Sidebar({
                            categoriaAtiva,
                            onCategoriaChange,
                        }: SidebarProps) {
    const reduceMotion = useReducedMotion();

    return (
        <aside className="sidebar">
            <div className="sidebar__top">

                <motion.div
                    className="sidebar__brand"
                    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={reduceMotion ? undefined : { duration: 0.8 }}
                >
                    <div className="sidebar__brand-title">
                        Louizi<span>.</span>
                    </div>
                    <p>FOTOGRAFIA & ARTE VISUAL</p>
                </motion.div>

                <nav className="sidebar__navigation" aria-label="Navegação principal">
                    <span className="sidebar__label">
                        EXPLORAR
                    </span>

                    <ul>
                        {categorias.map((categoria, index) => {
                            const ativa = categoriaAtiva === categoria;

                            return (
                                <motion.li
                                    key={categoria}
                                    initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                                    animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                                    transition={
                                        reduceMotion
                                            ? undefined
                                            : { delay: 0.15 + index * 0.06 }
                                    }
                                >
                                    <button
                                        type="button"
                                        className={`sidebar__link ${
                                            ativa ? 'sidebar__link--active' : ''
                                        }`}
                                        onClick={() => onCategoriaChange(categoria)}
                                        aria-current={ativa ? 'page' : undefined}
                                    >
                                        {categoria}

                                        {ativa && (
                                            <motion.span
                                                layoutId="active-underline"
                                                className="sidebar__underline"
                                                transition={
                                                    reduceMotion
                                                        ? { duration: 0 }
                                                        : {
                                                            type: 'spring',
                                                            stiffness: 350,
                                                            damping: 30,
                                                        }
                                                }
                                            />
                                        )}
                                    </button>
                                </motion.li>
                            );
                        })}
                    </ul>
                </nav>

            </div>

            <div className="sidebar__footer">
                <a
                    href="https://instagram.com/tmwthv"
                    target="_blank"
                    rel="noreferrer"
                    className="sidebar__instagram"
                    aria-label="Instagram de Louizi (@tmwthv)"
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
