import { promisify } from 'util';
import mysql from 'mysql';
import { NextResponse } from 'next/server';

const connection = mysql.createConnection({
  host: "viaduct.proxy.rlwy.net",
  user: "root",
  password: "AaFFDCBB3dAf-FAG6ff6Fga36f5bAC-f",
  database: "comida_colombiana",
  port: "11471"
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
