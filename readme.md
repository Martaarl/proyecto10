# 🐾 FurTravellers

## 🌍 Descripción

FurTravellers es una aplicación full-stack desarrollada para compartir, explorar y guardar publicaciones relacionadas con viajes y experiencias.

La aplicación permite a los usuarios registrarse, iniciar sesión, interactuar con publicaciones y guardar sus posts favoritos en un perfil personalizado.

Además, incluye un sistema de comentarios con moderación mediante roles de administrador y un diseño responsive pensado para ofrecer una buena experiencia de usuario tanto en escritorio como en dispositivos móviles.

---

# 🚀 Características principales

## 🔐 Autenticación y usuarios

- Registro de usuarios
- Inicio y cierre de sesión
- Autologin tras registro
- Persistencia de sesión mediante JWT
- Gestión de perfil de usuario
- Roles de usuario y administrador

---

## 📝 Publicaciones

- Visualización dinámica de posts
- Diseño responsive tipo card
- Vista detalle de cada publicación
- Sistema de favoritos
- Animaciones y hover effects

---

## 💬 Comentarios

- Creación de comentarios en publicaciones
- Validación de comentarios vacíos
- Sistema de filtrado de vocabulario malsonante
- Comentarios vinculados al usuario creador
- Visualización del nombre del usuario mediante populate de MongoDB

---

## ⭐ Sistema de moderación

Los usuarios administradores pueden destacar comentarios mediante un sistema de “SuperLike”.

Características:

- Solo visible para administradores
- Destacado visual del comentario
- Sistema dinámico activable/desactivable
- Gestión de permisos mediante roles

---

# 🎨 Diseño y experiencia de usuario

La interfaz se ha desarrollado cuidando especialmente:

- Responsive design
- Organización visual
- Consistencia de colores y componentes
- Feedback visual para acciones del usuario
- Estados de carga y mensajes de error
- Navegación sencilla e intuitiva

---

# 🔍 SEO y accesibilidad

La aplicación incluye mejoras básicas de SEO y accesibilidad:

- Títulos dinámicos
- Meta description
- Estructura semántica
- Uso de atributos alt en imágenes
- Navegación clara

---

# 🧠 Tecnologías utilizadas

## 

- JavaScript Vanilla
- HTML5
- CSS3
- Arquitectura basada en componentes

## Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- Bcrypt
- Multer
- Cloudinary

---

# 📁 Estructura del proyecto

```bash
/
 ├ public/   
 └ src/
    ├ components/
    ├ pages/
    ├ styles/
    └ utils/

backend/
 ├ controllers/
 ├ middlewares/
 ├ models/
 ├ routes/
 ├ config/
 └ utils/
```

---

# ⚙️ Instalación

## 1️⃣ Clonar repositorio

```bash
git clone <https://github.com/Martaarl/proyecto10.git>
```

---

## 2️⃣ Instalar 

```bash
cd 
npm install
```

---

## 3️⃣ Instalar backend

```bash
cd backend
npm install
```

---

## 4️⃣ Variables de entorno

Crear archivo `.env` en backend con las variables proporcionadas por privado:

```env
MONGO_URI=...
JWT_SECRET=...
CLOUDINARY_NAME=...
CLOUDINARY_KEY=...
CLOUDINARY_SECRET=...
```

---

## 5️⃣ Ejecutar proyecto

### Backend

```bash
npm run dev
```

### 

Abrir con Live Server o servidor local.

---

# 📸 Funcionalidades destacadas

## ❤️ Favoritos

Los usuarios pueden guardar publicaciones favoritas y acceder a ellas desde su perfil.

---

## 💬 Sistema de comentarios

Cada comentario queda asociado al usuario autenticado y se renderiza dinámicamente.

---

## ⭐ SuperLike de administrador

Los administradores pueden destacar comentarios relevantes mediante un sistema visual especial.

---

# 💡 Mejoras futuras

- Paginación
- Edición de perfil
- Sistema de respuestas en comentarios
- Deploy completo en producción

---

# 🤖 Ayuda de IA

Este proyecto ha utilizado IA para la corrección de errores, ayuda con la maquetación con v0 by Vercel, y mejora del SEO.

---

# 👩‍💻 Autor

Desarrollado por Marta Ramírez Linares.

---

# 🐾 FurTravellers

Proyecto desarrollado con foco en:

- Arquitectura organizada
- Escalabilidad
- Experiencia de usuario
- Buenas prácticas  y backend
- Diseño responsive
- Interacción dinámica
