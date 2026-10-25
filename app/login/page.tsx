"use client";
import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Icon from "@/components/Icon";
import { validateEmail } from "@/lib/validate";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    const m = validateEmail(email);
    if (m) { setErr(m); return; }
    if (password.length < 1) { setErr("Enter your password."); return; }
    setErr("");
    // Backend phase: send to the server, which checks the password and rate limits attempts.
    router.push("/dashboard");
  }

  return (
    <div className="auth">
      <div className="auth-l">
        <div className="brand"><div className="logo">R</div><div className="brand-name">Renderly.AI</div></div>
        <div>
          <h1 className="h1" style={{ margin: 0, textAlign: "left", fontSize: 56 }}>Create cinematic videos in minutes</h1>
          <p className="sub" style={{ margin: "20px 0 10px", textAlign: "left" }}>Type a prompt, pick a style, and let our GPUs render your idea.</p>
          <div className="perk"><div className="pi"><Icon name="tag" size={20} /></div>Pay only per video, no subscription</div>
          <div className="perk"><div className="pi"><Icon name="video" size={20} /></div>High quality, no watermark on Pro</div>
          <div className="perk"><div className="pi"><Icon name="card" size={20} /></div>Easypaisa payments, verified fast</div>
        </div>
        <div style={{ color: "#8a8aa0", fontSize: 13 }}>Renderly.AI - Beta</div>
      </div>
      <div className="auth-r">
        <form className="glass auth-card" onSubmit={submit} noValidate>
          <h2 className="auth-h">Welcome back</h2>
          <div className="auth-s">Log in to continue creating videos.</div>
          <button type="button" className="gbtn"><span className="gdot">G</span>Continue with Google</button>
          <div className="or"><i /> or use email <i /></div>
          <label className="fl" htmlFor="email">Email</label>
          <input id="email" className="in" type="email" autoComplete="email" maxLength={120} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          <label className="fl" htmlFor="pw">Password</label>
          <input id="pw" className="in" type="password" autoComplete="current-password" maxLength={128} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your password" />
          {err ? <div className="err">{err}</div> : null}
          <button type="submit" className="gen" style={{ marginTop: 22, fontSize: 16 }}>Log in</button>
          <div className="foot">New to Renderly? <Link href="/signup">Create account</Link></div>
        </form>
      </div>
    </div>
  );
}
