import ModalCard from "../modal";

const Cardapi = () => {
  return (
    <>
      <div class="code-editor">
        <div class="header2">
          <span class="title">API</span>
        </div>
        <div class="editor-content">
          <code class="code">
            <p>
              <span class="color-0"> Información de la API </span> <span></span>
            </p>
            <p className="primer-corcho"></p>
            <p>
              <span class="color-0"> "id_comidas": 3, </span> <span></span>
            </p>
            <p class="property">
              <span class="color-2"> "nombre_plato": "Bandeja Paisa",</span>
              <span></span>
            </p>
            <p class="property">
              <span class="color-2"> "nombre_catagoria": "Sopa",</span>
              <span></span>
            </p>
            <p class="property">
              <span class="color-2">
             
                "nombre_departamento": "Cundinamarca",
              </span>
              <span></span>
            </p>
            <p class="property">
              <span class="color-2">
              "ingredientes": "Carne molida, arroz blanco, frijoles, chicharrón, huevo frito, plátano maduro frito, aguacate, arepa, morcilla, hogao"
              </span>
              <span></span>
            </p>
          
            <p class="property">
              <span class="color-2">
               
                "descripcion": "La Bandeja Paisa es un plato típico de la región
                paisa en Colombia, y es conocido por su abundancia y variedad de
                ingredientes. Es una comida sustanciosa que representa una parte
                importante de la tradición culinaria colombiana. ",
              </span>
              <span></span>
            </p>
   
            <p class="property">
              <span class="color-2">
                {" "}
                "src_imagen":
                "https://todoservy-production-media.s3.amazonaws.com/30266/blog-col-bandeja-paisa1.webp"
              </span>
              <span></span>
            </p>
            <p className="segundo-corcho"></p>
            <span></span>
          </code>
        </div>
      </div>
   
    </>
  );
};

export default Cardapi;
