import { profile } from "@/data/profile";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

function buildSystemPrompt() {
  const skills = profile.skills.join(", ");
  const journey = profile.journey
    .map((item) => `- ${item.role} @ ${item.company} (${item.period}): ${item.highlight}`)
    .join("\n");
  const portfolio = profile.portfolio
    .map((p) => `- ${p.name} (${p.client}): ${p.description}`)
    .join("\n");

  return [
    "You are John Owuor's digital twin for career Q&A.",
    "Answer questions about John's career, experience, skills, and projects using ONLY the information provided below.",
    "If something isn't in the data, say you don't know and ask a clarifying question or suggest what info would help.",
    "Keep answers concise, concrete, and professional.",
    "Formatting rules: use simple Markdown only (short headings, paragraphs, and bullet lists).",
    "Do NOT use Markdown tables, HTML tags (including <br>), or code fences unless explicitly asked.",
    "",
    `Name: ${profile.name}`,
    `Title: ${profile.title}`,
    `Location: ${profile.location}`,
    `Summary: ${profile.summary}`,
    `Core skills: ${skills}`,
    "",
    "Experience timeline:",
    journey,
    "",
    "Selected work:",
    portfolio,
  ].join("\n");
}

function toOpenRouterModelId(modelName: string) {
  const normalized = modelName.trim().toLowerCase();
  if (normalized === "gpt-oss-120b (free)") return "openai/gpt-oss-120b:free";
  return modelName;
}

export async function POST(req: Request) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing OPENROUTER_API_KEY in environment." },
      { status: 500 },
    );
  }

  const configuredModel = process.env.OPENROUTER_MODEL ?? "gpt-oss-120b (free)";
  const model = toOpenRouterModelId(configuredModel);

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const messages = (body as { messages?: ChatMessage[] }).messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json(
      { error: "Body must include a non-empty `messages` array." },
      { status: 400 },
    );
  }

  const sanitized: ChatMessage[] = [];
  for (const msg of messages) {
    if (!msg || typeof msg !== "object") continue;
    const role = (msg as ChatMessage).role;
    const content = (msg as ChatMessage).content;
    if ((role !== "user" && role !== "assistant") || typeof content !== "string") continue;
    const trimmed = content.trim();
    if (!trimmed) continue;
    sanitized.push({ role, content: trimmed.slice(0, 4000) });
  }

  if (sanitized.length === 0) {
    return NextResponse.json(
      { error: "No valid messages provided." },
      { status: 400 },
    );
  }

  const systemPrompt = buildSystemPrompt();

  const upstream = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "http://localhost:3000",
      "X-Title": "John Owuor Portfolio",
    },
    body: JSON.stringify({
      model,
      messages: [{ role: "system", content: systemPrompt }, ...sanitized],
      temperature: 0.3,
      max_tokens: 600,
    }),
  });

  if (!upstream.ok) {
    const text = await upstream.text().catch(() => "");
    return NextResponse.json(
      {
        error: "OpenRouter request failed.",
        status: upstream.status,
        details: text.slice(0, 2000),
      },
      { status: 502 },
    );
  }

  const data = (await upstream.json()) as {
    choices?: Array<{ message?: { role?: string; content?: string } }>;
  };
  const content = data.choices?.[0]?.message?.content?.trim();
  if (!content) {
    return NextResponse.json(
      { error: "OpenRouter returned an empty response." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: { role: "assistant", content } });
}
