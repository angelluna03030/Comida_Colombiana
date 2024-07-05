import { NextResponse } from 'next/server';
import mysql from 'mysql';

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.NEXT_PUBLIC_HOST,
  user: process.env.NEXT_PUBLIC_USER,
  password: process.env.NEXT_PUBLIC_PASSWORD,
  database: process.env.NEXT_PUBLIC_DATABASE,
  port: process.env.NEXT_PUBLIC_PORT,
  connectTimeout: 10000, // 10 seconds
  acquireTimeout: 10000, // 10 seconds
  waitForConnections: true,
  queueLimit: 0
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error en la conexión:", err.message);
  } else {
    console.log("Conexión establecida");
    connection.release();
  }
});

export async function GET() {
  try {
    const queryAsync = (sql, values) => {
      return new Promise((resolve, reject) => {
        pool.query(sql, values, (error, results, fields) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
    };

    const sql = `
      SELECT 
        comidas.id_comidas, 
        comidas.nombre_plato, 
        categorias.nombre_categoria, 
        departamentos.nombre_departamento, 
        comidas.descripcion, 
        comidas.ingredientes, 
        comidas.src_imagen 
      FROM comidas 
      JOIN categorias ON comidas.id_categoria = categorias.id_categoria 
      JOIN departamentos ON comidas.id_departamento = departamentos.id_departamento 
      ORDER BY comidas.id_comidas ASC;
    `;

    const data = await queryAsync(sql);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return NextResponse.error();
  }
}
