## README

FE: https://next-guitar.vercel.app/
BE: https://shrouded-fortress-27840.herokuapp.com/admin

El funcionamiento es el siguiente.
Tenemos dos proyectos, el de frontend que es con next.js y el de backend que se hace directamente con el create-strapi-app. Luego le haremos un deploy en netlify o vercel y el servidor en heroku.

- BACKEND - ABRIR PROYECTO
  Por qué necesitamos cloudinary si ya tenemos suficiente con la Media Library de Strapi? Porque Heroku no te deja hacer deploy de imágenes, por lo menos en el plan gratuito, así que a joderse. Cloudinary te deja subir hasta 25 Gigabites gratis de imágenes. Para instalarlo hemos tenido que abrir la terminal del backend (guitarla-strapi) en vs code e instalar https://www.npmjs.com/package/strapi-provider-upload-cloudinary
  Luego crear el config en plugins.js y crear el archivo .env y pasarle las claves de Cloudinary.

Por ahora parece top en cuanto a tema de performance porque una vez funcione se puede ver que todo lo que se suba a Strapi pasa directamente a Cloudinary.
Para ver la Api, nos vamos en Strapi a opciones, a roles, y en la de public le damos a get y findone dentro de la colección en la que estemos.

Ventaja del componente Image de next.js —> responsive con layout=“responsive” y lazyloading directo

Variables de entorno para que sean accessibles en el servidor y cliente respectivamente. Se necesita poner NEXT_PUBLIC antes del nombre de la otra.

API_URL=http://localhost:1337
NEXT_PUBLIC_API_URL=http://localhost:1337

Lo de getServerSideProps y todo eso no funciona desde los componentes, solo desde pages y urls dinamicas.

FRONTEND - DEV

Si necesitamos una variable global que vaya a cambiar, como es el caso de los productos, que no solo tienen que estar disponibles en la pagina del carro, sino que de verdad deben tenerse en cuenta en todo momento, podemos poner el useState en la \_app.js

https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/learn/lecture/30005246#questions
