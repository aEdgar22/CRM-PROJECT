import express from 'express';
const router = express.Router();
import userRouter from "./user.routes.js"

function routerApi (app)  {
    app.use('/api',router);
    router.use('/users', userRouter);
}

export default routerApi