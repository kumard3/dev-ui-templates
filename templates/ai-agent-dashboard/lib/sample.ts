export const stats = [
  { label: "Total runs", value: "12,480", delta: "+12.4%", positive: true },
  { label: "Success rate", value: "98.2%", delta: "+0.6%", positive: true },
  { label: "Avg latency", value: "1.8s", delta: "-120ms", positive: true },
  { label: "Spend (mo)", value: "$342", delta: "+8.1%", positive: false },
];

export const usage = [
  { day: "Mon", value: 320 },
  { day: "Tue", value: 280 },
  { day: "Wed", value: 410 },
  { day: "Thu", value: 360 },
  { day: "Fri", value: 480 },
  { day: "Sat", value: 210 },
  { day: "Sun", value: 190 },
];

export type RunStatus = "success" | "failed" | "running";

export const runs: { id: number; agent: string; status: RunStatus; duration: string; cost: string; when: string }[] = [
  { id: 1, agent: "support-triage", status: "success", duration: "2.1s", cost: "$0.004", when: "2m ago" },
  { id: 2, agent: "lead-enricher", status: "running", duration: "—", cost: "—", when: "now" },
  { id: 3, agent: "invoice-parser", status: "success", duration: "1.4s", cost: "$0.002", when: "9m ago" },
  { id: 4, agent: "email-router", status: "failed", duration: "0.8s", cost: "$0.001", when: "14m ago" },
  { id: 5, agent: "doc-summarizer", status: "success", duration: "3.2s", cost: "$0.006", when: "21m ago" },
];
