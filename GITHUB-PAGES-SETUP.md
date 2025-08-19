# 🚀 Configuración para GitHub Pages

## El Problema
GitHub Pages solo puede servir sitios estáticos (HTML, CSS, JS), no aplicaciones con servidor como Express.

## La Solución
He creado una configuración especial que convierte tu proyecto React en un sitio estático.

## 📋 Pasos para Desplegar

### 1. Subir a GitHub
```bash
# En tu computadora, después de clonar
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Construir para GitHub Pages
```bash
# Ejecutar en tu computadora
node build-github.js
```

Esto creará una carpeta `docs/` con todos los archivos estáticos.

### 3. Subir los archivos construidos
```bash
git add docs/
git commit -m "Add GitHub Pages build"
git push origin main
```

### 4. Activar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Clic en **Settings**
3. Scroll hasta **Pages** (menú izquierdo)
4. En **Source** selecciona **"Deploy from a branch"**
5. En **Branch** selecciona **"main"**
6. En **Folder** selecciona **"/docs"**
7. Clic en **Save**

### 5. Esperar y Ver
- GitHub tardará 2-5 minutos en procesar
- Tu sitio estará en: `https://tu-usuario.github.io/nombre-repositorio`

## 🔧 Archivos Creados

- **`vite.config.github.ts`** - Configuración para build estático
- **`build-github.js`** - Script automático de construcción
- **`docs/.nojekyll`** - Evita problemas con archivos especiales

## ✅ Diferencias con la Versión Local

**Local (con servidor):**
- ✅ Backend Express funcional
- ✅ Base de datos PostgreSQL
- ✅ API endpoints
- ✅ Sesiones de usuario

**GitHub Pages (solo frontend):**
- ✅ Toda la interfaz visual funciona
- ✅ Animaciones y componentes React
- ✅ Responsive design
- ✅ Portfolio, testimonios, contacto
- ❌ No hay backend (no se necesita para mostrar la empresa)

## 🎯 Resultado Final

Tu sitio web de Palacio Remodeling se verá **idéntico** en GitHub Pages con:
- ✅ Navegación fluida
- ✅ Hero section animado
- ✅ Galería de proyectos interactiva
- ✅ Carrusel de testimonios
- ✅ Formulario de contacto (visual)
- ✅ Responsive en móvil/tablet/desktop
- ✅ Todas las animaciones y efectos

**Perfect para mostrar la empresa a clientes!**