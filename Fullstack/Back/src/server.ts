import app from "./index.js";
import dotenv from "dotenv";
import http from "http";
import { consola } from "consola";

dotenv.config();

const PORT = parseInt(process.env.PORT || "3000", 10);
const NODE_ENV = process.env.NODE_ENV || "development";

const server = new http.Server(app);

// Manejo de errores no capturados
process.on("uncaughtException", (error) => {
  consola.error("Uncaught Exception:", error);
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  consola.error("Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1);
});

// Cierre ordenado
const shutdown = () => {
  consola.info("Shutting down server...");
  server.close(() => {
    console.info("Server closed");
    process.exit(0);
  });
};

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);

// Iniciar servidor
server.listen(PORT, () => {
  consola.box(`
    Server running in ${NODE_ENV} mode
    Listening on port ${PORT}
    Ready to handle requests
  `);
});
