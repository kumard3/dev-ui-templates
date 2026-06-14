import { cn } from "@devui/ui";

export type Role = "user" | "assistant";

function Dot({ className }: { className?: string }) {
  return <span className={cn("h-1.5 w-1.5 animate-bounce rounded-full bg-muted", className)} />;
}

export function Message({ role, content, typing }: { role: Role; content: string; typing?: boolean }) {
  const isUser = role === "user";
  return (
    <div className="flex gap-4 py-5">
      {isUser ? (
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line bg-surface text-xs font-medium text-muted">
          You
        </span>
      ) : (
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-xs font-bold text-ink">
          N
        </span>
      )}
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-white">{isUser ? "You" : "Nova"}</p>
        {typing ? (
          <div className="mt-3 flex gap-1">
            <Dot />
            <Dot className="[animation-delay:150ms]" />
            <Dot className="[animation-delay:300ms]" />
          </div>
        ) : (
          <p className="mt-1 whitespace-pre-wrap text-sm leading-relaxed text-neutral-300">{content}</p>
        )}
      </div>
    </div>
  );
}
