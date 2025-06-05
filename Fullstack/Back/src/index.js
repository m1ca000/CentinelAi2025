import express from "express";
import cors from 'cors';

// Configuración express
const app = express()

// Middlewares
const corsOptions = {
    origin: '*', // permitir acceso desde cualquier origen
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // permitir métodos HTTP
    allowedHeaders: ['Content-Type', 'Authorization'], // permitir headers
  };
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "CentinelAi funcionaa" });
});

import deviceRoutes from './Routes/device.routes.js';
app.use('/devices', deviceRoutes);

export default app;
