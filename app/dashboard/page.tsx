"use client";
import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import { plans, estimateCredits, SHOW_SAMPLE_VIDEO, DRAFT_DAYS } from "@/lib/plans";
import { validatePrompt } from "@/lib/validate";

const nav = [
  { k: "text", l: "Text to Video", i: "star" },
  { k: "image", l: "Image to Video", i: "image" },
  { k: "video", l: "Video to Video", i: "video" },
  { k: "voice", l: "AI Voiceover", i: "mic" },
  { k: "my", l: "My Videos", i: "folder" },
  { k: "community", l: "Community", i: "users" },
];

function Empty(props: { title: string; text: string }) {
  return (
    <div className="empty">
      <div className="icon"><Icon name="play" size={28} /></div>
      <div className="empty-t">{props.title}</div>
      <div className="empty-d">{props.text}</div>
    </div>
  );
}

function SampleVideo(props: { pro: boolean; onUpgrade: () => void }) {
  const pro = props.pro;
  return (
    <div className="vwrap">
      <div className="vthumb">
        <svg viewBox="0 0 300 130" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
          <path fill="#140f24" d="M0 130V88h20V64h16v24h14V46h16v42h20V74h16V62h14v30h20V58h16v34h18V80h20V66h14v64z" />
          <path fill="#1c1030" d="M150 38l-34-22 14 24-24 4 28 8-6 12 22-10 22 10-6-12 28-8-24-4 14-24z" />
        </svg>
        {pro ? null : <div className="wm"><div><b>R</b>RENDERLY.AI</div></div>}
        <span className="vbadge">{pro ? "4K - Pro" : "720p - Free plan"}</span>
        {pro ? null : <span className="vdraft">Draft</span>}
        <div className="vbar"><Icon name="play" size={16} /><i><b /></i><span>0:03 / 0:08</span></div>
      </div>
      <div style={{ fontWeight: 800, fontSize: 18, marginTop: 14 }}>Dragon Over City</div>
      <div style={{ color: "#a5a5c0", fontSize: 13, marginTop: 2 }}>{pro ? "Pro plan, original quality" : "Free plan preview, watch only"}</div>
      {pro ? (
        <div>
          <div className="vnote" style={{ color: "#4ade80" }}><Icon name="check" size={16} />Ready to download</div>
          <div className="vrow"><button className="gen" style={{ marginTop: 0, fontSize: 15, padding: 14 }}>Download 4K, no watermark</button></div>
        </div>
      ) : (
        <div>
          <div className="vnote" style={{ color: "#facc15" }}><Icon name="clock" size={16} />Saved in Drafts for {DRAFT_DAYS} days</div>
          <div className="vrow">
            <div className="lk"><Icon name="lock" size={18} />Download locked</div>
            <button className="gen" style={{ marginTop: 0, fontSize: 15, padding: 14 }} onClick={props.onUpgrade}>Upgrade to download</button>
          </div>
        </div>
      )}
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
  const [pro, setPro] = useState(false);
  const [tab, setTab] = useState("drafts");
  const [showUp, setShowUp] = useState(false);

  const credits = estimateCredits(parseInt(dur, 10), quality);

  function generate() {
    const e = validatePrompt(prompt);
    if (e) { setMsg(e); return; }
    setMsg("Demo only: connect your GPU backend to start real generation.");
  }

  function choose(k: string) {
    setActive(k);
    setMsg("");
  }

  const showDrafts = tab === "drafts";
  const hasVideo = SHOW_SAMPLE_VIDEO && ((showDrafts && !pro) || (!showDrafts && pro));

  return (
    <div className="dash">
      <div className="wrap" style={{ maxWidth: 1400 }}>
        <div className="topbar">
          <Link href="/" className="brand">
            <div className="logo">R</div>
            <div className="brand-name">Renderly.AI</div>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div className="seg" aria-label="Preview as">
              <button className={pro ? "" : "on"} onClick={() => setPro(false)}>Preview: Free</button>
              <button className={pro ? "on" : ""} onClick={() => setPro(true)}>Preview: Pro</button>
            </div>
            <div className="user"><div className="avatar">JD</div><span>Jane Doe</span></div>
          </div>
        </div>

        <div className="app">
          <div className="side">
            <div className="side-h">GENERATE</div>
            {nav.map((n) => (
              <button key={n.k} className={active === n.k ? "nav act" : "nav"} onClick={() => choose(n.k)}>
                <Icon name={n.i} />
                {n.l}
              </button>
            ))}
            <div className="planbox">
              <div style={{ color: "#c4b5fd", fontWeight: 600 }}>{pro ? "Pro Plan Active" : "Free Plan"}</div>
              <div style={{ color: "#c9c9de", fontSize: 13, margin: "6px 0 12px" }}>{pro ? "Expires in 24 days" : "30 credits left"}</div>
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
                    <select className="sel on" value={dur} onChange={(e) => setDur(e.target.value)} aria-label="Duration">
                      <option value="5s">Duration: 5s</option>
                      <option value="8s">Duration: 8s</option>
                      <option value="15s">Duration: 15s</option>
                    </select>
                    <select className="sel" value={quality} onChange={(e) => setQuality(e.target.value)} aria-label="Quality">
                      <option value="720p">Quality: 720p</option>
                      <option value="1080p">Quality: 1080p</option>
                      <option value="4K">Quality: 4K</option>
                    </select>
                    <select className="sel" value={aspect} onChange={(e) => setAspect(e.target.value)} aria-label="Aspect ratio">
                      <option value="16:9">Aspect Ratio: 16:9</option>
                      <option value="9:16">Aspect Ratio: 9:16</option>
                      <option value="1:1">Aspect Ratio: 1:1</option>
                    </select>
                  </div>
                </div>
                <button className="gen" onClick={generate}>Generate Video</button>
                <div className="est">Est. generation time: ~45 seconds - Uses {credits} credits</div>
                {msg ? <div className="msg">{msg}</div> : null}
                <Empty title="Your first video starts here" text="Write a prompt above and press Generate. Finished videos will appear in this space." />
              </div>
            )}

            {active === "image" && (
              <div>
                <div className="title"><h1>Image to Video</h1></div>
                <div className="glass">
                  <label className="upload">Click to upload an image<input type="file" accept="image/png,image/jpeg,image/webp" style={{ display: "none" }} /></label>
                  <div className="label">Motion prompt</div>
                  <textarea className="prompt" maxLength={500} placeholder="Describe the motion..." />
                  <div className="label">Duration</div>
                  <select className="sel on" value={dur} onChange={(e) => setDur(e.target.value)} aria-label="Duration">
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
                  <label className="upload">Click to upload a video<input type="file" accept="video/mp4,video/webm" style={{ display: "none" }} /></label>
                  <div className="label">Style</div>
                  <select className="sel on" value={style} onChange={(e) => setStyle(e.target.value)} aria-label="Style">
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
                  <textarea className="prompt" maxLength={500} placeholder="Type what the voice should say..." />
                  <div className="label">Voice</div>
                  <select className="sel on" value={voice} onChange={(e) => setVoice(e.target.value)} aria-label="Voice">
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
                <div className="tabs">
                  <button className={showDrafts ? "tab on" : "tab"} onClick={() => setTab("drafts")}>Drafts</button>
                  <button className={showDrafts ? "tab" : "tab on"} onClick={() => setTab("ready")}>Ready to download</button>
                </div>
                <div style={{ color: "#a5a5c0", fontSize: 14 }}>Free plan videos stay in Drafts until you upgrade.</div>
                {hasVideo ? (
                  <SampleVideo pro={pro} onUpgrade={() => setShowUp(true)} />
                ) : (
                  <Empty title={showDrafts ? "No drafts yet" : "Nothing to download yet"} text="Generate a video to see it here." />
                )}
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
              <div key={p.id} className={p.popular ? "pl pro" : "pl"}>
                {p.popular ? <span className="mp">Most Popular</span> : null}
                <div className="pn">{p.name}</div>
                <div className="pp">{p.price}<span>{p.per}</span></div>
                {p.items.map((i) => (
                  <div key={i} className="li">- {i}</div>
                ))}
                <button className="pbtn" onClick={() => setShowUp(true)}>{p.id === "free" ? "Current plan" : p.button}</button>
              </div>
            ))}
            <h2 className="right-h" style={{ marginTop: 28 }}>My Videos</h2>
            <Empty title="No videos yet" text="Generate a video to see it here." />
          </div>
        </div>
      </div>

      {showUp ? (
        <div className="overlay" onClick={() => setShowUp(false)}>
          <div className="modal" role="dialog" aria-modal="true" aria-label="Upgrade to download" onClick={(e) => e.stopPropagation()}>
            <div className="icon" style={{ width: 54, height: 54 }}><Icon name="lock" size={26} /></div>
            <div style={{ fontSize: 22, fontWeight: 800, marginTop: 16 }}>Upgrade to download</div>
            <div style={{ color: "#b0b0c8", fontSize: 14, lineHeight: 1.5, marginTop: 6 }}>Your video is safe in Drafts. Upgrade to Pro to download it with no watermark.</div>
            <div className="chk"><Icon name="check" size={16} />500 credits every month</div>
            <div className="chk"><Icon name="check" size={16} />4K export, no watermark</div>
            <div className="chk"><Icon name="check" size={16} />Priority generation</div>
            <button className="gen" style={{ fontSize: 16 }} onClick={() => { setPro(true); setShowUp(false); }}>Upgrade to Pro, $29/month</button>
            <button className="btn2">Pay with Easypaisa</button>
            <button className="linkbtn" onClick={() => setShowUp(false)}>Not now, keep it in Drafts</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
