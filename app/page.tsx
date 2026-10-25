import Link from "next/link";
import Icon from "@/components/Icon";
import { plans } from "@/lib/plans";

const features = [
  { t: "Text to Video", d: "Describe a scene and get a cinematic clip.", tag: "Type a prompt", icon: "star", cls: "icon" },
  { t: "Image to Video", d: "Bring any still image to life with motion.", tag: "Upload a photo", icon: "image", cls: "icon ic2" },
  { t: "Video to Video", d: "Restyle any clip as anime, cartoon or cinematic.", tag: "Upload a clip", icon: "video", cls: "icon ic3" },
  { t: "AI Voiceover", d: "Add natural narration to your videos.", tag: "Pick a voice", icon: "mic", cls: "icon ic4" },
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
            <Link href="/login">Log in</Link>
            <Link href="/signup" className="cta-sm">Get started</Link>
          </div>
        </div>

        <div className="hero">
          <div className="pill">Beta - Pay per video, no subscription needed</div>
          <h1 className="h1">Turn any idea into a cinematic video</h1>
          <p className="sub">Type a prompt, pick a style, and get a clip in minutes. Pay only for what you generate.</p>
          <div className="btns">
            <Link href="/signup" className="btn-main">Start free</Link>
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
          <Link href="/signup" className="gen">Generate Video</Link>
          <div className="est">Est. generation time: ~45 seconds - Uses 20 credits</div>
        </div>

        <div className="grid4">
          {features.map((f) => (
            <div key={f.t} className="card">
              <div className={f.cls}><Icon name={f.icon} size={28} /></div>
              <div className="card-t">{f.t}</div>
              <div className="card-d">{f.d}</div>
              <span className="chip">{f.tag}</span>
            </div>
          ))}
        </div>

        <div className="sec">
          <div className="eyebrow">Pricing</div>
          <h2 className="h2">Simple, credit-based plans</h2>
        </div>
        <div className="grid3">
          {plans.map((p) => (
            <div key={p.id} className={p.popular ? "pl big pro" : "pl big"}>
              {p.popular ? <span className="mp">Most Popular</span> : null}
              <div className="pn">{p.name}</div>
              <div className="pp">{p.price}<span>{p.per}</span></div>
              {p.items.map((i) => (
                <div key={i} className="li">- {i}</div>
              ))}
              <Link href="/signup" className="pbtn">{p.button}</Link>
            </div>
          ))}
        </div>

        <div className="final">
          <h2 className="h2" style={{ marginTop: 0 }}>Ready to create your first video?</h2>
          <div className="btns">
            <Link href="/signup" className="btn-main">Get started free</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
