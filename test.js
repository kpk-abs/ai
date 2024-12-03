import config from './config.js';
import getResponse from './index.js';

const { data } = config;

const action = process.argv[2];

const displayResult = async (action)=>
    console.log(await getResponse(data[action], action));

displayResult(action);
