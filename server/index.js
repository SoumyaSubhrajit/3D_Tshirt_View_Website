import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import nagaRoutes from './routes/naga.routes.js'
import { Configuration, OpenAIApi } from 'openai';
import router from './routes/naga.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }))




// Here is my routes..
app.use("/api/v1/naga", nagaRoutes);


app.get('/', (req, res) => {
  console.log(nagaRoutes);

  res.status(200).json({
    message: "The server is perfectly working :-)",
  })
})


const PORT = 8080
app.listen(PORT, () => {
  console.log("The server is listing!");
})