![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![Mongoose](https://img.shields.io/badge/Mongoose-8.x-orange)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-blue)
![React](https://img.shields.io/badge/React-18.x-violet)
![React DOM](https://img.shields.io/badge/ReactDOM-18.x-orange)
![React DOM](https://img.shields.io/badge/ReactRouterDOM-18.x-green)
![Axios](https://img.shields.io/badge/Axios-1.x-blue)
![Vite](https://img.shields.io/badge/Vite-2.x-yellow)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-2.x-blueviolet)

# Proyecto Final - Épica Tramo III -  Full Stack

## Presentación del Proyecto: Plataforma Interactiva para la Comunidad Viajera

## Descripción del Proyecto

Con el objetivo de unir a entusiastas de los viajes, proponemos una aplicación web diseñada para crear un espacio interactivo donde los usuarios puedan intercambiar vivencias únicas. Esta plataforma permite a los participantes registrarse, iniciar sesión, compartir sus experiencias de viaje a través de publicaciones y participar activamente mediante comentarios en las contribuciones de otros viajeros.

## Desafío Tecnológico: Desarrollo de una Interfaz Intuitiva y Funcional

La tarea central del proyecto consiste en la implementación de tecnologías de vanguardia en programación web, como **Node.js, Express, MongoDb y Mongoose**, para lograr una interfaz que sea intuitiva y funcional. La utilización de **React** garantiza un desarrollo ágil, asegurando la eficiente persistencia de los datos y proporcionando una experiencia de usuario atractiva.

## Personalización Estética con Tailwind CSS:

Para asegurar una experiencia visualmente atractiva y personalizada, se brindará a los usuarios la capacidad de personalizar la estética de la plataforma. Utilizando herramientas como **Tailwind CSS**, se permitirá una adaptación precisa del diseño del espacio digital a los requisitos y preferencias específicas de la comunidad de viajeros. Esta metodología ágil de desarrollo CSS facilitará una personalización eficiente y flexible, garantizando que la plataforma refleje de manera única la diversidad y el estilo de cada usuario.

## Tecnologías Utilizadas (MERN Stack)

## <p align="center"><strong>Backend</strong></p>

- **MongoDB:** Sistema de gestión de bases de datos NoSQL (No relacional) que ofrece una solución flexible y escalable para almacenar y recuperar datos de manera eficiente.
- **Express:** Framework web robusto y minimalista diseñado para Node.js, facilitando la construcción de aplicaciones web y APIs.
- **Node.js:** Entorno de ejecución del lado del servidor que permite ejecutar JavaScript de manera eficiente y escalable, proporcionando un ambiente ideal para construir aplicaciones web y servicios backend.
- **Cors:** Middleware que habilita el intercambio de recursos entre diferentes dominios, mejorando la interoperabilidad en entornos de desarrollo web distribuidos.
- **Dotenv:** Herramienta que facilita la carga de variables de entorno desde un archivo .env, mejorando la configuración y seguridad en el manejo de configuraciones sensibles.
- **Helmet:** Middleware diseñado para Express que establece headers HTTP de manera segura, mejorando la protección y seguridad de la aplicación.
- **Morgan:** Middleware que registra de manera detallada las solicitudes HTTP, proporcionando información valiosa para el monitoreo y depuración de la aplicación.
- **Express Validator:** Middleware que simplifica la validación de datos en aplicaciones Express, asegurando la integridad de la información procesada.
- **JSON Web Token (JWT):** Herramienta utilizada para autenticación y autorización, proporcionando un método seguro para transmitir información entre partes confiables en forma de tokens codificados.

## Requisitos:
- Instalacion de Node.js 
- Instalar MongoDB Compas
- Ejecutar los servicios `mongod` y `mongocompass`.

## Configuración Inicial

1. Cambia el nombre del archivo `.example.env` por `.env`.

2. En la terminal, navega a la carpeta backend:
    ```bash
    cd backend
    ```

3. Instala las dependencias con el siguiente comando:
    ```bash
    npm i -y
    ```

4. Ejecuta la aplicación en la carpeta /backend con el siguiente comando:
    ```bash
    npm run dev
    ```

5. Abre MongoDB Compass y asegúrate de que el servicio `mongod.exe` esté en ejecución.

## Realizar Peticiones con Thunder Client:

1. Agregar un Comentario a un Post Específico

POST localhost:3000/api/comments/:postId

Descripción: Agrega un comentario a un post específico.
Parámetros: :postId es el ID del post al que se quiere agregar el comentario.
Uso: Envia una solicitud POST a esta ruta con el cuerpo de la solicitud que contiene la información del comentario.

2. Crear un Nuevo Comentario Independiente

POST localhost:3000/api/comments

Descripción: Crea un nuevo comentario independiente.
Uso: Envia una solicitud POST a esta ruta con el cuerpo de la solicitud que contiene la información del comentario.

3. Crear un Nuevo Post

POST localhost:3000/api/post

Descripción: Crea un nuevo post.
Uso: Envia una solicitud POST a esta ruta con el cuerpo de la solicitud que contiene la información del nuevo post.

4. Iniciar Sesión de un Usuario Existente

POST localhost:3000/api/login

Descripción: Inicia sesión de un usuario existente.
Uso: Envia una solicitud POST a esta ruta con las credenciales del usuario (por ejemplo, nombre de usuario y contraseña) en el cuerpo de la solicitud.

5. Obtener el Perfil del Usuario Autenticado

GET localhost:3000/api/profile

Descripción: Obtiene el perfil del usuario autenticado.
Uso: Realiza una solicitud GET a esta ruta para obtener información sobre el perfil del usuario autenticado.

6. Registrar un Nuevo Usuario

POST localhost:3000/api/register

Descripción: Registra un nuevo usuario.
Uso: Envia una solicitud POST a esta ruta con la información necesaria para registrar un nuevo usuario.

7. Cerrar Sesión del Usuario Autenticado

POST localhost:3000/api/logout

Descripción: Cierra sesión del usuario autenticado.
Uso: Envia una solicitud POST a esta ruta para cerrar sesión del usuario autenticado.

## Tecnologías Utilizadas

## <p align="center"><strong>Frontend</strong></p>

- **React:** Biblioteca de JavaScript para la creación eficiente de interfaces de usuario interactivas y dinámicas.
- **Vite:** Bundler rápido diseñado específicamente para proyectos React, optimizando la velocidad de desarrollo.
- **React-DOM:** Facilita la manipulación eficaz del Modelo de Objetos del Documento (DOM) en aplicaciones construidas con React.
- **React-Router-DOM:** Proporciona herramientas poderosas para gestionar la navegación de manera declarativa en aplicaciones React.
- **Tailwind CSS:** Framework de utilidades de diseño que ofrece un enfoque altamente modular y personalizable mediante la asignación directa de clases predefinidas para construir estilos y componentes de manera eficiente en aplicaciones web.

1 - Creamos el proyecto Vite
```bash
npm create vite
```
Seleccionamos React y javascript

2 - Ingresamos al directorio 
```bash
  cd frontend
 ```

3. Ejecuta la aplicación en la carpeta /frontend con el siguiente comando:
    ```bash
    npm run dev
    ```
 4. Instala la biblioteca de tailwindcss para Vite

```bash
npm create vite@latest my-project -- --template react
cd my-project
```
