import express, { Application } from 'express';

export class Server {
    public app: Application;

    constructor() {
        this.app = express();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
    }

    router(): void {
        
    }

    start(): void {
        this.config();
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port ${this.app.get('port')}`);
        });
    }
}