Objetivo:

Desarrollar una aplicación de chat interactiva en tiempo real utilizando Node.js y Socket.IO, permitiendo la comunicación entre múltiples clientes de forma simultánea. 
Este proyecto busca familiarizarse con las características del entorno de JavaScript del lado del servidor, entender cómo funcionan los eventos en tiempo real y aprender a integrar tecnologías como Express y Socket.IO para la creación de aplicaciones web dinámicas.

Desarrollo:

Para realizar la actividad, se siguieron los siguientes pasos:

1.	Configuración del entorno de trabajo:

Se instaló Node.js y se configuró un nuevo proyecto utilizando npm init. Se instalaron las dependencias necesarias, como Express para la gestión del servidor y Socket.IO para habilitar la funcionalidad en tiempo real.
Los archivos principales del proyecto fueron organizados en una estructura que incluye:
o	Un archivo index.js para la configuración y lógica del servidor.
o	Una carpeta public/ que contiene los archivos estáticos (HTML, CSS y JavaScript) para la interfaz del cliente.

2.	Implementación del servidor:

En el archivo index.js, se configuró un servidor Express y se integró Socket.IO para manejar las conexiones de los clientes. Se implementaron eventos para:
o	Detectar nuevas conexiones.
o	Escuchar mensajes enviados por los usuarios.
o	Emitir mensajes a todos los clientes conectados al chat.

3.	Diseño de la interfaz del cliente:

Se creó un archivo index.html dentro de la carpeta public/, que contiene la estructura de la interfaz gráfica del chat. 
Este archivo incluye un campo para escribir mensajes y un área donde se muestran los mensajes enviados por los usuarios. 
También se añadió un script para conectarse al servidor utilizando Socket.IO y manejar los eventos en tiempo real.

4.	Pruebas y validación:

El servidor fue ejecutado localmente y probado para verificar la comunicación en tiempo real entre múltiples usuarios conectados al mismo chat.
Los mensajes enviados desde un cliente eran transmitidos a todos los demás usuarios.

![1](https://github.com/user-attachments/assets/0358cb4a-3c8d-4e9a-892e-af2e9b523ba2)
