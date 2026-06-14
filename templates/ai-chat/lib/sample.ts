export const conversations = [
  "Refactor auth middleware",
  "Explain the build error",
  "Draft release notes v2.4",
  "Write tests for the parser",
  "Migrate to the App Router",
];

export const suggestions = [
  "Summarize this pull request",
  "Write a SQL query for monthly active users",
  "Explain this stack trace",
  "Draft a cold email to a design agency",
];

export function sampleReply(input: string): string {
  const topic = input.length > 60 ? `${input.slice(0, 60)}…` : input;
  return [
    `Here's how I'd approach "${topic}":`,
    "",
    "1. Break the problem into the smallest shippable step.",
    "2. Make the change behind a flag so it's safe to roll back.",
    "3. Add a focused test, then ship.",
    "",
    'This is sample output. Connect a real model in the README\'s "Wire your model" section.',
  ].join("\n");
}
