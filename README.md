# Frontend del Challenge MeLi

Este repositorio contiene el código fuente del frontend desarrollado para el Challenge de Mercado Libre. La aplicación es una Single Page Application (SPA) construida con **React**, que consume una API de backend para mostrar detalles de productos.

## 🚀 Desafío Personal y Aprendizaje

El principal desafío personal durante la realización de este reto fue la creación de la interfaz de usuario y la lógica del frontend. Si bien mi fuerte y mayor experiencia se encuentran en el desarrollo backend, y mis conocimientos en tecnologías frontend eran reducidos, este challenge me brindó una valiosa oportunidad para expandirlos.

Para superar esta brecha, me apoyé significativamente en la inteligencia artificial, particularmente en Gemini, para guiarme en la estructuración de la aplicación, la creación de componentes y la interconexión con el backend.

A lo largo de este proceso, pude adquirir una comprensión sobre:

* **Componentes en React:** Cómo se estructuran, su propósito y cómo construir interfaces modulares.
* **Interacción entre Componentes:** La comunicación y el flujo de datos entre los distintos elementos de la UI.
* **Renderización Dinámica:** Cómo React gestiona la actualización y visualización de la información en la página.
* **Peticiones al Backend (Fetch API):** La forma de realizar llamadas HTTP para obtener y enviar datos desde y hacia la API REST del backend, incluyendo la gestión de diferentes entornos.

## 🛠️ Tecnologías Utilizadas

* **React**
* **JavaScript (ES6+)**
* **CSS**
* **Nginx** (para servir la aplicación en un contenedor Docker)
* **Docker** (para la contenerización del frontend)

## 📦 Cómo Ejecutar el Proyecto

Este frontend está diseñado para ejecutarse junto con el backend en un entorno Docker Compose.

1.  **Clonar el repositorio:**
    ```bash
    git clone [URL_DE_TU_REPOSITORIO_FRONTEND]
    cd Challenge_MeLi_FE
    ```
2.  **Asegurarse de tener el backend funcionando:**
    Este frontend espera que el servicio de backend esté disponible en `http://backend:8080/api` dentro de la red de Docker Compose, y expuesto en `http://localhost:8080` en tu máquina anfitriona.

3.  **Construir y levantar los contenedores con Docker Compose:**
    Desde el directorio raíz de tu proyecto Docker Compose (donde está el `docker-compose.yaml`), ejecuta:
    ```bash
    docker compose up --build -d
    ```

4.  **Acceder a la aplicación:**
    Una vez que los contenedores estén levantados y saludables, podrás acceder al frontend en tu navegador visitando:
    `http://localhost/`

## ⚙️ Configuración del API

La URL del API del backend se gestiona de la siguiente manera:

* Cuando la aplicación React se ejecuta en un entorno de desarrollo (`npm start` localmente), espera que el backend esté en `http://localhost:8080/api`.
* Cuando la aplicación se construye y se ejecuta dentro del contenedor Docker (`npm run build`), se ha configurado para que, al ser accedida desde el navegador del host (`http://localhost/`), las peticiones del JavaScript se dirijan a `http://localhost:8080/api`, ya que el puerto 8080 del backend está mapeado en el host.

---

¡Gracias por revisar el proyecto!
