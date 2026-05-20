# ByteBrief ⚡

> Aplicación de noticias tecnológicas con carga dinámica, construida con React + Vite.

---

## 📌 Descripción

**ByteBrief** es una aplicación web que consume una API de noticias para mostrar artículos del mundo tech en tiempo real. El foco del proyecto estuvo en la experiencia de carga: mientras los datos llegan, se muestran **Skeleton Loaders** animados que evitan el efecto de "pantalla en blanco", mejorando la percepción de velocidad.

---

## ✨ Funcionalidades

- 📰 Consumo de API externa para noticias en tiempo real
- ⏳ Skeleton Loaders mientras se cargan los datos
- ⚙️ Manejo de estados de carga y error con hooks de React
- 📱 Diseño responsivo con componentes de UI

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| React.js | Librería principal de UI |
| Vite | Bundler y entorno de desarrollo |
| JavaScript (ES6+) | Lógica de la aplicación |
| CSS / Librería de UI | Estilos y componentes visuales |
| `useEffect` / `useState` | Manejo de ciclo de vida y estado |
| API de noticias | Fuente de datos externos |

---

## 🚀 Cómo correr el proyecto localmente

```bash
# 1. Clona el repositorio
git clone https://github.com/Keyli-umd/Bytebrief.git

# 2. Entra al proyecto
cd Bytebrief

# 3. Instala las dependencias
npm install

# 4. Inicia el servidor de desarrollo
npm run dev
```

Abre tu navegador en `http://localhost:5173`

---

## 📂 Estructura del proyecto

```
Bytebrief/
├── src/
│   ├── components/     # Componentes reutilizables (cards, skeletons...)
│   ├── hooks/          # Custom hooks si aplica
│   ├── App.jsx         # Componente raíz
│   └── main.jsx        # Punto de entrada
├── public/
├── index.html
└── package.json
```

> Ajusta esta estructura si la tuya es diferente.

---

## 👩‍💻 Autora

**Keyli Michell Londoño**
Tecnóloga en Análisis y Desarrollo de Sistemas de Información — SENA

---

## 📄 Licencia

Este proyecto es de uso educativo y personal.
