import OpenAI from "openai";

export async function POST(req) {
  try {
    const { job, achievements, tone, type } = await req.json();

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const prompt = `
Generate a ${type}.
Tone: ${tone}.
Job Description: ${job}
Achievements: ${achievements}
Make it professional, crisp, and personalized.
`;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    return Response.json({
      success: true,
      text: completion.choices[0].message.content,
    });
  } catch (err) {
    return Response.json({ success: false, error: err.message });
  }
}
