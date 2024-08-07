require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

async function createTable() {
  try {
    const dropTable = 'DROP TABLE IF EXISTS datos_producto;';
    const sql = `
      CREATE TABLE datos_producto (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(255),
        año INTEGER,
        procesador VARCHAR(255),
        memoria_ram INTEGER,
        tamaño_disco_duro INTEGER,
        tipo_de_disco_duro VARCHAR(255),
        bateria VARCHAR(255),
        sistema_operativo VARCHAR(255),
        pulgadas_pantalla INTEGER,
        bluetooth BOOLEAN,
        detalles TEXT,
        precio NUMERIC,
        fecha_creacion TIMESTAMP DEFAULT NOW()
      );
    `;
    await pool.query(dropTable);
    const res = await pool.query(sql);
    console.log('Table created successfully:', res);
    process.exit(0);
  } catch (err) {
    console.error('Error creating table:', err);
    process.exit(1);
  }
}

createTable();

