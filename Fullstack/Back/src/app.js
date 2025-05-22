import express from "express";
import cors from 'cors';

// Configuración express
const app = express()
const PORT = 8000

// Middlewares
const corsOptions = {
    origin: '*', // permitir acceso desde cualquier origen
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // permitir métodos HTTP
    allowedHeaders: ['Content-Type', 'Authorization'], // permitir headers
    // credentials: true
  };
app.use(cors(corsOptions));
app.use(express.json());