import { model, prompts, inputs } from './config.js';
import dotenv from 'dotenv';
import OpenAI from "openai";

dotenv.config();

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
  console.log(answer);
  
  return answer;
};

const action = process.argv[2];

getResponse(inputs[action], action)

export default getResponse;
