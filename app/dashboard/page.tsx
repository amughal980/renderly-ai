"use client";
import { useState } from "react";
import Link from "next/link";

const nav = [
  { k: "text", l: "Text to Video" },
  { k: "image", l: "Image to Video" },
  { k: "video", l: "Video to Video" },
  { k: "voice", l: "AI Voiceover" },
  { k: "my", l: "My Videos" },
  { k: "community", l: "Community" },
];

const plans = [
  { n: "Free", p: "$0", per: "/month", items: ["30 credits/month", "720p export"], b: "Current plan", pro: false },
  { n: "Pro", p: "$29", per: "/month", items: ["500 credits/month", "4K export", "Priority generation", "No watermark"], b: "Upgrade", pro: true },
  { n: "Enterprise", p: "Custom", per: "", items: ["Custom credits", "Team workspace", "API access"], b: "Contact Sales", pro: false },
];

function Empty(props: { title: string; text: string }) {
  return (
    <div className="empty">
      <div className="icon" />
      <div className="empty-t">{props.title}</div>
      <div className="empty-d">{props.text}</div>
    </div>
  );
}

export default function Dashboard() {
  const [active, setActive] = useState("text");
  const [prompt, setPrompt] = useState("A majestic dragon flying over futuristic city at sunset, cinematic 4K...");
  const [dur, setDur] = useState("8s");
  const [quality, setQuality] = useState("4K");
  const [aspect, setAspect] = useState("16:9");
  const [style, setStyle] = useState("Cinematic");
  const [voice, setVoice] = useState("Male");
  const [msg, setMsg] = useState("");

  const secs = parseInt(dur, 10);
  const mult = quality === "4K" ? 1 : quality === "1080p" ? 0.7 : 0.5;
  const credits = Math.round(secs * 2.5 * mult);

  function generate() {
    setMsg("Demo only: connect your GPU backend to start real generation.");
  }

  return (
    <div className="dash">
      <div className="wrap" style={{ maxWidth: 1400 }}>
        <div className="topbar">
          <Link href="/" className="brand">
            <div className="logo">R</div>
            <div className="brand-name">Renderly.AI</div>
          </Link>
          <div className="user">
            <div className="avatar">JD</div>
            <span>Jane Doe</span>
          </div>
        </div>

        <div className="app">
          <div className="side">
            <div className="side-h">GENERATE</div>
            {nav.map((n) => (
              <button
                key={n.k}
                className={active === n.k ? "nav act" : "nav"}
                onClick={() => { setActive(n.k); setMsg(""); }}
              >
                <span className="dot" />
                {n.l}
              </button>
            ))}
            <div className="planbox">
              <div style={{ color: "#c4b5fd", fontWeight: 600 }}>Pro Plan Active</div>
              <div style={{ color: "#c9c9de", fontSize: 13, margin: "6px 0 12px" }}>Expires in 24 days</div>
              <div style={{ color: "#a78bfa", fontWeight: 600, fontSize: 14 }}>Manage plan</div>
            </div>
          </div>

          <div className="main">
            {active === "text" && (
              <div>
                <div className="title"><h1>Text to Video</h1><span className="beta">Beta</span></div>
                <div className="glass">
                  <span className="tag">Prompt</span>
                  <textarea className="prompt" value={prompt} maxLength={500} onChange={(e) => setPrompt(e.target.value)} />
                  <div className="count">{prompt.length}/500</div>
                  <div className="row3">
                    <select className="sel on" value={dur} onChange={(e) => setDur(e.target.value)}>
                      <option value="5s">Duration: 5s</option>
                      <option value="8s">Duration: 8s</option>
                      <option value="15s">Duration: 15s</option>
                    </select>
                    <select className="sel" value={quality} onChange={(e) => setQuality(e.target.value)}>
                      <option value="720p">Quality: 720p</option>
                      <option value="1080p">Quality: 1080p</option>
                      <option value="4K">Quality: 4K</option>
                    </select>
                    <select className="sel" value={aspect} onChange={(e) => setAspect(e.target.value)}>
                      <option value="16:9">Aspect Ratio: 16:9</option>
                      <option value="9:16">Aspect Ratio: 9:16</option>
                      <option value="1:1">Aspect Ratio: 1:1</option>
                    </select>
                  </div>
                </div>
                <button className="gen" onClick={generate}>Generate Video</button>
                <div className="est">Est. generation time: ~45 seconds - Uses {credits} credits</div>
                {msg ? <div className="msg">{msg}</div> : null}
                <Empty title="Start your first video" text="Your generated videos will appear here." />
              </div>
            )}

            {active === "image" && (
              <div>
                <div className="title"><h1>Image to Video</h1></div>
                <div className="glass">
                  <label className="upload">Click to upload an image<input type="file" accept="image/*" style={{ display: "none" }} /></label>
                  <div className="label">Motion prompt</div>
                  <textarea className="prompt" placeholder="Describe the motion..." />
                  <div className="label">Duration</div>
                  <select className="sel on" value={dur} onChange={(e) => setDur(e.target.value)}>
                    <option value="5s">5s</option>
                    <option value="8s">8s</option>
                    <option value="15s">15s</option>
                  </select>
                </div>
                <button className="gen" onClick={generate}>Animate Image</button>
                {msg ? <div className="msg">{msg}</div> : null}
              </div>
            )}

            {active === "video" && (
              <div>
                <div className="title"><h1>Video to Video</h1></div>
                <div className="glass">
                  <label className="upload">Click to upload a video<input type="file" accept="video/*" style={{ display: "none" }} /></label>
                  <div className="label">Style</div>
                  <select className="sel on" value={style} onChange={(e) => setStyle(e.target.value)}>
                    <option>Cinematic</option>
                    <option>Anime</option>
                    <option>Cartoon</option>
                  </select>
                </div>
                <button className="gen" onClick={generate}>Transform Video</button>
                {msg ? <div className="msg">{msg}</div> : null}
              </div>
            )}

            {active === "voice" && (
              <div>
                <div className="title"><h1>AI Voiceover</h1></div>
                <div className="glass">
                  <div className="label" style={{ marginTop: 0 }}>Your text</div>
                  <textarea className="prompt" placeholder="Type what the voice should say..." />
                  <div className="label">Voice</div>
                  <select className="sel on" value={voice} onChange={(e) => setVoice(e.target.value)}>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <button className="gen" onClick={generate}>Generate Voice</button>
                {msg ? <div className="msg">{msg}</div> : null}
              </div>
            )}

            {active === "my" && (
              <div>
                <div className="title"><h1>My Videos</h1></div>
                <Empty title="No videos yet" text="Generate a video to see it here." />
              </div>
            )}

            {active === "community" && (
              <div>
                <div className="title"><h1>Community</h1></div>
                <Empty title="Nothing shared yet" text="Videos shared by other creators will appear here." />
              </div>
            )}
          </div>

          <div className="right">
            <h2 className="right-h">Packages</h2>
            {plans.map((p) => (
              <div key={p.n} className={p.pro ? "pl pro" : "pl"}>
                {p.pro ? <span className="mp">Most Popular</span> : null}
                <div className="pn">{p.n}</div>
                <div className="pp">{p.p}<span>{p.per}</span></div>
                {p.items.map((i) => (
                  <div key={i} className="li">- {i}</div>
                ))}
                <button className="pbtn">{p.b}</button>
              </div>
            ))}
            <h2 className="right-h" style={{ marginTop: 28 }}>My Videos</h2>
            <Empty title="No videos yet" text="Generate a video to see it here." />
          </div>
        </div>
      </div>
    </div>
  );
}
