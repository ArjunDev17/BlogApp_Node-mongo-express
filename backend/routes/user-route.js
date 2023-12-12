import express from 'express'
import { getAlluser } from '../controller/user-controller';
const router = express.Router();
router.get("/", getAlluser)