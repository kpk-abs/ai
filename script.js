import { prompts } from './config.js';
import fetch from 'node-fetch';

const apiKey = 'YOUR_API_KEY';
const action = process.argv[2];

const getGPT4Response = async (input) => {
  const url = 'https://api.openai.com/v1/chat/completions';
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  };

  const prompt = prompts[action];

  const data = {
    model: 'gpt-4',
    messages: [{ role: 'user', content: `${prompt} ${input}` }],
    max_tokens: 100
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log(result.choices[0].message.content);
  } catch (error) {
    console.error('Error:', error);
  }
};

export default getGPT4Response;