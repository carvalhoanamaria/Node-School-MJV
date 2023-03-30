import  express  from "express";
import { Request, Response, Router } from "express";
import cors from 'cors';


const app = express();

app.use(cors()); 
app.use(express.json());

const router = Router();


router.get('/', (req: Request, res: Response) => {
    const helloworld = {message: 'Hello World!'};
    res.send(helloworld);
});

app.use(router);

const port = 3000;

app.listen(port, () => {
    console.log('Aplicaçao online na porta: ', port);
});
