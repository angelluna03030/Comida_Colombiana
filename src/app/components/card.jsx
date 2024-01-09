"use client";
import React, { useState } from "react";
import Image from "next/image";
import ModalCard from "./modal";


const Card = ({
  src_imagen,
  nombre_plato,
  nombre_departamento,
  nombre_categoria,
}) => {


  return (
    <>
      <div className="card">
        <div className="Card__imagen">
          <Image
            src={src_imagen}
            alt={nombre_plato}
            title={nombre_plato}
            width={350}
            height={350}
            className="imagenes"
          />
        </div>
        <div className="Card__Contenido">
          <br />
          <span>
            <center>{nombre_plato}</center>
          </span>
          Departamento: {nombre_departamento}
          <br />
          Categoría: {nombre_categoria}
        </div>
      </div>



   
    </>
  );
};

export default Card;
