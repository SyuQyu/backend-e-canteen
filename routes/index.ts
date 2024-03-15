import userRoutes from './feature.auth.routes/auth';
import errorHandler from '../handler/errorHandler';
export default function routes(app: any) {
  userRoutes(app);
  app.use(errorHandler);
}
