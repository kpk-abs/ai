import config from './config.js';
import dotenv from 'dotenv';
import OpenAI from "openai";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

const { model, prompts, inputs } = config;
const action = process.argv[2];

const getResponse = async () => {
  const prompt = prompts[action];
  const input = inputs[action];
  const response = await openai.chat.completions.create({
    model: model,
    messages: [
        {
            role: "user",
            content: `${prompt} ${input}`,
        },
    ]
});
  const { content } = response.choices[0].message;
  const answer = JSON.parse(content);
  console.log(answer);
};

getResponse();
