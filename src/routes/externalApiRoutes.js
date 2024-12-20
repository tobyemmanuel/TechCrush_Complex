import express from "express";
import { fetchExternalData } from "../controllers/externalApiController.js";

const router = express.Router();

/**
 * @swagger
 * /external/:
 *   get:
 *     summary: Fetch data from an external API
 *     tags: [External Data]
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *     responses:
 *       201:
 *         description: Data fetched  successfully
 *       400:
 *         description: Unable to fetch data
 */
router.get("/", fetchExternalData);

export default router;
