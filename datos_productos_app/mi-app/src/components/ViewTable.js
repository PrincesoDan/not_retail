import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get('http://localhost:5000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  };

  return (
    <div>
      <h2>Últimos 10 Productos</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Año</th>
            <th>Procesador</th>
            <th>Memoria RAM</th>
            <th>Tipo de Disco Duro</th>
            <th>Tamaño Disco Duro</th>
            <th>Batería</th>
            <th>Sistema Operativo</th>
            <th>Pulgadas Pantalla</th>
            <th>Bluetooth</th>
            <th>Detalles</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.nombre}</td>
              <td>{product.año}</td>
              <td>{product.procesador}</td>
              <td>{product.memoria_ram} GB</td>
              <td>{product.tipo_de_disco_duro}</td>
              <td>{product.tamaño_disco_duro} GB</td>
              <td>{product.bateria}</td>
              <td>{product.sistema_operativo}</td>
              <td>{product.pulgadas_pantalla}"</td>
              <td>{product.bluetooth ? 'Sí' : 'No'}</td>
              <td>{product.detalles}</td>
              <td>${product.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewTable;
