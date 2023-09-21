import { Router } from 'express';
import path from 'path';
import * as video_controller from '../controllers/videoController.js';

const router = Router();

router.get("/", (req, res) => {
    res.redirect("http://localhost:4321/");
});
router.get("/video", video_controller.video_index);
router.get("/video/create", video_controller.video_create_get);

export default router;