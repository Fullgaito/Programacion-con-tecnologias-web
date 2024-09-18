import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Create from './Create';
import Table from './Table';
import Update from './Update';

function AppRouter() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Inicio</Link>
                        </li>
                        <li>
                            <Link to='/create'>Crear</Link>
                        </li>
                        <li>
                            <Link to='/table'>Listado</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/' element={<h2>Inicio</h2>} />
                    <Route path='/create' element={<Create />} />
                    <Route path='/table' element={<Table />} />
                    <Route path="/edit/:id" element={<Update />} /> {/* Mostrar la página de edición */}
                </Routes>
            </div>
        </Router>
    );
}

export default AppRouter;
