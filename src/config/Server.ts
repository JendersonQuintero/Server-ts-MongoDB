import express, { Application, Router } from 'express';
import { router } from './Routes';

export class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(router);
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header(
              "Access-Control-Allow-Headers",
              "Origin, X-Requested-With, Content-Type, Accept, Authorization"
            );
        
            if (req.method == "OPTIONS") {
              res.header(
                "Access-Control-Allow-Methods",
                "PUT, POST, PATCH, DELETE, GET"
              );
              return res.status(200).json({});
            }
            next();
          });
        
          this.app.use((req, res) => {
            const error = new Error("not found");
        
            return res.status(400).json({ message: error.message });
          });

    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port ${this.app.get('port')}`);
        });
    }
}