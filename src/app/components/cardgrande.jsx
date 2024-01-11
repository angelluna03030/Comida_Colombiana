"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const CardGrande = () => {
  const [primerPlato, setPrimerPlato] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api');
        const jsonData = await response.json();

        // Asegúrate de que hay al menos un elemento en la respuesta antes de establecer el estado
        if (jsonData.length > 0) {
          setPrimerPlato(jsonData[0]);
        }
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
      }
    };

    fetchData();
  }, []);

  // Si primerPlato aún no está definido, puedes mostrar un mensaje de carga o simplemente no renderizar nada
  if (!primerPlato) {
    return null;
  }

  return (
    <>
      <br id="descripcion" />
      <div
        className="CardGrande"
        initial={{ scale: 1, opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="CardGrande_imagen">
          <Image
            src={primerPlato.src_imagen}
            width={450}
            height={450}
            alt={`Imagen de ${primerPlato.nombre_plato}`}
            className="imagen"
          />
        </div>
        <div className="CardGrande_Contenido">
          <div className="CardGrande_Contenido_titulo" aria-label="Título del plato">
            {primerPlato.nombre_plato}
          </div>
          <div className="CardGrande_Contenido_Descripcion" aria-describedby="descripcion">
            {primerPlato.descripcion}
          </div>
          <span aria-describedby="descripcion">Categoría: {primerPlato.nombre_categoria}.</span>
          <br />
          <span aria-describedby="descripcion">Departamento: {primerPlato.nombre_departamento}.</span>
          <br />
          <span aria-describedby="descripcion">Ingredientes: {primerPlato.ingredientes}.</span>
        </div>
      </div>
    </>
  );
};

export default CardGrande;