"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const CardGrande2 = () => {
  const [segundoPlato, setSegundoPlato] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api");
        const jsonData = await response.json();

        // Asegúrate de que hay al menos dos elementos en la respuesta antes de establecer el estado
        if (jsonData.length > 5) {
          setSegundoPlato(jsonData[5]); // Considerando que el segundo elemento es el que quieres para este componente
        }
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }
    };

    fetchData();
  }, []);
  if (!segundoPlato) {
    return null;
  }

  return (
    <>
      <br />
      <br />
      <br />
      <br />

      <div className="CardGrande2">
        <div className="CardGrande_Contenido2">
          <div className="CardGrande_Contenido_titulo2">
            {segundoPlato.nombre_plato}
          </div>
          <div className="CardGrande_Contenido_Descipcion2">
            {segundoPlato.descripcion}
          </div>{" "}
          <br /> <br /> <br />
          <br />
          <span>Categoría: {segundoPlato.nombre_categoria}.</span>
          <br />
          <span>Departamento: {segundoPlato.nombre_departamento}.</span>
          <br />
          <span className="CardGrande_Contenido_Ingredientes2">
            Ingredientes: {segundoPlato.ingredientes}.
          </span>
        </div>
        <div className="CardGrande_imagen2">
          <Image
            src={segundoPlato.src_imagen}
            width={300}
            height={300}
            className="imagen2"
          />
          <button></button>
        </div>
      </div>
    </>
  );
};

export default CardGrande2;
