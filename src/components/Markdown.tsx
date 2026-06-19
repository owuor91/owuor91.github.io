import type { ReactNode } from "react";

type MarkdownProps = {
  content: string;
};

type InlineNode =
  | { type: "text"; value: string }
  | { type: "code"; value: string }
  | { type: "strong"; children: InlineNode[] }
  | { type: "em"; children: InlineNode[] };

function parseInline(text: string): InlineNode[] {
  const nodes: InlineNode[] = [];
  let i = 0;

  const pushText = (value: string) => {
    if (!value) return;
    const prev = nodes[nodes.length - 1];
    if (prev?.type === "text") prev.value += value;
    else nodes.push({ type: "text", value });
  };

  while (i < text.length) {
    if (text[i] === "`") {
      const end = text.indexOf("`", i + 1);
      if (end === -1) {
        pushText(text.slice(i));
        break;
      }
      nodes.push({ type: "code", value: text.slice(i + 1, end) });
      i = end + 1;
      continue;
    }

    if (text.startsWith("**", i)) {
      const end = text.indexOf("**", i + 2);
      if (end === -1) {
        pushText(text.slice(i));
        break;
      }
      const inner = text.slice(i + 2, end);
      nodes.push({ type: "strong", children: parseInline(inner) });
      i = end + 2;
      continue;
    }

    if (text[i] === "*") {
      const end = text.indexOf("*", i + 1);
      if (end === -1) {
        pushText(text.slice(i));
        break;
      }
      const inner = text.slice(i + 1, end);
      nodes.push({ type: "em", children: parseInline(inner) });
      i = end + 1;
      continue;
    }

    const nextCandidates = [
      text.indexOf("`", i),
      text.indexOf("**", i),
      text.indexOf("*", i),
    ].filter((v) => v !== -1) as number[];
    const next = nextCandidates.length ? Math.min(...nextCandidates) : -1;
    if (next === -1) {
      pushText(text.slice(i));
      break;
    }
    pushText(text.slice(i, next));
    i = next;
  }

  return nodes;
}

function renderInline(nodes: InlineNode[], keyPrefix: string): ReactNode[] {
  return nodes.map((node, idx) => {
    const key = `${keyPrefix}-${idx}`;
    switch (node.type) {
      case "text":
        return node.value;
      case "code":
        return (
          <code
            key={key}
            className="rounded-md border border-border/60 bg-ink/40 px-1.5 py-0.5 font-mono text-[0.9em] text-frost/90"
          >
            {node.value}
          </code>
        );
      case "strong":
        return (
          <strong key={key} className="font-semibold text-frost">
            {renderInline(node.children, key)}
          </strong>
        );
      case "em":
        return (
          <em key={key} className="italic text-frost/90">
            {renderInline(node.children, key)}
          </em>
        );
    }
  });
}

function splitBlocks(content: string) {
  return content
    .replace(/\r\n/g, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .split(/\n{2,}/g)
    .map((b) => b.trim())
    .filter(Boolean);
}

function isUnorderedList(block: string) {
  const lines = block.split("\n").filter(Boolean);
  if (lines.length < 2) return false;
  return lines.every((l) => /^(\s*[-*•])\s+/.test(l));
}

function isOrderedList(block: string) {
  const lines = block.split("\n").filter(Boolean);
  if (lines.length < 2) return false;
  return lines.every((l) => /^\s*\d+\.\s+/.test(l));
}

function stripPrefix(line: string, re: RegExp) {
  const m = line.match(re);
  if (!m) return line.trim();
  return line.slice(m[0].length).trim();
}

export function Markdown({ content }: MarkdownProps) {
  const blocks = splitBlocks(content);

  return (
    <div className="space-y-2">
      {blocks.map((block, blockIdx) => {
        if (isUnorderedList(block)) {
          const items = block
            .split("\n")
            .filter(Boolean)
            .map((l) => stripPrefix(l, /^(\s*[-*•])\s+/));
          return (
            <ul
              key={`ul-${blockIdx}`}
              className="ml-5 list-disc space-y-1 text-frost/90"
            >
              {items.map((item, i) => (
                <li key={`ul-${blockIdx}-${i}`}>{renderInline(parseInline(item), `ul-${blockIdx}-${i}`)}</li>
              ))}
            </ul>
          );
        }

        if (isOrderedList(block)) {
          const items = block
            .split("\n")
            .filter(Boolean)
            .map((l) => stripPrefix(l, /^\s*\d+\.\s+/));
          return (
            <ol
              key={`ol-${blockIdx}`}
              className="ml-5 list-decimal space-y-1 text-frost/90"
            >
              {items.map((item, i) => (
                <li key={`ol-${blockIdx}-${i}`}>{renderInline(parseInline(item), `ol-${blockIdx}-${i}`)}</li>
              ))}
            </ol>
          );
        }

        const lines = block.split("\n");
        const inline = renderInline(parseInline(lines.join("\n")), `p-${blockIdx}`);

        return (
          <p key={`p-${blockIdx}`} className="text-frost/90">
            {lines.length === 1
              ? inline
              : lines.map((line, i) => (
                  <span key={`p-${blockIdx}-l-${i}`}>
                    {renderInline(parseInline(line), `p-${blockIdx}-l-${i}`)}
                    {i < lines.length - 1 ? <br /> : null}
                  </span>
                ))}
          </p>
        );
      })}
    </div>
  );
}
