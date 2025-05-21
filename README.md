# [BioGenie](https://boi-genie-faizanrauf6s-projects.vercel.app/)

This project generates bios for you using Together AI.

[![Twitter Bio Generator](./public/screenshot1.png)](https://boi-genie-faizanrauf6s-projects.vercel.app/)

## How it works

This project uses both [Mixtral 8x7B](https://api.together.xyz/playground/chat/mistralai/Mixtral-8x7B-Instruct-v0.1) and [Llama 3.1 8B](https://api.together.xyz/playground/chat/meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo) with streaming to generate a Twitter bio. It constructs a prompt based on the form and user input, sends it either to the [Together.ai](https://togetherai.link/) API, then streams the response back to the application.

## Running Locally

1. Create a `.env` file, make an account at [Together.ai](https://togetherai.link/), and add your API key under `TOGETHER_API_KEY`
2. Run the application with `npm run dev` and it will be available at `http://localhost:3000`.