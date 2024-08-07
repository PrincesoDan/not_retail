import React, { useState } from 'react';

function MensajeTipo({ data }) {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');

  const generateMessage = () => {
    const msg = `Computador a la venta: ${data.nombre}
Características:
Año: ${data.año}
Procesador: ${data.procesador}
Cantidad de RAM: ${data.memoriaRam} GB
Tamaño Disco Duro: ${data.tamañoDiscoDuro} GB
Precio: $${data.precio}
Despacho a domicilio!`;

    setMessage(msg);
    setShowMessage(true);
  };

  return (
    <div>
      <button onClick={generateMessage}>Publicidad</button>
      {showMessage && (
        <div>
          <p>{message}</p>
          <p>Datos productos agregado exitosamente!</p>
        </div>
      )}
    </div>
  );
}

export default MensajeTipo;
