-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-01-2024 a las 16:40:44
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `comida_colombiana`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id_categoria` int(11) NOT NULL,
  `nombre_categoria` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id_categoria`, `nombre_categoria`) VALUES
(1, 'Desayuno'),
(2, 'Aperitivo'),
(3, 'Plato Principal'),
(4, 'Sopa'),
(5, 'Acompañamiento'),
(6, 'Postre'),
(7, 'Cena');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comidas`
--

CREATE TABLE `comidas` (
  `id_comidas` int(11) NOT NULL,
  `nombre_plato` varchar(255) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  `id_departamento` int(11) DEFAULT NULL,
  `src_imagen` varchar(355) NOT NULL,
  `ingredientes` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `comidas`
--

INSERT INTO `comidas` (`id_comidas`, `nombre_plato`, `descripcion`, `id_categoria`, `id_departamento`, `src_imagen`, `ingredientes`) VALUES
(1, 'Ajiaco', 'El Ajiaco es un plato emblemático de la cocina colombiana, conocido por su sabor único y su representación de la diversidad cultural del país.', 4, 12, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Nim_gPb8r1e43Qkygc2ICd2SDSdxUwTTag&usqp=CAU', 'Papas, pollo, mazorca, guascas, crema de leche'),
(2, 'Arepas', '\r\nLa arepa es un alimento fundamental en la gastronomía colombiana y de varios países de América Latina. Es una especie de pan plano y redondo, generalmente hecho a base de masa de maíz, aunque también puede prepararse con harina de trigo o de otros cereales, dependiendo de la región.', 1, 3, 'https://1.bp.blogspot.com/--hK95mDLgs8/YICaUHLNikI/AAAAAAAAesQ/Q2Me67ProWIIIHZsbTh8XqTr7_jklmOwgCLcBGAsYHQ/s320/arepa-antioque%25C3%25B1a.jpg', 'harina de maíz precocida seca con agua y sal'),
(3, 'Bandeja Paisa', 'La Bandeja Paisa es un plato típico de la región paisa en Colombia, y es conocido por su abundancia y variedad de ingredientes. Es una comida sustanciosa que representa una parte importante de la tradición culinaria colombiana. ', 3, 3, 'https://todoservy-production-media.s3.amazonaws.com/30266/blog-col-bandeja-paisa1.webp', 'Carne molida, arroz blanco, frijoles, chicharrón, huevo frito, plátano maduro frito, aguacate, arepa, morcilla, hogao'),
(4, 'Buñuelos', 'Los buñuelos son una deliciosa y popular preparación culinaria en la gastronomía colombiana. Se trata de bolitas de masa frita que resultan crujientes por fuera y esponjosas por dentro. Los buñuelos colombianos son apreciados tanto como un aperitivo durante celebraciones como en el desayuno o la merienda.', 2, 3, 'https://i0.wp.com/www.pasionthermomix.co/wp-content/uploads/2019/11/bunuelos.jpg?fit=768%2C480&ssl=1', 'Harina de maíz, queso fresco rallado, almidón de yuca, huevos, sal, azúcar y aceite para freír'),
(5, 'Carne a la Llanera', 'La \"Carne a la Llanera\" es un platillo típico de la región de los Llanos Orientales de Colombia, una extensa llanura que se extiende por varias regiones del país. Este plato refleja la influencia de la cultura llanera y su conexión con la vida ganadera y rural.', 3, 4, 'https://cdn.colombia.com/gastronomia/2011/07/28/ternera-a-la-llanera-1668.gif', 'Carne a la Llanera: carne de res, guarnición de yuca y plátano, aliños típicos de la región llanera.'),
(6, 'Carne Asada', 'La carne asada colombiana es una preparación de carne a la parrilla que se disfruta en diversas regiones del país. Este plato se destaca por su sencillez y el delicioso sabor que le confiere el asado a la parrilla. ', 3, 28, 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2021/04/Carne-Asada-main.jpg', 'Carne de res, sal, pimienta, ajo, comino, papas criollas, yuca, chimichurri'),
(7, 'Changua', 'La Changua es una sopa tradicional colombiana que se consume comúnmente en el desayuno. Esta sopa es especialmente popular en la región de Bogotá y los Altiplanos de la Cordillera de los Andes. La Changua es conocida por su sencillez y su sabor reconfortante.', 4, 12, 'https://www.elespectador.com/resizer/MN0zg3f8DBTtpogiPLNoorxXPZU=/920x613/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/HFA2CSDA7FCE5HO735QQ5ZMMCU.jpg', 'Leche, huevos, cilantro, cebolla, sal y pan'),
(8, 'Cazuela de Mariscos', 'La Cazuela de Mariscos es una mezcla exquisita de mariscos frescos, cocidos en una rica y sabrosa sopa con diversos ingredientes. Los mariscos que se suelen utilizar incluyen camarones, mejillones, calamares y pescado, pero la elección puede variar según la región y la disponibilidad local. La sopa suele estar acompañada de una base de caldo de pescado o mariscos, aromatizado con hierbas y especias que realzan los sabores del mar', 2, 17, 'https://antojandoando.com/wp-content/uploads/2015/03/cazuela-mariscos-featured-pq1.jpg', 'Mariscos variados (camarones, calamares, mejillones, almejas, etc.), pescado, cebolla, ajo, tomate, pimiento, cilantro, papa, yuca, zanahoria, caldo de pescado, vino blanco, aceite de oliva, sal y pimienta al gusto.'),
(9, 'Ceviche de Camarones', 'El ceviche de camarones es un plato fresco y delicioso que forma parte de la rica tradición de la cocina colombiana. Aunque el ceviche es originario de la costa de América Latina, cada región tiene su propia variante y Colombia no es la excepción', 2, 17, 'https://saltinnoel.com.co/wp-content/uploads/2017/07/receta-saltin-noel-coctel-de%E2%80%93camarones-con-salsa-rosada-y-galletas-saltin-noel_tradicional.jpg', 'Camarones, limón, cebolla morada, cilantro, tomate, aguacate, jugo de naranja, ají o chiles, sal y pimienta al gusto'),
(10, 'Chicharrón', 'El chicharrón es un platillo popular en la gastronomía colombiana y de muchas otras culturas latinoamericanas. Se elabora principalmente con trozos de piel de cerdo que se fríen hasta obtener una textura crujiente y dorada. La preparación del chicharrón implica un proceso especial para lograr esa combinación perfecta de crujiente por fuera y tierno por dentro.', 5, 3, 'https://www.seriouseats.com/thmb/LSCRk7srweF-PsqYMp24-ueXetE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20230724-SEA-Chicharrones-FredHardy-001-23b06c524d914932a8ae12e2be8c565a.jpg', 'Carne de cerdo, sal, ajo, comino, pimienta, aceite para freír'),
(11, 'Chuleta Valluna', 'La Chuleta Valluna es un platillo típico de la región del Valle del Cauca en Colombia.', 3, 28, 'https://www.mycolombianrecipes.com/wp-content/uploads/2009/06/Chuleta-Valluna-Colombiana.jpg', 'Chuleta de cerdo, arroz, frijoles, plátano maduro frito, arepa, hogao'),
(12, 'Empanadas', 'Las empanadas colombianas son una deliciosa y popular opción de aperitivo o plato pequeño en la gastronomía colombiana. Se trata de pequeñas porciones de masa rellenas y luego fritas hasta obtener una textura crujiente y dorada. Cada región de Colombia puede tener su variante específica de empanadas, y los rellenos pueden variar, ', 2, 3, 'https://www.labuena.com.co/wp-content/uploads/2020/11/empanadas-colombianas-imagen-destacada.jpg', 'Masa de maíz, carne molida, papa, cebolla, ajo, comino, cilantro, aceitunas, huevo duro, aceite para freír'),
(13, 'Enyucado', 'La \"enyucado\" es un delicioso postre típico de la región caribeña de Colombia, especialmente popular en la ciudad de Barranquilla durante el Carnaval. Este postre se elabora principalmente con yuca, que es un tubérculo ampliamente utilizado en la cocina colombiana.', 2, 17, 'https://cdn0.recetasgratis.net/es/posts/8/7/7/enyucado_47778_orig.jpg', 'Yuca, panela o azúcar morena, coco rallado, canela, clavos de olor, sal'),
(14, 'Chorizo Antioqueño', 'El \"chorizo antioqueño\" es una especialidad culinaria originaria de la región de Antioquia, en Colombia. Se trata de una variedad de chorizo que se distingue por su sabor único y sus ingredientes específicos. ', 3, 3, 'https://premier.com.co/wp-content/uploads/2020/11/chorizo-antioqueno.webp', 'Carne de cerdo, panceta, cebolla, ajo, pimentón, comino, sal, pimienta, vinagre'),
(15, 'Lechona', 'La lechona es un platillo tradicional colombiano, especialmente popular en la región de Tolima. Se trata de un cerdo entero relleno y asado, y es una deliciosa expresión de la gastronomía colombiana. ', 3, 27, 'https://www.recetasnestle.com.co/sites/default/files/srh_recipes/aae59a84cb4eaeacc43c307da8522102.jpg', 'Carne de cerdo, arroz, arvejas, zanahorias, cebolla, ajo, pimentón, comino, pimienta, sal, cilantro, hojas de plátano'),
(17, 'Hormigas Culonas', 'Las \"Hormigas Culonas\" (Paraponera clavata), también conocidas como \"Hormigas 24 horas\" o \"Chicatanas\" en algunas regiones de Colombia, son una especie de hormigas nativas de las selvas tropicales de América Latina, incluyendo Colombia. Aunque el nombre científico específico es Paraponera clavata, la denominación popular de \"Hormigas Culonas\" se refiere comúnmente a estas insectos', 2, 25, 'https://www.eltiempo.com/files/image_640_428/files/crop/uploads/2019/01/17/5c40f0413a098.r_1590264410941.858-1081-2308-1802.jpeg', 'Hormigas culonas, sal al gusto'),
(18, 'Tamal', 'El tamal es un plato tradicional en la gastronomía colombiana que consiste en una masa de maíz rellena de una mezcla de carne, verduras y condimentos, todo envuelto en hojas de plátano o de maíz y cocido al vapor. La preparación exacta puede variar según la región, pero el tamal es un elemento distintivo y apreciado en la cocina colombiana.', 1, 27, 'https://radionacional-v3.s3.amazonaws.com/s3fs-public/styles/amp_1200x900_4_3/public/node/article/field_image/tamal_tolimense%203.jpg?itok=Xeg1lLul', 'Masa de maíz, carne, arroz, huevos duros, aceitunas, pasas, cebolla, ajo, achiote, comino, hojas de plátano'),
(19, 'Mute', 'El \"mute\" es un plato tradicional de la región andina de Colombia, especialmente popular en el departamento de Nariño. Es conocido por su preparación lenta y cuidadosa, y es considerado un plato emblemático de la gastronomía nariñense.', 4, 25, 'https://antojandoando.com/wp-content/uploads/2015/02/mute-featured-pq2.jpg', 'Carne de cerdo, colas y huesos de cerdo, maíz trillado, plátano verde, yuca, zanahorias, mazorcas de maíz, cilantro, cebolla, ajo, comino, sal'),
(20, 'Fríjoles Antioqueños', 'Los Fríjoles Antioqueños son un platillo tradicional de la región de Antioquia en Colombia, que destaca por su sabor abundante y su preparación casera.', 5, 3, 'https://www.eltiempo.com/files/article_main_1200/files/crop/uploads/2018/05/11/5af5b40987a0b.r_1679432826655.0-297-1352-1108.jpeg', 'Frijoles rojos, costillas de cerdo, cebolla, ajo, tomate, pimentón, hojas de laurel, cilantro, zanahorias, papa criolla, aguacate, arroz'),
(21, 'Mazamorra', 'La mazamorra es un postre tradicional colombiano que también se consume en otros países de América Latina. Su preparación varía ligeramente en diferentes regiones, pero en Colombia, la mazamorra es conocida por ser un postre espeso y reconfortante.', 6, 3, 'https://www.recetasnestle.com.co/sites/default/files/srh_recipes/8530c5f4d34a92cbcdc22c3c9ce74251.jpg', 'Maíz, panela, leche, canela, vainilla, sal'),
(22, 'Mondongo', '\r\nEl Mondongo es un plato típico de la gastronomía colombiana y de otras regiones de América Latina. Se caracteriza por ser un guiso elaborado con ingredientes como mondongo (callos de res), carne de cerdo, chorizo, maíz, papa, zanahoria, pimiento, cebolla, ajo y condimentos. Su preparación puede variar según la región, y cada versión tiene su toque especial.', 4, 3, 'https://www.recetasnestle.com.co/sites/default/files/styles/crop_article_banner_desktop_nes/public/2021-11/Recetas_1_Historia-de-la-sopa-de-mondongo-Colombiana_1200x500_3.jpg?itok=uyfg2L4A', 'Mondongo, cebolla, ajo, cebollín, pimientos, tomate, zanahorias, papas, yuca, cilantro, perejil, comino, achiote, laurel, pimienta, arroz'),
(23, 'Patacones', 'Los patacones son un popular aperitivo colombiano y de otras regiones latinoamericanas, conocidos por su deliciosa textura crujiente por fuera y su suave interior. También se les conoce como tostones en algunos lugares. Están hechos a base de plátanos verdes (plátanos machos o plátanos pintoncillos) y se sirven comúnmente como acompañamiento o aperitivo.', 2, 28, 'https://imag.bonviveur.com/tostones-o-patacones-de-platano-macho.jpg', 'Plátanos verdes, aceite para freír'),
(24, 'Fritanga', 'La fritanga es un plato típico de la gastronomía colombiana que se caracteriza por ser una mezcla de diferentes carnes y vísceras fritas, acompañadas por papas, arepas, plátano maduro y otros ingredientes. Es un festín culinario popular en diferentes regiones del país y puede variar en su preparación según la zona.', 3, 25, 'https://www.comedera.com/wp-content/uploads/2021/10/fritanga-colombiana.jpg', 'Chicharrón, morcilla, longaniza, papa criolla, papa sabanera, yuca, plátano maduro, arepa, hogao'),
(25, 'Sudado de Pollo', '\r\nEl Sudado de Pollo es un plato tradicional colombiano que destaca por su sabor y su preparación. Se caracteriza por ser una especie de guiso o estofado de pollo, cocinado lentamente con diversos ingredientes que le proporcionan un gusto delicioso y una textura jugosa.', 5, 12, 'https://d2j9trpqxd6hrn.cloudfront.net/uploads/recipe/picture/1186/pollo_sudado_2.webp', 'Pollo, tomate, cebolla, ajo, pimiento, zanahoria, arvejas, cilantro, comino, achiote, caldo de pollo, sal, pimienta');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamentos`
--

CREATE TABLE `departamentos` (
  `id_departamento` int(11) NOT NULL,
  `nombre_departamento` varchar(50) NOT NULL,
  `capital` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `departamentos`
--

INSERT INTO `departamentos` (`id_departamento`, `nombre_departamento`, `capital`) VALUES
(2, 'Amazonas', 'Leticia'),
(3, 'Antioquia', 'Medellín'),
(4, 'Arauca', 'Arauca'),
(5, 'Caldas', 'Manizales'),
(6, 'Caquetá', 'Florencia'),
(7, 'Casanare', 'Yopal'),
(8, 'Cauca', 'Popayán'),
(9, 'Cesar', 'Valledupar'),
(10, 'Chocó', 'Quibdó'),
(11, 'Córdoba', 'Montería'),
(12, 'Cundinamarca', 'Bogotá'),
(13, 'Guainía', 'Puerto Inírida'),
(14, 'Guaviare', 'San José del Guaviare'),
(15, 'Huila', 'Neiva'),
(16, 'La Guajira', 'Riohacha'),
(17, 'Magdalena', 'Santa Marta'),
(18, 'Meta', 'Villavicencio'),
(19, 'Nariño', 'Pasto'),
(20, 'Norte de Santander', 'Cúcuta'),
(21, 'Putumayo', 'Mocoa'),
(22, 'Quindío', 'Armenia'),
(23, 'Risaralda', 'Pereira'),
(24, 'San Andrés y Providencia', 'San Andrés'),
(25, 'Santander', 'Bucaramanga'),
(26, 'Sucre', 'Sincelejo'),
(27, 'Tolima', 'Ibagué'),
(28, 'Valle del Cauca', 'Cali'),
(29, 'Vaupés', 'Mitú'),
(30, 'Vichada', 'Puerto Carreño');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `comidas`
--
ALTER TABLE `comidas`
  ADD PRIMARY KEY (`id_comidas`),
  ADD KEY `id_categoria` (`id_categoria`),
  ADD KEY `id_departamento` (`id_departamento`);

--
-- Indices de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  ADD PRIMARY KEY (`id_departamento`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `comidas`
--
ALTER TABLE `comidas`
  MODIFY `id_comidas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  MODIFY `id_departamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comidas`
--
ALTER TABLE `comidas`
  ADD CONSTRAINT `comidas_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`),
  ADD CONSTRAINT `comidas_ibfk_2` FOREIGN KEY (`id_departamento`) REFERENCES `departamentos` (`id_departamento`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
