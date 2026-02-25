# Ópalo Suites - El Arte de la Seducción

Aplicación web React completa para la gestión de un hotel de lujo con panel administrativo.

## 🚀 Características

- **Página Principal**: Diseño elegante y moderno con secciones de suites, servicios y filosofía
- **Sistema de Reservaciones**: Formulario completo para realizar reservaciones
- **Panel Administrativo**: Gestión completa de suites, servicios y reservaciones
- **Autenticación**: Sistema de login seguro para el panel administrativo
- **Persistencia de Datos**: Los datos se guardan en localStorage
- **Diseño Responsive**: Adaptado para todos los dispositivos

## 📋 Requisitos Previos

- Node.js (versión 14 o superior)
- npm o yarn

## 🛠️ Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm start
```

3. Abre tu navegador en `http://localhost:3000`

## 🔐 Credenciales del Panel Administrativo

- **Usuario**: `admin`
- **Contraseña**: `admin123`

Para acceder al panel administrativo, navega a `/admin` y usa las credenciales anteriores.

## 📁 Estructura del Proyecto

```
Opalo/
├── public/
│   └── index.html
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── SuitesGallery.js
│   │   ├── Philosophy.js
│   │   ├── Services.js
│   │   └── Footer.js
│   ├── pages/              # Páginas principales
│   │   ├── Home.js
│   │   ├── Reservar.js
│   │   └── Admin/
│   │       ├── Login.js
│   │       ├── Dashboard.js
│   │       ├── SuitesManagement.js
│   │       ├── ServicesManagement.js
│   │       └── ReservationsManagement.js
│   ├── context/            # Context API para estado global
│   │   └── AppContext.js
│   ├── App.js              # Componente principal
│   ├── index.js            # Punto de entrada
│   └── index.css           # Estilos globales con Tailwind
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Funcionalidades del Panel Administrativo

### Gestión de Suites
- Crear nuevas suites
- Editar suites existentes
- Eliminar suites
- Gestionar disponibilidad
- Establecer precios

### Gestión de Servicios
- Crear nuevos servicios
- Editar servicios existentes
- Eliminar servicios
- Seleccionar iconos personalizados
- Establecer precios

### Gestión de Reservaciones
- Ver todas las reservaciones
- Ver detalles completos de cada reservación
- Eliminar reservaciones
- Información de huéspedes y servicios contratados

## 🎯 Tecnologías Utilizadas

- **React 18**: Biblioteca de JavaScript para construir interfaces
- **React Router**: Enrutamiento para aplicaciones de una sola página
- **Tailwind CSS**: Framework de CSS utility-first
- **Context API**: Gestión de estado global
- **LocalStorage**: Persistencia de datos en el navegador

## 📝 Notas

- Los datos se guardan en el localStorage del navegador
- Las imágenes utilizan URLs externas (puedes cambiarlas por imágenes locales)
- El diseño está optimizado para modo oscuro
- La aplicación es completamente funcional y lista para usar

## 🚀 Build para Producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Esto generará una carpeta `build` con los archivos optimizados listos para desplegar.

## 📄 Licencia

Este proyecto es privado y está destinado únicamente para uso de Ópalo Suites.

