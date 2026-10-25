"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Icon from "@/components/Icon";
import { FREE_CREDITS } from "@/lib/plans";

export default function VerifyPage() {
  const router = useRouter();
  const [digits, setDigits] = useState(["", "", "", "", "", ""]);
  const full = digits.join("").length === 6;

  function setAt(i: number, v: string) {
    const clean = v.replace(/\D/g, "").slice(-1);
    const next = digits.slice();
    next[i] = clean;
    setDigits(next);
  }

  return (
    <div className="auth">
      <div className="auth-l">
        <div className="brand"><div className="logo">R</div><div className="brand-name">Renderly.AI</div></div>
        <div>
          <h1 className="h1" style={{ margin: 0, textAlign: "left", fontSize: 52 }}>One quick check and your {FREE_CREDITS} free credits are yours</h1>
          <p className="sub" style={{ margin: "20px 0 0", textAlign: "left" }}>We verify every account so credits stay fair for real creators.</p>
        </div>
        <div style={{ color: "#8a8aa0", fontSize: 13 }}>Renderly.AI - Beta</div>
      </div>
      <div className="auth-r">
        <div className="glass auth-card">
          <h2 className="auth-h">Verify your phone</h2>
          <div className="auth-s">We sent a 6-digit code to your phone number.</div>
          <div className="chk"><Icon name="check" size={18} />Email verified</div>
          <div className="chk"><Icon name="clock" size={18} />Enter the phone code below</div>
          <div className="otp">
            {digits.map((d, i) => (
              <input key={i} inputMode="numeric" autoComplete="one-time-code" maxLength={1} value={d} onChange={(e) => setAt(i, e.target.value)} aria-label={"Digit " + (i + 1)} />
            ))}
          </div>
          <div style={{ color: "#8a8aa0", fontSize: 13, marginTop: 14 }}>Resend code in 0:42</div>
          <button type="button" className="gen" style={{ fontSize: 16, opacity: full ? 1 : 0.5 }} disabled={!full} onClick={() => router.push("/dashboard")}>Verify and continue</button>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 20, color: "#8a8aa0", fontSize: 12 }}>
            <Icon name="lock" size={16} />Each phone number can claim free credits once.
          </div>
        </div>
      </div>
    </div>
  );
}
