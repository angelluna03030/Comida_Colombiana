"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
const Slider = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="slider">
        <div className="slider-track">
          {data.map((item) => (
            // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
<div
              className="slide"
              key={item.id_comidas}
              onClick={() => handleCardClick(item)}
            >
              <Card
                src_imagen={item.src_imagen}
                nombre_plato={item.nombre_plato}
                nombre_departamento={item.nombre_departamento}
                nombre_categoria={item.nombre_categoria}
              />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedItem && (
        <div className="modal-overlay">
          <div className="modal__imagen">
            <Image
              src={selectedItem.src_imagen}
              alt={`Imagen de ${selectedItem.nombre_plato}`}
              width={200}
              height={200}
              layout="responsive"
            />
          </div>
          <div className="modal_titulo">{selectedItem.nombre_plato}</div>
          <div className="modal_contenido">
            Nombre departamento: {selectedItem.nombre_departamento}
            <br />
            Nombre categoría: {selectedItem.nombre_categoria}
            <br />
            Ingredientes: {selectedItem.ingredientes}
            <br />
            <button onClick={() => setIsModalOpen(false)} type="button">
              CERRAR
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Slider;
// biome-ignore lint/suspicious/noRedeclare: <explanation>
const Card = ({ src_imagen, nombre_plato, nombre_departamento, nombre_categoria }) => {
  return (
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
  );
};