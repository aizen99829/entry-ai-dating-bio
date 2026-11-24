import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Fluent in 40 languages, still can't tell if you like me. Swipe right and I'll explain why in 12 paragraphs.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
