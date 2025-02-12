// Importar las dependencias
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

// Configurar el servidor
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Servir los archivos estáticos desde la carpeta "public"
app.use(express.static("public"));

// Escuchar conexiones de los clientes
io.on("connection", (socket) => {
    console.log("Un usuario se ha conectado");

    // Escuchar mensajes del cliente
    socket.on("chat message", (msg) => {
        console.log("Mensaje recibido: " + msg);

        // Enviar el mensaje a todos los clientes
        io.emit("chat message", msg);
    });

    // Detectar desconexión
    socket.on("disconnect", () => {
        console.log("Un usuario se ha desconectado");
    });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
