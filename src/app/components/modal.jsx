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

        <br />
        <div className="modal_titulo">{nombre_plato}</div>

        <div className="modal_contenido">
          nombre departamento: {nombre_departamento}
          <br />
          nombre catagoria : {nombre_catagoria} <br />
          ingredientes: {ingredientes}<br />
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button onClick={() => setModalOpen(true)}>CERRAR</button>
        </div>
      </div>
    </>
  );
};

export default ModalCard;
