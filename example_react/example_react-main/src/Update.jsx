import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import './App.css'; 

export default function Update() {
    const { id: bookId } = useParams(); // Obtener el ID del libro desde los parámetros de la ruta
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [isbn, setIsbn] = useState('');
    const navigate = useNavigate();

    // Cargar los datos del libro cuando el componente se monta
    useEffect(() => {
        if (bookId) {
            fetch(`http://localhost:8000/api/books/${bookId}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Error al cargar los datos del libro');
                    }
                    return response.json();
                })
                .then((data) => {
                    setTitle(data.title);
                    setYear(data.year);
                    setIsbn(data.isbn);
                })
                .catch((error) => {
                    alert('Error al cargar los datos del libro:', error);
                });
        }
    }, [bookId]);

    // Función para manejar el envío del formulario de actualización
    const enviar = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8000/api/books/${bookId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title, 
                year: year, 
                isbn: isbn,
            }),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error actualizando el libro');
            }
            return response.json();
        })
        .then((data) => {
            alert('Libro actualizado con éxito:', data);
            navigate('/table'); // Cambiar a la ruta deseada después de actualizar
        })
        .catch((error) => {
            alert('Error actualizando el libro:', error);
        });
    };

    return (
        <div>
            <h1>Actualizando Libro</h1>
            <form onSubmit={enviar}>
                <label htmlFor="title">Title:</label>
                <input 
                    type="text"
                    name='title'
                    id='title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <label htmlFor="year">Año:</label>
                <input 
                    type="text"
                    name='year'
                    id='year'
                    value={year}
                    onChange={e => setYear(e.target.value)} 
                />

                <label htmlFor="isbn">Isbn:</label>
                <input 
                    type="text"
                    name='isbn'
                    id='isbn'
                    value={isbn}
                    onChange={e => setIsbn(e.target.value)} 
                />
                <button type='submit'>Actualizar</button>
            </form>
        </div>
    );
}
