"use client";
import Image from "next/image";
const { useState } = require("react");

const ModalCard = ({
  nombre_plato,
  nombre_departamento,
  nombre_catagoria,
  ingredientes,
  src_imagen
}) => {
  const [ModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className={ModalOpen ? "opasiti" : "modal-overlay"}>
     
        <div className="modal__imagen">
          <Image
            src={
              src_imagen
            }
            width={350}
            height={350}
          />
        </div>

        <br></br>
        <div className="modal_titulo">{nombre_plato}</div>

        <div className="modal_contenido">
          nombre departamento: {nombre_departamento}
          <br></br>
          nombre catagoria : {nombre_catagoria} <br></br>
          ingredientes: {ingredientes}<br></br>
          <button onClick={() => setModalOpen(true)}>CERRAR</button>
        </div>
      </div>
    </>
  );
};

export default ModalCard;
