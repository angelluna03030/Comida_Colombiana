"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import clipboardCopy from "clipboard-copy";

const CardcopiApi = () => {
  const contenido = "/api";

  const copiarTexto = () => {
    try {
      clipboardCopy(contenido);
      console.log("Texto copiado correctamente");
    } catch (err) {
      console.error("Error al copiar el texto", err);
    }
  };

  useEffect(() => {
    // Solo ejecutar este código en el cliente
    if (typeof window !== "undefined") {
      const miBoton = document.getElementById("miBoton");

      if (miBoton) {
        miBoton.addEventListener("click", copiarTexto);

        // Limpiar el event listener al desmontar el componente
        return () => {
          miBoton.removeEventListener("click", copiarTexto);
        };
      }
    }
  }, []); // No se necesita una dependencia aquí

  return (
    <>
      <div className="h1-copidoapi" id="API">
        API <br />
        ¡Pruébalo ahora!
      </div>

      <div className="copideapi_introduccion">
        <span>Introducción</span>
        <p>
          Bienvenido a la API de Comida Colombiana, una puerta de entrada
          digital a la riqueza y diversidad culinaria de Colombia. Sumérgete en
          una experiencia gastronómica única mientras exploras los sabores
          auténticos que hacen de la cocina colombiana una verdadera joya en el
          mundo de la alimentación.
        </p>
      </div>

      <div className="toast" id="api">
        <div className="toast-content" id="contenido-a-copiar">
          <input readOnly value={contenido} />
        </div>

        {/* Corregir el manejo del evento onClick */}
        <div className="toast-icon" id="miBoton" onClick={copiarTexto}>
          <Image
            src="/duplicar.png"
            width={20}
            height={20}
            alt="Icono de duplicar"
          />
        </div>
      </div>

      <div className="copideapi_introduccion">
        <span>Introducción</span>
        <p>
          Aquí puedes ver una pequeña parte de la información que encontrarás en
          la API, para que la puedas utilizar a tu gusto. <br />
          Aquí tienes la URL: <a href="/api">link</a>
        </p>
      </div>
    </>
  );
};

export default CardcopiApi;
