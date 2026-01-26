//localhost:3000/api/demo/blocking

import { generateText } from "ai";
import { google } from "@ai-sdk/google";


export async function POST(){
    const response = await generateText({
        model: google("gemini-2.5-flash"),
        prompt: "Write how do I become a billionaire?",
        experimental_telemetry: {
            isEnabled: true,
            recordInputs: true,
            recordOutputs: true,
        },
    });
    return Response.json({ response });
}