// All prices, credits and limits live here (later: database + admin panel).
// These numbers are placeholders until real GPU costs are measured on RunPod.

export const FREE_CREDITS = 30;
export const DRAFT_DAYS = 7;
export const SHOW_SAMPLE_VIDEO = true; // set false to hide the sample draft video

export type Plan = {
  id: string;
  name: string;
  price: string;
  per: string;
  items: string[];
  button: string;
  popular: boolean;
};

export const plans: Plan[] = [
  { id: "free", name: "Free", price: "$0", per: "/month", items: ["30 credits/month", "720p export", "Watermark", "Download locked"], button: "Start free", popular: false },
  { id: "pro", name: "Pro", price: "$29", per: "/month", items: ["500 credits/month", "4K export", "Priority generation", "No watermark"], button: "Get Pro", popular: true },
  { id: "enterprise", name: "Enterprise", price: "Custom", per: "", items: ["Custom credits", "Team workspace", "API access"], button: "Contact sales", popular: false },
];

const PER_SECOND = 2.5;
const QUALITY_MULT: Record<string, number> = { "720p": 0.5, "1080p": 0.7, "4K": 1 };

export function estimateCredits(seconds: number, quality: string): number {
  const mult = QUALITY_MULT[quality] ?? 1;
  return Math.max(1, Math.round(seconds * PER_SECOND * mult));
}
