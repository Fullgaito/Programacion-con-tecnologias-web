import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom'; 

export default function Table() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    function fethData() {
        fetch('http://localhost:8000/api/books')
            .then(response => response.json())
            .then(result => setData(result))
            .catch(error => setError(error.message));
    }

    useEffect(() => {
        fethData();
    }, []);

    function onDelete(id) {
        fetch(`http://localhost:8000/api/books/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(() => {
            fethData();
            alert('Success: Libro eliminado');
    })
    .catch(error => {
        alert('Error:', error.message);
    });
}
    function onUpdate(id) {
        fetch(`http://localhost:8000/api/books/${id}`, {
            method: 'PUT'
        })
        .then(response=>response.json())
        .then(()=>{
            fethData();
            navigate(`/edit/${id}`);
        })
        .catch(error=>{
            alert('Error',error.message);
        });
    }


  return (
    <div>
        <h2>Tabla</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Year</th>
                    <th>ISBN</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.year}</td>
                        <td>{item.isbn}</td>
                        <td>
                            <button onClick={() => onUpdate(item.id)}>Editar</button>
                            <button onClick={() => onDelete(item.id)}>Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
