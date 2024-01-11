import { promisify } from 'util';

import { NextResponse } from 'next/server';
import mysql from 'mysql';
const connection = mysql.createConnection({
  host: "bgzpkpgmmwcy0kgykxek-mysql.services.clever-cloud.com",
  user: "uoeluigsot4f2dou",
  password: "J802RxrUdkCP3UPt75gZ",
  database: "bgzpkpgmmwcy0kgykxek",
  port: "3306",
  
  
});

const queryAsync = promisify(connection.query).bind(connection);

export async function GET(request) {
const {id} = await  parseInt(request.json()) ;
let data;
if(id === undefined){
   data = await queryAsync("SELECT comidas.id_comidas, comidas.nombre_plato, categorias.nombre_categoria, departamentos.nombre_departamento, comidas.descripcion, comidas.ingredientes, comidas.src_imagen FROM comidas JOIN categorias ON comidas.id_categoria = categorias.id_categoria JOIN departamentos ON comidas.id_departamento = departamentos.id_departamento ORDER BY comidas.id_comidas ASC;");
} else{
data = await queryAsync("SELECT * FROM comidas WHERE id_comidas = "+ id )
}
     
    return NextResponse.json(data);
}
