import { getuser, getUsers, createUser, deleteUsers, patchUsers } from '../controllers/users';
import express from 'express';

const router = express.Router();

// router.get('/', (req,res)=>{res.send("hello")});

router.get('/', getuser);

router.post('/',createUser);

router.get('/:id',getUsers);

router.delete('/:id',deleteUsers );

router.patch('/:id',patchUsers);

export default router;

