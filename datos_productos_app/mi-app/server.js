require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack);
    }
    client.query('SELECT NOW()', (err, result) => {
      release();
      if (err) {
        return console.error('Error executing query', err.stack);
      }
      console.log(result.rows);
    });
});

app.post('/productos', async (req, res) => {
    const { nombre, año, procesador, memoria_ram, tamaño_disco_duro, tipo_de_disco_duro, bateria, sistema_operativo, pulgadas_pantalla, bluetooth, detalles, precio } = req.body;
    const response = await pool.query(
      'INSERT INTO datos_producto (nombre, año, procesador, memoria_ram, tamaño_disco_duro, tipo_de_disco_duro, bateria, sistema_operativo, pulgadas_pantalla, bluetooth, detalles, precio, fecha_creacion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, NOW()) RETURNING *',
      [nombre, año, procesador, memoria_ram, tamaño_disco_duro, tipo_de_disco_duro, bateria, sistema_operativo, pulgadas_pantalla, bluetooth, detalles, precio]
    );
    res.json(response.rows[0]);
});

app.listen(5000, () => console.log('Server running on port 5000'));

app.get('/products', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM datos_producto ORDER BY fecha_creacion DESC LIMIT 10');
      res.json(result.rows);
    } catch (err) {
      console.error('Error retrieving products:', err.stack);
      res.status(500).send('Error retrieving products');
    }
  });
  