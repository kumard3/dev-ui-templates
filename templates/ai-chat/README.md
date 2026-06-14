# AI Chat — DevUI Pro

A complete AI chat interface: sidebar with conversation history, streaming-ready message
thread with typing indicator, an auto-submitting composer (Enter to send, Shift+Enter for
newline), and a suggestion empty-state. Built with Next.js 14, TypeScript, Tailwind, and
the shared `@devui/ui` design system.

## Run

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Structure

- `components/chat-app.tsx` — stateful shell (message state, send loop)
- `components/sidebar.tsx` — conversations + new chat
- `components/message.tsx` — user/assistant bubble + typing indicator
- `components/composer.tsx` — textarea + send
- `lib/sample.ts` — placeholder data and the canned reply

## Wire your model

The send loop in `components/chat-app.tsx` currently pushes a canned reply from
`lib/sample.ts`. Replace the `setTimeout` block with a call to your API. For streaming,
swap the single append for a reader that appends tokens to the last assistant message:

```ts
const res = await fetch("/api/chat", {
  method: "POST",
  body: JSON.stringify({ messages }),
});
const reader = res.body!.getReader();
// append decoded chunks to the last assistant message as they arrive
```

Works with the Vercel AI SDK, OpenAI, Anthropic, or your own endpoint — the UI only needs
a string stream.

Part of DevUI Pro. License in the repo root `LICENSE.md`.
