import express from 'express';
import path from 'path';
import { handler as ssrHandler } from '../../client/dist/server/entry.mjs';
import indexRoutes from './routes/index.routes.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join('..', '..', 'client', 'dist')))
app.use(ssrHandler);

// Config
app.set('view engine', 'html');

// Routes
app.use("/", indexRoutes);

// Listen 
app.listen(8000, () => {
    console.log("Listen on: 8000");
});