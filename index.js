import config from './config.js';
import dotenv from 'dotenv';
import OpenAI from "openai";

dotenv.config();

const { model, prompts } = config;

const {API_KEY: apiKey, ORGANIZATION: organization, PROJECT: project} = process.env

const openai = new OpenAI({
  apiKey, organization, project,
});

const getResponse = async (input, action) => {
  const prompt = prompts[action];
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
  return answer;
};

export default getResponse;
