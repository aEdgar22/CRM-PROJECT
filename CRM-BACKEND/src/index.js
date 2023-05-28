import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config.js';
import cors from 'cors';
import routerApi from './routes/router.api.js';

const app = express();
const PORT = process.env.PORT || 4000;
dotenv.config();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

routerApi(app);

// Sincronizar el modelo con la base de datos
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor iniciado en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar con la base de datos:', error);
  });
