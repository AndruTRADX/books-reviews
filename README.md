# **Instalación y Ejecución del Proyecto**

Este proyecto utiliza [Next.js](https://nextjs.org/) y ha sido creado con **`[create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)`**.

## **Comenzando**

Para empezar, sigue los pasos a continuación:

1. **Clona el Repositorio:**
    
    ```bash
    bashCopy code
    git clone https://tu-repositorio.git
    cd nombre-del-proyecto
    
    ```
    
2. **Instala las Dependencias:**
    
    ```bash
    bashCopy code
    npm install
    # o
    yarn
    # o
    pnpm install
    # o
    bun install
    
    ```
    
3. **Ejecuta el Servidor de Desarrollo:**
    
    ```bash
    bashCopy code
    npm run dev
    # o
    yarn dev
    # o
    pnpm dev
    # o
    bun dev
    
    ```
    
4. Abre [http://localhost:3000](http://localhost:3000/) en tu navegador para ver el resultado.

## **Modificando la Página**

Puedes comenzar a editar la página principal modificando el archivo **`app/page.tsx`**. La página se actualizará automáticamente mientras edites el archivo.

## **Optimización de Fuentes**

Este proyecto utiliza **`[next/font](https://nextjs.org/docs/basic-features/font-optimization)`** para optimizar y cargar automáticamente la fuente Inter, una fuente personalizada de Google.

## **Aprende Más**

Para obtener más información sobre Next.js, consulta los siguientes recursos:

- [Documentación de Next.js](https://nextjs.org/docs) - aprende sobre las características y la API de Next.js.
- [Aprende Next.js](https://nextjs.org/learn) - un tutorial interactivo de Next.js.

También puedes revisar [el repositorio de Next.js en GitHub](https://github.com/vercel/next.js/) - ¡tus comentarios y contribuciones son bienvenidos!

## **Despliegue en Vercel**

La forma más sencilla de desplegar tu aplicación Next.js es mediante la [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) de los creadores de Next.js.

Consulta nuestra [documentación de despliegue de Next.js](https://nextjs.org/docs/deployment) para obtener más detalles.

# Proyecto Controlbox

# Título del proyecto:

Aplicación de reseñas de libros

## Descripción del proyecto:

Cree una aplicación de reseñas de libros que permita a los usuarios navegar, buscar y reseñar libros. La aplicación debe permitir a los usuarios registrarse e iniciar sesión con sus credenciales. Una vez que hayan iniciado sesión, los usuarios deberían poder navegar por una lista de libros, ver detalles de un libro, dejar reseñas para un libro y ver las reseñas dejadas por otros usuarios.

La aplicación puede usar las siguientes tecnologías, pero si te sientes más cómodo con otras tecnologías que no se enumeran, úsalas:

Frontend:

- HTML, CSS, Bootstrap/Tailwind CSS
- React o Angular, Typescript, Next.js/Node.js
- REST APIs y GraphQL

Backend:

- PostgreSQL, MySQL
- Go, C#, .NET
- Bases de datos sin servidor como PlanetScale, AWS

Implementación:

- Alojamiento web sin servidor como Vercel
- CI/CD: Github

## Requisitos:

1. La aplicación debe tener una página de inicio que muestre una lista de libros. Los usuarios deben poder navegar por la lista de libros, buscar libros por título, autor o categoría.
2. Los usuarios deben poder ver los detalles de un libro, incluyendo su título, autor, categoría y resumen.
3. Los usuarios deben poder dejar reseñas para un libro, incluyendo una calificación del 1 al 5 y un comentario en texto.
4. Los usuarios deben poder ver las reseñas dejadas por otros usuarios, ordenadas por las más recientes.
5. La aplicación debe tener autenticación y autorización de usuarios. Los usuarios deben poder registrarse para obtener una cuenta, iniciar sesión con sus credenciales y cerrar sesión. Solo los usuarios autenticados deben poder dejar reseñas para un libro.
6. La aplicación debe ser receptiva y accesible.
7. La aplicación debe ser implementada en una plataforma de alojamiento y tener un pipeline de CI/CD configurado.

## Requisitos adicionales (opcional):

1. Los usuarios deben poder filtrar los libros por categoría.
2. Los usuarios deben poder ver sus propias reseñas y editarlas o eliminarlas.
3. Los usuarios deben poder ver su propio perfil con su nombre de usuario, correo electrónico y foto de perfil.
4. Los usuarios deben poder restablecer su contraseña si la olvidan.

## Para entregar:

1. Código fuente de la aplicación, alojado en un repositorio Git público (por ejemplo, GitHub, Bitbucket).
2. Un archivo README con instrucciones sobre cómo ejecutar la aplicación localmente e implementarla en una plataforma de alojamiento.
3. Una demostración en vivo de la aplicación alojada en una plataforma de alojamiento.