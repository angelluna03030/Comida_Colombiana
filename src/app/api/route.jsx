import { NextResponse } from 'next/server';
import mysql from 'mysql';

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "bgzpkpgmmwcy0kgykxek-mysql.services.clever-cloud.com",
  user: "uoeluigsot4f2dou",
  password: "J802RxrUdkCP3UPt75gZ",
  database: "bgzpkpgmmwcy0kgykxek",
  port: "3306",
});

pool.getConnection((err, connection) => {
  if (err) {
    console.log("Error en la conexión:", err.message);
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

    const data = await queryAsync("SELECT comidas.id_comidas, comidas.nombre_plato, categorias.nombre_categoria, departamentos.nombre_departamento, comidas.descripcion, comidas.ingredientes, comidas.src_imagen FROM comidas JOIN categorias ON comidas.id_categoria = categorias.id_categoria JOIN departamentos ON comidas.id_departamento = departamentos.id_departamento ORDER BY comidas.id_comidas ASC;");

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return NextResponse.error("Internal Server Error");
  }
}