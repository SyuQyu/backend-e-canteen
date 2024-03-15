import * as controllers from '../../controllers';

// import { authentication } from '../middleware/authentication';
// import authorization from '../middleware/authorization';
// import validateRegister from '../middleware/Validation/register';
export default function authRoutes(app: any) {
    app.get('/login', (controllers as any).login);
}