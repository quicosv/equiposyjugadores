import express, { Express } from 'express';
import cors from 'cors';
import { dbConnection } from './database/config';
import { routerUsuarios } from './routes/routerUsuarios';
import { routerAuth } from './routes/routerAuth';
import { validarJWT } from './middlewares/validarJWT';
import { esAdminRol } from './middlewares/validarRoles';
import { routerCategorias } from './routes/routerCategorias';
import { routerProductos } from './routes/routerProductos';

// Instanciamos express
const app: Express = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.static('public'));
app.use(cors());
app.use(express.json());

// Base de datos
dbConnection();

app.use('/api/auth', routerAuth);
app.use('/api/usuarios', [validarJWT, esAdminRol], routerUsuarios);
app.use('/api/categorias', [validarJWT], routerCategorias);
app.use('/api/productos', [validarJWT], routerProductos);

// Puesta en marcha
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
