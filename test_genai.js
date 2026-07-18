import { GoogleGenAI } from '@google/genai';

async function test() {
  console.log("Starting...");
  try {
    const ai = new GoogleGenAI({ apiKey: "INSERT_YOUR_GEMINI_API_KEY_HERE" });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ role: 'user', parts: [{ text: 'hi' }] }],
    });
    console.log("Response:", response.text);
  } catch (err) {
    console.error("Caught error:", err);
  }
}
test();
