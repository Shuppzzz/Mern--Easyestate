import express from 'express';
import { updateUser } from '../controllers/user.controller';
import { verifyToken } from '../utils/verifyUser.js';



const router = express.Router();

router.post('/update/:id', verifyToken, updateUser);