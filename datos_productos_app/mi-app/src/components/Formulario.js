import React from 'react';
import { Form } from 'react-bootstrap';

const Formulario = ({ data, onChange }) => {
  const handleChange = (key, value) => {
    onChange({ ...data, [key]: value });
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          value={data.nombre}
          onChange={e => handleChange('nombre', e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Año</Form.Label>
        <Form.Control
          as="select"
          value={data.año}
          onChange={e => handleChange('año', e.target.value)}
        >
          {Array.from({ length: 32 }, (_, i) => new Date().getFullYear() - i).map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Procesador</Form.Label>
        <Form.Control
          type="text"
          value={data.procesador}
          onChange={e => handleChange('procesador', e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Memoria RAM</Form.Label>
        <Form.Control
          as="select"
          value={data.memoriaRam}
          onChange={e => handleChange('memoriaRam', e.target.value)}
        >
          {[2, 4, 6, 8, 12, 16].map(size => (
            <option key={size} value={size}>{size + ' GB'}</option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Tipo de Disco Duro</Form.Label>
        <Form.Control
          as="select"
          value={data.tipoDeDiscoDuro}
          onChange={e => handleChange('tipoDeDiscoDuro', e.target.value)}
        >
          <option value="SSD">SSD</option>
          <option value="HDD">HDD</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Tamaño del Disco Duro</Form.Label>
        <Form.Control
          type="number"
          value={data.tamañoDiscoDuro}
          onChange={e => handleChange('tamañoDiscoDuro', e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Batería</Form.Label>
        <Form.Control
          as="select"
          value={data.bateria}
          onChange={e => handleChange('bateria', e.target.value)}
        >
          <option value="buena">Buena</option>
          <option value="mala">Mala</option>
          <option value="para el cambio">Para el cambio</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Sistema Operativo</Form.Label>
        <Form.Control
          as="select"
          value={data.sistemaOperativo}
          onChange={e => handleChange('sistemaOperativo', e.target.value)}
        >
          <option value="Windows 7">Windows 7</option>
          <option value="Windows 8">Windows 8</option>
          <option value="Windows 10 Home">Windows 10 Home</option>
          <option value="Windows 10 Pro N">Windows 10 Pro N</option>
          <option value="Windows 11">Windows 11</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Pulgadas de Pantalla</Form.Label>
        <Form.Control
          type="number"
          value={data.pulgadasPantalla}
          onChange={e => handleChange('pulgadasPantalla', e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Bluetooth</Form.Label>
        <Form.Check
          type="checkbox"
          checked={data.bluetooth}
          onChange={e => handleChange('bluetooth', e.target.checked)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Detalles</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={data.detalles}
          onChange={e => handleChange('detalles', e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          value={data.precio}
          onChange={e => handleChange('precio', e.target.value)}
        />
      </Form.Group>

    
    </Form>
  );
};

export default Formulario;
