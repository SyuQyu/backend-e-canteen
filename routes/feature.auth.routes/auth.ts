import * as controllers from '../../controllers';

export default function authRoutes(app: any) {
    app.get('/login', (controllers as any).login);
}