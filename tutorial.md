# Frontend Beginner Tutorial (Next.js + React + TypeScript + Tailwind)

This tutorial walks you through a modern beginner-friendly frontend stack by using this project as a real example. You’ll learn what the technologies do, how the app is organized, how pages and components work, how styling is applied, and how a simple “Digital Twin” chat feature is wired to a backend API route.

> You do **not** need prior frontend experience to follow along. If you can read JavaScript and are willing to experiment, you’re good.

---

## 1) What You’re Building

This project is a personal portfolio site built with:

- A single landing page with sections (Hero, About/Skills, Journey timeline, Portfolio, Digital Twin chat, Contact)
- A responsive navigation bar that highlights the current section as you scroll
- A chat UI (“Digital Twin”) backed by a server API route that calls OpenRouter

---

## 2) Tech Summary (Plain English)

### Next.js
Next.js is a React framework. It gives you:

- Routing (pages and API endpoints)
- A build system (bundling, optimization)
- Server capabilities (API routes, server-side logic)

This repo uses the **App Router**, which means routes live under `src/app`.

### React
React is a library for building UIs using **components**. Components are reusable pieces of UI (like `Hero`, `Navigation`, `Journey`).

### TypeScript
TypeScript adds types on top of JavaScript. Types help catch bugs early (like “this variable should be a string”).

### Tailwind CSS
Tailwind is a utility-first CSS framework. You style things by attaching small class names like `px-6`, `text-muted`, `rounded-2xl` directly on elements.

In this project, Tailwind is used through `src/app/globals.css` and utility classes throughout components.

### API Routes (Server Code inside the app)
Next.js lets you add server endpoints such as:

- `POST /api/digital-twin`

These endpoints run on the server (Node.js runtime) and can safely read secrets like API keys.

---

## 3) Project Tour (Files You Should Know)

Here are the main areas:

### App entry
- `src/app/page.tsx` — the home page layout (composes sections)
- `src/app/layout.tsx` — global document layout (fonts, metadata, wrappers)
- `src/app/globals.css` — global styles + theme variables + Tailwind layers

### UI components
- `src/components/*` — reusable UI sections (`Hero`, `About`, `Journey`, etc.)

### Data
- `src/data/profile.ts` — “content database” for the site (skills, jobs, portfolio)

### Server endpoint
- `src/app/api/digital-twin/route.ts` — API route that calls OpenRouter

---

## 4) High-Level Walkthrough (How the Page is Assembled)

Open `src/app/page.tsx`. You’ll see the page is basically a list of components:

```tsx
export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Journey />
        <SectionDivider />
        <Portfolio />
        <SectionDivider />
        <DigitalTwinChat />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

This is a common React pattern:

- Each section is isolated in a component file
- The “page” just composes them in order

---

## 5) Beginner Concepts You’ll Use Everywhere

### 5.1 Components
A React component is a function that returns UI (JSX):

```tsx
export function Hero() {
  return <section>...</section>;
}
```

You can then “use” it like an HTML tag:

```tsx
<Hero />
```

### 5.2 Props
Props are inputs to a component. Example (simplified):

```tsx
function Pill({ label }: { label: string }) {
  return <span>{label}</span>;
}

<Pill label="Python" />
```

### 5.3 Mapping arrays to UI
This is how you render lists:

```tsx
{profile.skills.map((skill) => (
  <span key={skill}>{skill}</span>
))}
```

The `key` helps React track each item.

### 5.4 Client Components vs Server Components
In Next.js App Router:

- Components are **server** by default
- If you need browser-only features (state, events, effects), you add:

```ts
"use client";
```

For example, the chat UI uses state and click handlers, so it’s a client component.

---

## 6) Styling Walkthrough (Tailwind + Theme Variables)

### Theme variables
`src/app/globals.css` defines theme colors like:

```css
@theme inline {
  --color-ink: #08080a;
  --color-accent: #00e5b0;
  --color-flame: #ff4d2e;
}
```

Then components use Tailwind class names (some are custom mapped by Tailwind/theme config).

### Typical Tailwind usage
Example classes:

- `px-6` — padding-left and padding-right
- `py-32` — padding-top and padding-bottom
- `rounded-2xl` — rounded corners
- `text-muted` — muted text color (project theme)

You generally *compose* the look by stacking classes.

---

## 7) Code Review: Navigation (Scroll Spy + Mobile Menu)

Look at `src/components/Navigation.tsx`.

### What it does
- Sticks to the top
- Tracks scroll position
- Highlights which section is currently active
- Shows a mobile overlay menu on small screens

### Core ideas inside the component

#### State
```tsx
const [scrolled, setScrolled] = useState(false);
const [active, setActive] = useState("");
const [menuOpen, setMenuOpen] = useState(false);
```

State makes the UI reactive. When state changes, React re-renders.

#### Effect: update active link on scroll
```tsx
useEffect(() => {
  const onScroll = () => {
    setScrolled(window.scrollY > 40);

    const sections = links.map((l) => l.href.slice(1));
    for (const id of [...sections].reverse()) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 120) {
        setActive(id);
        break;
      }
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, []);
```

Key beginner takeaways:

- `useEffect` runs after the component renders in the browser
- You should always clean up listeners in the return function
- `getBoundingClientRect().top` lets you check where a section is relative to the viewport

---

## 8) Code Review: About / Skills Icons

In `src/components/About.tsx`, skills are rendered as “pills”. Each pill shows an icon:

```tsx
{profile.skills.map((skill) => (
  <span key={skill} className="group inline-flex items-center gap-2 ...">
    <span className="flex h-7 w-7 items-center justify-center ...">
      <SkillIcon name={skill} className="h-4 w-4" />
    </span>
    {skill}
  </span>
))}
```

Beginner takeaways:

- This is a clean pattern: **data drives UI**
- `SkillIcon` is a “pure” component: same input → same output

`src/components/SkillIcon.tsx` is just SVG rendering based on a `name` string:

```tsx
export function SkillIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "Python":
      return <svg className={className}>...</svg>;
    default:
      return <svg className={className}>...</svg>;
  }
}
```

---

## 9) Code Review: Journey Timeline (Alternating Left/Right)

`src/components/Journey.tsx` renders the timeline from `profile.journey`.

### Filtering data (omitting a leaf)
Before mapping, it filters out the “Moringa School” entry:

```tsx
const journeyItems = profile.journey.filter((item) => item.company !== "Moringa School");
```

### Alternating sides
On desktop (`md:` breakpoint), it alternates cards on left and right depending on index:

- even index → left column
- odd index → right column

That gives the “two-sided timeline” look.

Beginner takeaway: you can use simple math (`index % 2`) to create alternating layouts.

---

## 10) Digital Twin Chat: Full Feature Walkthrough

This is the most “full stack” part of the project.

There are two pieces:

1) **Client UI** (browser): `src/components/DigitalTwinChat.tsx`
2) **Server API route**: `src/app/api/digital-twin/route.ts`

### 10.1 The UI: sending messages

The chat stores messages in state:

```tsx
type ChatMessage = { role: "user" | "assistant"; content: string };
const [messages, setMessages] = useState<ChatMessage[]>([
  { role: "assistant", content: "Ask me anything..." },
]);
```

When the user clicks “Send”, it calls the API route:

```tsx
const res = await fetch("/api/digital-twin", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ messages: nextMessages }),
});
```

Beginner takeaways:

- `fetch` makes an HTTP request
- Sending JSON requires `Content-Type: application/json`
- You typically keep UI responsive by showing a “loading” state

### 10.2 Rendering assistant formatting (Markdown)

AI responses often include markdown like `**bold**` and lists. The UI uses a safe markdown renderer:

- `src/components/Markdown.tsx`

It supports:

- `**bold**`
- `*italics*`
- inline `` `code` ``
- simple ordered/unordered lists

Why not use `dangerouslySetInnerHTML`?

- It can create security issues if you render untrusted HTML
- This simple renderer avoids injecting raw HTML

### 10.3 The API route (server)

The API route:

- Reads `OPENROUTER_API_KEY` from environment
- Builds a “system prompt” from `profile.ts` data
- Calls OpenRouter’s Chat Completions endpoint
- Returns `{ message: { role: "assistant", content } }` to the UI

Key excerpt:

```ts
const apiKey = process.env.OPENROUTER_API_KEY;
if (!apiKey) {
  return NextResponse.json({ error: "Missing OPENROUTER_API_KEY in environment." }, { status: 500 });
}

const upstream = await fetch("https://openrouter.ai/api/v1/chat/completions", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "openai/gpt-oss-120b:free",
    messages: [{ role: "system", content: systemPrompt }, ...sanitized],
  }),
});
```

Beginner takeaways:

- Secrets belong on the server, not the browser
- API routes let you keep your API key private
- You should validate and sanitize input (`sanitized` messages)

---

## 11) How to Run the App (Beginner Steps)

From the project root:

```bash
npm run dev
```

Then open:

- `http://localhost:3000`

If you edit a component under `src/components`, the browser typically refreshes automatically.

---

## 12) “Self Review”: 5 Improvements You Could Make Next

1) **Streaming responses**: stream tokens from the API route so the chat types in real-time (better UX).
2) **Conversation memory controls**: add “new topic” / “reset context” and limit history length more explicitly.
3) **Better markdown support**: support links, headings, and code blocks with a vetted markdown library (still safely).
4) **Rate limiting & abuse protection**: add request throttling and basic bot protection on `/api/digital-twin`.
5) **Richer career knowledge**: add structured data (achievements, technologies per role, metrics) so answers can be more precise.

---

## You’re Ready

If you want practice tasks (highly recommended), try:

- Change one skill in `src/data/profile.ts` and watch the UI update
- Add a new Journey entry and see how the timeline alternates
- Edit the chat “Try asking” list to reflect questions you want recruiters to ask

