// Client-side checks are only for a nicer experience.
// The SAME checks must run again on the server before anything is saved.

const FREE_MAIL = ["gmail.com", "googlemail.com"];

// Starter list only. In the backend phase, load the full public list (110k+ domains).
const DISPOSABLE = [
  "10minutemail.com", "10minutemail.net", "tempmail.com", "temp-mail.org", "tempx.io",
  "guerrillamail.com", "sharklasers.com", "mailinator.com", "yopmail.com", "trashmail.com",
  "getnada.com", "dispostable.com", "maildrop.cc", "throwawaymail.com", "fakeinbox.com",
  "mohmal.com", "emailondeck.com", "mintemail.com", "mytemp.email", "burnermail.io",
];

export function normalizeEmail(raw: string): string {
  const email = raw.trim().toLowerCase();
  const at = email.lastIndexOf("@");
  if (at < 1) return email;
  let local = email.slice(0, at);
  let domain = email.slice(at + 1);
  const plus = local.indexOf("+");
  if (plus > 0) local = local.slice(0, plus);
  if (FREE_MAIL.indexOf(domain) >= 0) {
    local = local.split(".").join("");
    domain = "gmail.com";
  }
  return local + "@" + domain;
}

export function isDisposable(email: string): boolean {
  const domain = email.trim().toLowerCase().split("@")[1] || "";
  return DISPOSABLE.indexOf(domain) >= 0;
}

export function validateEmail(email: string): string {
  const e = email.trim();
  if (e.length < 6 || e.length > 120) return "Enter a valid email address.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e)) return "Enter a valid email address.";
  if (isDisposable(e)) return "Temporary email addresses are not allowed. Use your real email.";
  return "";
}

export function validatePhonePK(phone: string): string {
  const p = phone.replace(/[\s-]/g, "");
  if (!/^(03\d{9}|\+923\d{9})$/.test(p)) return "Enter a valid Pakistani mobile number, like 03XXXXXXXXX.";
  return "";
}

export function validatePassword(pw: string): string {
  if (pw.length < 10) return "Use at least 10 characters.";
  if (!/[a-z]/.test(pw) || !/[A-Z]/.test(pw) || !/\d/.test(pw)) return "Mix upper case, lower case and a number.";
  return "";
}

export function validatePrompt(text: string): string {
  const t = text.trim();
  if (t.length < 5) return "Write a longer prompt (at least 5 characters).";
  if (t.length > 500) return "Prompt is too long (500 characters max).";
  return "";
}
