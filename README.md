# 🎨 GenesisPixel | Demos

> 🚀 Una plataforma visual interactiva para aprender CSS y efectos web modernos

---

## 📋 Descripción

Un sitio web de demos que explora diferentes técnicas de CSS y desarrollo frontend a través de capítulos visuales e interactivos. Cada capítulo demuestra un concepto diferente con ejemplos prácticos y efectos visuales impresionantes.

---

## 🧩 Capítulos

| # | 📖 Capítulo | 🎯 Nivel | 🎨 Color |
|---|-----------|---------|---------|
| 1 | **Transitions** | 🟢 Principiante | 🟣 Púrpura |
| 2 | **Transform** | 🟡 Intermedio | 🟢 Verde |
| 3 | **Keyframes** | 🟠 Avanzado | 🟠 Naranja |
| 4 | **Interacciones** | 🔴 Experto | 🔵 Azul |
| 5 | **Three.js** | 💜 3D | 💗 Rosa |
| 6 | **Shaders** | ✨ Avanzado | 💛 Amarillo |

---

## 🛠️ Tecnologías

- 📄 **HTML5** - Estructura semántica
- 🎨 **CSS3** - Grid, Flexbox, Custom Properties
- ✏️ **Afronaut Font** - Tipografía personalizada para títulos
- 🖼️ **SVG** - Iconos y efectos gooey con filtros
- 🎭 **Filtros SVG** - Efectos de fusión (goo) únicos por capítulo

---

## 🎨 Características

- 🌟 **Navbar personalizada** con icono de estrellas y líneas de carga
- 🎭 **Efecto Goo SVG** - Filtros de fusión con gradientes
- 📐 **Grid de 3 columnas** - Layout responsivo con divisores
- 🎯 **Navegación por capítulos** - Botones circulares con colores únicos
- 🖼️ **11 imágenes SVG** por capítulo con diferentes composiciones
- 🎨 **Colores personalizados** por capítulo con CSS Variables
- ⚡ **Transiciones suaves** en interacciones

---

## 📁 Estructura

```
genesis-pixel-demos/
├── 📄 index.html          # Página principal
├── 📄 chapter1.html       # Transitions
├── 📄 chapter2.html       # Transform
├── 📄 chapter3.html       # Keyframes
├── 📄 chapter4.html       # Interacciones
├── 📄 chapter5.html       # Three.js
├── 📄 chapter6.html       # Shaders
├── 🎨 css/
│   └── 📄 base.css        # Estilos principales
├── 🖼️ img/
│   ├── 🖼️ favicon.png     # Icono del sitio
│   ├── ⭐ stars.svg       # Icono navbar
│   └── 🖼️ svg-*.png       # Imágenes de capítulos
└── 📄 README.md           # Este archivo
```

---

## 🚀 Cómo Usar

1. 📥 Clona el repositorio
2. 📂 Abre `index.html` en tu navegador
3. 🖱️ Navega entre capítulos usando los botones circulares
4. 🎨 Explora los diferentes efectos visuales

---

## 🎨 Efecto Goo SVG

Cada capítulo tiene un efecto de fusión (goo) único:

```svg
<filter id="goo">
  <feGaussianBlur stdDeviation="6" result="blur"/>
  <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"/>
  <feComposite operator="atop"/>
</filter>
```

---

## 📱 Responsive

- 🖥️ Desktop: Layout completo con grid de 3 columnas
- 📱 Mobile: Adaptación automática
- 🎯 Navegación fija en esquina inferior derecha

---

## 🎯 Paleta de Colores

| Color | Código | Uso |
|-------|--------|-----|
| 🟤 Beige | `hsla(36, 31%, 90%, 1)` | Fondo principal |
| 🟢 Verde oscuro | `hsla(158, 23%, 18%, 1)` | Texto y navbar |
| 🟣 Púrpura | `rgb(205, 148, 235)` | Cap 1 - Transitions |
| 🟢 Verde | `rgb(174, 226, 205)` | Cap 2 - Transform |
| 🟠 Naranja | `rgb(227, 188, 155)` | Cap 3 - Keyframes |
| 🔵 Azul | `rgb(188, 225, 251)` | Cap 4 - Interacciones |
| 💗 Rosa | `#FF96F9` | Cap 5 - Three.js |
| 💛 Amarillo | `#FFC555` | Cap 6 - Shaders |

---

## 👨‍💻 Autor

**GenesisPixel** - 💻 Desarrollo Web Creativo

---

## 📄 Licencia

© 2026 GenesisPixel. Todos los derechos reservados.

---

> 💡 *Hecho con ❤️ y mucho CSS*
