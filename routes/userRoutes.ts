import { Router } from "express";
import authotization from "../middlewares/authorization";

const router = Router();
router.get("/", authotization(["guest"]));

export default router;
