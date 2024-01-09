import CardGrande2 from "./components/cardGrande2";
import CardGrande from "./components/cardgrande";
import Cardapi from "./components/componentsApi/cardapi";
import CardcopiApi from "./components/componentsApi/cardcopiApi";
import Footer from "./components/footer";
import Introduccion from "./components/introduccion";

import Navegacion from "./components/navegador";
import Slider from "./components/slider";

export default function Home() {
  return (
    <>
      <Navegacion />
      <Introduccion/>
      <Slider />
      <CardGrande />
      <CardGrande2 />
      <CardcopiApi/>
      <Cardapi></Cardapi>
      <Footer />
    </>
  );
}
