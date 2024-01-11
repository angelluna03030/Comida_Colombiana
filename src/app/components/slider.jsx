"use client";

import Card from './card';
import { useEffect, useState } from 'react';
import ModalCard from './modal'; // Asegúrate de importar correctamente el nombre del componente ModalCard

const Slider = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <div className="slider">
        <div className="slider-track">
          {data.map((item) => (
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

      {selectedItem && (
        <ModalCard
          nombre_plato={selectedItem.nombre_plato}
          nombre_departamento={selectedItem.nombre_departamento}
          nombre_catagoria={selectedItem.nombre_categoria}
          ingredientes={selectedItem.ingredientes}
          src_imagen={selectedItem.src_imagen}
          onClose={handleCardClick}
        />
      )}
    </>
  );
};

export default Slider;