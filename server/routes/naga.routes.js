import express from 'express'
import dotenv from 'dotenv'
import { Configuration, OpenAIApi } from 'openai'
import axios from 'axios';

dotenv.config();

const router = express.Router();


const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config);

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: 1024 * 1024,
      response_format: 'b64_json'
    })

    const image = response.data.data[0].b64_json;

    res.status(200).json({
      photo: image
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something is went wrong!"
    })
  }
})


router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from Naga ROUTES" })
})

export default router;