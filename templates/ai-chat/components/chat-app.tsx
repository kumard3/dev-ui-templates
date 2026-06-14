"use client";

import { useRef, useState } from "react";
import { Sidebar } from "./sidebar";
import { Composer } from "./composer";
import { Message, type Role } from "./message";
import { suggestions, sampleReply } from "@/lib/sample";

type Msg = { id: number; role: Role; content: string };

function EmptyState({ onPick }: { onPick: (text: string) => void }) {
  return (
    <div className="mx-auto flex h-full max-w-2xl flex-col items-center justify-center px-6 text-center">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-lg font-bold text-ink">N</div>
      <h1 className="mt-6 text-2xl font-semibold text-white">How can I help?</h1>
      <p className="mt-2 text-sm text-muted">Ask anything, or start with a suggestion.</p>
      <div className="mt-8 grid w-full gap-3 sm:grid-cols-2">
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => onPick(s)}
            className="rounded-xl border border-line bg-surface p-4 text-left text-sm text-neutral-300 transition hover:border-neutral-600"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

export function ChatApp() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [busy, setBusy] = useState(false);
  const idRef = useRef(0);

  function send(text: string) {
    const value = text.trim();
    if (!value || busy) return;
    setMessages((m) => [...m, { id: ++idRef.current, role: "user", content: value }]);
    setBusy(true);
    setTimeout(() => {
      setMessages((m) => [...m, { id: ++idRef.current, role: "assistant", content: sampleReply(value) }]);
      setBusy(false);
    }, 700);
  }

  return (
    <div className="flex h-screen bg-ink">
      <Sidebar onNew={() => setMessages([])} />
      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 items-center justify-between border-b border-line px-6">
          <span className="text-sm font-medium text-white">New chat</span>
          <span className="rounded-md border border-line px-2 py-1 text-xs text-muted">gpt-4o</span>
        </header>
        <div className="flex-1 overflow-y-auto">
          {messages.length === 0 ? (
            <EmptyState onPick={send} />
          ) : (
            <div className="mx-auto max-w-3xl px-6 py-8">
              {messages.map((m) => (
                <Message key={m.id} role={m.role} content={m.content} />
              ))}
              {busy ? <Message role="assistant" content="" typing /> : null}
            </div>
          )}
        </div>
        <Composer onSend={send} disabled={busy} />
      </main>
    </div>
  );
}
