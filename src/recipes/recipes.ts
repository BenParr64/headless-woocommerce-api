import express, { Request, Response } from "express";
import { Configuration, OpenAIApi } from "openai";
import { recipeBasedOnHop } from "../services/HopBased";

export async function recipesRoutes(app: express.Application) {
  app.get("/recipes", async (req: Request, res: Response) => {
    const configuration = new Configuration({
      apiKey: "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",
      organization: "org-jRvZsONs0jUqQGKqKgLrV0O1",
    });

    const openai = new OpenAIApi(configuration);
    if (!configuration.apiKey) {
      res.status(500).json({
        error: {
          message:
            "OpenAI API key not configured, please follow instructions in README.md",
        },
      });
      return;
    }

    const hop = req.query.hop as string;

    try {
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: generatePrompt(hop),
        temperature: 0.7,
        max_tokens: 500,
      });
      console.log(completion.data.choices[0].text);

      res.status(200).json({ result: completion.data.choices[0].text });
    } catch (error) {
      // Consider adjusting the error handling logic for your use case
      res.status(500).json({ error });
    }
  });
}

function generatePrompt(hop: string) {
  console.log(recipeBasedOnHop({ hop }));
  return recipeBasedOnHop({ hop });
}
