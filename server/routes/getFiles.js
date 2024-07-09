import { Router } from "express";
import { getAutoComplete, getFiles } from "../controllers/getFiles.js";

const router = Router();

router.get("/get-auto-complete", getAutoComplete);

router.get("/get-files", getFiles);


export default router;