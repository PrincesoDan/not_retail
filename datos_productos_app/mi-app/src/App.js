import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario';
import Boton from './components/Boton';
import ViewTable from './components/ViewTable';

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    año: new Date().getFullYear(),
    procesador: '',
    memoriaRam: '',
    tamañoDiscoDuro: '',
    tipoDeDiscoDuro: 'SSD',  // Agregado según las especificaciones
    bateria: 'buena',        // Cambiado de bateriaBuena a bateria
    sistemaOperativo: 'Windows 10 Home',  // Nuevo campo
    pulgadasPantalla: '',    // Nuevo campo
    bluetooth: false,        // Nuevo campo
    detalles: '',            // Nuevo campo
    precio: ''
  });
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleFormSubmit = (data) => {
    axios.post('http://localhost:5000/productos', data)
      .then(response => {
        console.log('Datos enviados correctamente:', response.data);
        alert('Producto agregado con éxito');
        generateMessage(data);
      })
      .catch(error => {
        console.error('Hubo un error:', error.response);
        alert('Error al agregar producto');
      });
  };

  const generateMessage = (data) => {
    const msg = `Computador a la venta: ${data.nombre}
Características:
Año: ${data.año}
Procesador: ${data.procesador}
Cantidad de RAM: ${data.memoriaRam} GB
Tipo de Disco Duro: ${data.tipoDeDiscoDuro}
Tamaño Disco Duro: ${data.tamañoDiscoDuro} GB
Sistema Operativo: ${data.sistemaOperativo}
Pulgadas de Pantalla: ${data.pulgadasPantalla}"
Bluetooth: ${data.bluetooth ? 'Sí' : 'No'}
Detalles: ${data.detalles}
Precio: $${data.precio}
Despacho a domicilio!`;

    setMessage(msg);
    setShowMessage(true);
  };

  const clearForm = () => {
    setFormData({
      nombre: '',
      año: new Date().getFullYear(),
      procesador: '',
      memoriaRam: '',
      tamañoDiscoDuro: '',
      tipoDeDiscoDuro: 'SSD',
      bateria: 'buena',
      sistemaOperativo: 'Windows 10 Home',
      pulgadasPantalla: '',
      bluetooth: false,
      detalles: '',
      precio: ''
    });
    setShowMessage(false);
  };

  return (
    <div className="App" style={{ margin: '2%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Registro de Productos</h1>
      <Formulario data={formData} onChange={setFormData} />
      <Boton onClick={() => handleFormSubmit(formData)} text="Enviar y Generar Publicidad" />
      <Boton onClick={clearForm} text="Limpiar Formulario" />
      {showMessage && <div><p>{message}</p><p>Datos productos agregado exitosamente!</p></div>}
      <ViewTable />
    </div>
  );
}

export default App;

