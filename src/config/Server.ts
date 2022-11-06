import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import passport from 'passport';
import passportMiddleware from '../middlewares/passport';
import router from './Routes';

export class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
    }

    config(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(router);
        this.app.use(passport.initialize());
        passport.use(passportMiddleware);
        this.app.set('port', process.env.PORT || 3000);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port ${this.app.get('port')}`);
        });
    }
}