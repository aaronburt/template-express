import express from 'express';
import type { Express, Request, Response } from 'express';

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
    return res.sendStatus(200)
})

app.listen(80)
