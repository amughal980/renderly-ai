import Link from "next/link";

const features = [
  { t: "Text to Video", d: "Describe a scene and get a cinematic clip." },
  { t: "Image to Video", d: "Bring any still image to life with motion." },
  { t: "AI Voiceover", d: "Add natural narration to your videos." },
];

const plans = [
  { n: "Free", p: "$0", per: "/month", items: ["30 credits/month", "720p export", "Watermark"], b: "Start free", pro: false },
  { n: "Pro", p: "$29", per: "/month", items: ["500 credits/month", "4K export", "Priority generation", "No watermark"], b: "Get Pro", pro: true },
  { n: "Enterprise", p: "Custom", per: "", items: ["Custom credits", "Team workspace", "API access"], b: "Contact sales", pro: false },
];

export default function Landing() {
  return (
    <div className="page">
      <div className="wrap">
        <div className="topbar">
          <div className="brand">
            <div className="logo">R</div>
            <div className="brand-name">Renderly.AI</div>
          </div>
          <div className="links">
            <span>Features</span>
            <span>Pricing</span>
            <Link href="/dashboard">Log in</Link>
            <Link href="/dashboard" className="cta-sm">Get started</Link>
          </div>
        </div>

        <div className="hero">
          <div className="pill">Beta - Pay per video, no subscription needed</div>
          <h1 className="h1">Turn any idea into a cinematic video</h1>
          <p className="sub">Type a prompt, pick a style, and get a 4K clip in under a minute. Pay only for what you generate.</p>
          <div className="btns">
            <Link href="/dashboard" className="btn-main">Start free</Link>
            <Link href="/dashboard" className="btn-ghost">Open dashboard</Link>
          </div>
        </div>

        <div className="glass demo">
          <span className="tag">Prompt</span>
          <div className="prompt">A majestic dragon flying over a futuristic city at sunset, cinematic 4K...</div>
          <div className="row3">
            <div className="sel">Duration: 8s</div>
            <div className="sel">Quality: 4K</div>
            <div className="sel">Aspect Ratio: 16:9</div>
          </div>
          <Link href="/dashboard" className="gen" style={{ textAlign: "center" }}>Generate Video</Link>
          <div className="est">Est. generation time: ~45 seconds - Uses 20 credits</div>
        </div>

        <div className="grid3" style={{ marginTop: 60 }}>
          {features.map((f) => (
            <div key={f.t} className="card">
              <div className="icon" />
              <div className="card-t">{f.t}</div>
              <div className="card-d">{f.d}</div>
            </div>
          ))}
        </div>

        <div className="sec">
          <div className="eyebrow">Pricing</div>
          <h2 className="h2">Simple, credit-based plans</h2>
        </div>
        <div className="grid3">
          {plans.map((p) => (
            <div key={p.n} className={p.pro ? "pl big pro" : "pl big"}>
              {p.pro ? <span className="mp">Most Popular</span> : null}
              <div className="pn">{p.n}</div>
              <div className="pp">{p.p}<span>{p.per}</span></div>
              {p.items.map((i) => (
                <div key={i} className="li">- {i}</div>
              ))}
              <Link href="/dashboard" className="pbtn">{p.b}</Link>
            </div>
          ))}
        </div>

        <div className="final">
          <h2 className="h2" style={{ marginTop: 0 }}>Ready to create your first video?</h2>
          <div className="btns">
            <Link href="/dashboard" className="btn-main">Get started free</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
