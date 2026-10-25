"use client";
import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Icon from "@/components/Icon";
import { FREE_CREDITS } from "@/lib/plans";
import { validateEmail, validatePhonePK, validatePassword } from "@/lib/validate";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function submit(e: FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (name.trim().length < 2) next.name = "Enter your full name.";
    const em = validateEmail(email);
    if (em) next.email = em;
    const ph = validatePhonePK(phone);
    if (ph) next.phone = ph;
    const pw = validatePassword(password);
    if (pw) next.password = pw;
    if (!agree) next.agree = "Please accept the Terms and Privacy Policy.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    // Backend phase: the server repeats every check, blocks duplicate emails, phones, devices and IPs,
    // then sends the email link and the SMS code.
    router.push("/verify");
  }

  return (
    <div className="auth">
      <div className="auth-l">
        <div className="brand"><div className="logo">R</div><div className="brand-name">Renderly.AI</div></div>
        <div>
          <h1 className="h1" style={{ margin: 0, textAlign: "left", fontSize: 56 }}>Start with {FREE_CREDITS} free credits</h1>
          <p className="sub" style={{ margin: "20px 0 10px", textAlign: "left" }}>Make your first videos on us. Upgrade only when you need more.</p>
          <div className="perk"><div className="pi"><Icon name="tag" size={20} /></div>Pay only per video, no subscription</div>
          <div className="perk"><div className="pi"><Icon name="shield" size={20} /></div>Every account is verified to keep credits fair</div>
          <div className="perk"><div className="pi"><Icon name="card" size={20} /></div>Easypaisa payments, verified fast</div>
        </div>
        <div style={{ color: "#8a8aa0", fontSize: 13 }}>Renderly.AI - Beta</div>
      </div>
      <div className="auth-r">
        <form className="glass auth-card" onSubmit={submit} noValidate>
          <h2 className="auth-h">Create your account</h2>
          <div className="auth-s">Get {FREE_CREDITS} free credits when you sign up.</div>
          <button type="button" className="gbtn"><span className="gdot">G</span>Continue with Google</button>
          <div className="or"><i /> or use email <i /></div>
          <label className="fl" htmlFor="name" style={{ marginTop: 6 }}>Full name</label>
          <input id="name" className="in" autoComplete="name" maxLength={80} value={name} onChange={(e) => setName(e.target.value)} placeholder="Muhammad Asad" />
          {errors.name ? <div className="err">{errors.name}</div> : null}
          <label className="fl" htmlFor="email">Email</label>
          <input id="email" className="in" type="email" autoComplete="email" maxLength={120} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          {errors.email ? <div className="err">{errors.email}</div> : null}
          <label className="fl" htmlFor="phone">Phone (Easypaisa number)</label>
          <input id="phone" className="in" type="tel" autoComplete="tel" maxLength={14} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="03XXXXXXXXX" />
          {errors.phone ? <div className="err">{errors.phone}</div> : null}
          <label className="fl" htmlFor="pw">Password</label>
          <input id="pw" className="in" type="password" autoComplete="new-password" maxLength={128} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 10 characters" />
          {errors.password ? <div className="err">{errors.password}</div> : null}
          <label className="checkrow">
            <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
            I agree to the Terms and Privacy Policy
          </label>
          {errors.agree ? <div className="err">{errors.agree}</div> : null}
          <button type="submit" className="gen" style={{ marginTop: 22, fontSize: 16 }}>Create account</button>
          <div className="foot">Already have an account? <Link href="/login">Log in</Link></div>
        </form>
      </div>
    </div>
  );
}
