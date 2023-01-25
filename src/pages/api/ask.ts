import type { APIContext } from "astro";
import { Configuration, OpenAIApi } from "openai";
import { presets } from "../../utils/presets";

const myPrompt = presets.dsa;

const configuration = new Configuration({
  apiKey: import.meta.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function post({ request }: APIContext) {
  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();
    const answers = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${myPrompt}\n Me:${body.query}.`,
      temperature: 0.7,
      max_tokens: 340,
    });
    const answer = answers.data.choices.pop();
    return new Response(JSON.stringify({ answer: answer?.text || "" }), {
      status: 200,
    });
  }
}
