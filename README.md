# Blog Project

Este es un proyecto de blog desarrollado para práctica personal. Utiliza Node.js con Express para el backend y Vite para el frontend. Los usuarios pueden registrarse, crear, leer, actualizar y eliminar publicaciones y categorías.

## Tabla de Contenido

- [Instalación](#instalación)
- [Uso](#uso)
- [Rutas del API](#rutas-del-api)
- [Rutas del Frontend](#rutas-del-frontend)
- [Dependencias](#dependencias)
- [Licencia](#licencia)

## Instalación

### Backend

1. Clonar el repositorio:
   ```sh
   git clone https://github.com/tu-usuario/tu-repositorio-backend.git
   cd tu-repositorio-backend
   ```
2. Instalar dependencias:
   ```sh
   npm install
   ```
3. Configurar variables de entorno:
   Crea un archivo `.env` con las siguientes variables:

   ```env
   PORT=3000
   MONGO_URL=tu_mongo_url
   JWT_SECRET=tu_secreto
   ```

4. Iniciar el servidor:
   ```sh
   npm start
   ```

### Frontend

1. Clonar el repositorio:
   ```sh
   git clone https://github.com/tu-usuario/tu-repositorio-frontend.git
   cd tu-repositorio-frontend
   ```
2. Instalar dependencias:

   ```sh
   npm install
   ```

3. Iniciar la aplicación:
   ```sh
   npm run dev
   ```

## Uso

1. Navegar a `http://localhost:3000` para ver el backend.
2. Navegar a `http://localhost:3001` para ver el frontend.

## Rutas del API

### Usuarios

- `POST /api/users/register`: Registro de nuevos usuarios.
- `POST /api/users/login`: Inicio de sesión de usuarios.
- `GET /api/users/profile`: Obtener perfil de usuario.
- `PUT /api/users/profile`: Actualizar perfil de usuario.
- `DELETE /api/users/:id`: Eliminar usuario.

### Posts

- `POST /api/posts`: Crear un nuevo post.
- `GET /api/posts`: Obtener todos los posts.
- `GET /api/posts/:id`: Obtener un post por su ID.
- `PUT /api/posts/:id`: Actualizar un post por su ID.
- `DELETE /api/posts/:id`: Eliminar un post por su ID.

### Categorías

- `POST /api/categories`: Crear una nueva categoría.
- `GET /api/categories`: Obtener todas las categorías.
- `GET /api/categories/:id`: Obtener una categoría por su ID.
- `PUT /api/categories/:id`: Actualizar una categoría por su ID.
- `DELETE /api/categories/:id`: Eliminar una categoría por su ID.

### Imágenes

- `POST /api/upload`: Cargar un archivo de imagen.

## Rutas del Frontend

### Páginas principales

- `/`: Página de inicio (Home).
- `/register`: Página de registro (visible solo si el usuario no está autenticado).
- `/login`: Página de inicio de sesión (visible solo si el usuario no está autenticado).
- `/write`: Página para crear un nuevo post (visible solo si el usuario está autenticado).
- `/settings`: Página de configuración del usuario (visible solo si el usuario está autenticado).
- `/post/:postId`: Página de visualización de un post individual.

### Componentes principales

- `TopBar`: Barra superior de navegación.
- `Home`: Página principal que muestra los posts.
- `Register`: Página de registro de usuarios.
- `Login`: Página de inicio de sesión de usuarios.
- `Write`: Página para crear y editar posts.
- `Settings`: Página de configuración del perfil de usuario.
- `Single`: Página de visualización de un post específico.

## Dependencias

### Backend

- bcrypt: ^5.1.0
- cors: ^2.8.5
- dotenv: ^16.3.1
- express: ^4.18.2
- mongoose: ^7.3.1
- multer: ^1.4.5-lts.1
- nodemon: ^2.0.22
- path: ^0.12.7

### Frontend

- axios: ^1.4.0
- react: ^18.2.0
- react-dom: ^18.2.0
- react-router-dom: ^6.14.1

### Dependencias de desarrollo (Frontend)

- @types/react: ^18.0.37
- @types/react-dom: ^18.0.11
- @vitejs/plugin-react: ^4.0.0
- eslint: ^8.38.0
- eslint-plugin-react: ^7.32.2
- eslint-plugin-react-hooks: ^4.6.0
- eslint-plugin-react-refresh: ^0.3.4
- vite: ^4.3.9

## Licencia

Este proyecto está bajo la licencia ISC. Ver el archivo [LICENSE](LICENSE) para más detalles.
