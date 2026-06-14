"use client";

import { useState, type FormEvent, type KeyboardEvent } from "react";
import { Button } from "@devui/ui";

export function Composer({ onSend, disabled }: { onSend: (text: string) => void; disabled?: boolean }) {
  const [value, setValue] = useState("");

  function send() {
    if (!value.trim()) return;
    onSend(value);
    setValue("");
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    send();
  }

  function onKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <div className="border-t border-line px-6 py-4">
      <form
        onSubmit={submit}
        className="mx-auto flex max-w-3xl items-end gap-2 rounded-2xl border border-line bg-surface p-2"
      >
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
          rows={1}
          placeholder="Message Nova…"
          className="max-h-40 flex-1 resize-none bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-muted"
        />
        <Button type="submit" variant="primary" size="icon" disabled={disabled || !value.trim()} aria-label="Send">
          ↑
        </Button>
      </form>
      <p className="mt-2 text-center text-xs text-muted">
        Nova can make mistakes. Connect your model in the README.
      </p>
    </div>
  );
}
