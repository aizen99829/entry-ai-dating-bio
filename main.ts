import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Fluent in 40 languages, still can't tell if you like me. Swipe right and I'll explain why in 12 paragraphs.";

// Guard: one line, 1-180 chars, non-blank.
if (LINE.trim().length === 0) throw new Error("entry is blank");
if (LINE.length < 1 || LINE.length > 180)
  throw new Error(`entry length ${LINE.length} outside 1-180`);
if (LINE.split("\n").length !== 1) throw new Error("entry is not one line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
