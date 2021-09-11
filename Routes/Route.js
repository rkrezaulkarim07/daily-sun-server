import express, { Router } from 'express';

import { createPost, updatePost, deletePost, getPost, getAllPosts } from '../Controller/Post-Controller';
import { uploadImage, getImage } from '../Controller/Image-Controller';
import upload from '../Utils/Upload';
import { newComment, getComments, deleteComment } from '../Controller/Comment-Controller';

const router = express.Router();


router.post('/create', createPost);
router.put('/update/:id', updatePost);
router.delete('/delete/:id', deletePost);

router.get('/post/:id', getPost);
router.get('/posts', getAllPosts);

router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);

router.post('/comment/new', newComment);
router.get('/comments/:id', getComments);
router.delete('/comment/delete/:id', deleteComment);

export default router;