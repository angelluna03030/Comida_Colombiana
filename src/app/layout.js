import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Comida Colombiana',
  description: 'Bienvenido a Sabor Colombiano, tu destino en línea para explorar y disfrutar de la rica y diversa cocina de Colombia. Sumérgete en la autenticidad de los sabores colombianos a través de nuestras recetas tradicionales.',
  keywords: 'comida colombiana, recetas colombianas, cocina colombiana, platos típicos colombianos',
  author: 'Tu Nombre o el Nombre de tu Sitio',
 
  url: '', // URL completa de la página
  type: 'página web', // Tipo de contenido (página web, artículo, etc.)
  siteName: 'Comida Colombiano', // Nombre de tu sitio

  publishedDate: '4/01/2024', // Fecha de publicación del contenido
  modifiedDate: '4/01/2024', // Fecha de última modificación del contenido
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
