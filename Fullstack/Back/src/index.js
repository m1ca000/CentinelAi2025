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

import institutionRoutes from './Routes/institution.routes.js';
app.use('/institution', institutionRoutes);

import adminRoutes from './Routes/admin.routes.js';
app.use('/admin', adminRoutes)

import personRoutes from './Routes/person.routes.js'
app.use('/person', personRoutes)

let ledState

app.get('/led', (req, res) => {
  res.send(ledState)
});

app.post('/led', (req, res) => {
  const { state } = req.body;
  if (state === "1" || state === "0") {
    ledState = state;
    res.send('LED state set')
  } else {
    res.status(400).send('Invalid State')
  }
});

export default app;
