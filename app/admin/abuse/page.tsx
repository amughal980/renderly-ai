// DESIGN PREVIEW ONLY: every number below is dummy data.
const stats = [
  { l: "Blocked signups today", v: "37", d: "Temp mail and bots" },
  { l: "Flagged accounts", v: "9", d: "Waiting for review" },
  { l: "Blocked domains", v: "112,000+", d: "Updated daily" },
  { l: "Watermark matches", v: "2", d: "Leaks traced this month" },
];
const flagged = [
  { u: "ali.raza7@gmail.com", r: "4 accounts on 1 device", s: "92", k: "t-bad" },
  { u: "sara+3@gmail.com", r: "Same inbox as 2 accounts", s: "78", k: "t-bad" },
  { u: "user8821@tempx.io", r: "Temp mail domain", s: "71", k: "t-wt" },
  { u: "hira_n@yahoo.com", r: "6 signups from 1 IP", s: "54", k: "t-wt" },
  { u: "bilal.a@gmail.com", r: "Phone used twice", s: "47", k: "t-wt" },
];
const domains = ["10minutemail.net", "tempx.io", "guerrillamail.com", "mailinator.com", "yopmail.com", "sharklasers.com"];

export default function AbusePage() {
  const g = "1.6fr 1.6fr 0.7fr 1.3fr";
  return (
    <div>
      <h1 className="adm-h">Abuse &amp; fraud<span className="demotag">Demo data</span></h1>
      <div className="adm-sub">Fake accounts, shared devices and leaked videos</div>

      <div className="stats">
        {stats.map((s) => (
          <div key={s.l} className="card">
            <div className="stat-l">{s.l}</div>
            <div className="stat-v">{s.v}</div>
            <div className="stat-d">{s.d}</div>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginTop: 18 }}>
        <div className="ct">Flagged accounts<span>9 waiting</span></div>
        <div className="tw">
          <div className="tr th" style={{ gridTemplateColumns: g }}><span>ACCOUNT</span><span>WHY IT WAS FLAGGED</span><span>RISK</span><span>ACTION</span></div>
          {flagged.map((f) => (
            <div key={f.u} className="tr" style={{ gridTemplateColumns: g }}>
              <b>{f.u}</b><span style={{ color: "#b0b0c8" }}>{f.r}</span>
              <span><span className={"tg " + f.k}>{f.s}</span></span>
              <span><button className="ab">Review</button><button className="ab r">Block</button></span>
            </div>
          ))}
        </div>
      </div>

      <div className="cols">
        <div className="card">
          <div className="ct">Blocked email domains<span>112,000+ total</span></div>
          <div style={{ display: "flex", gap: 10 }}>
            <input className="in" placeholder="Add domain, e.g. tempx.io" aria-label="Domain to block" />
            <button className="gen" style={{ marginTop: 0, width: "auto", padding: "13px 20px", fontSize: 14 }}>Block</button>
          </div>
          <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 8 }}>
            {domains.map((d) => (<span key={d} className="tg t-pu">{d}</span>))}
          </div>
          <div style={{ marginTop: 14, color: "#b0b0c8", fontSize: 13 }}>Gmail dots and +aliases count as one inbox.</div>
        </div>
        <div className="card">
          <div className="ct">Leak tracer<span>Hidden watermark</span></div>
          <div style={{ color: "#b0b0c8", fontSize: 13, marginBottom: 12 }}>Upload a video you found online. We read the hidden ID inside it.</div>
          <div className="upload">Drop video file here</div>
          <div style={{ marginTop: 16, padding: 16, borderRadius: 14, border: "1px solid rgba(34,197,94,0.4)", background: "rgba(34,197,94,0.08)" }}>
            <div style={{ color: "#4ade80", fontWeight: 800, fontSize: 14 }}>Match found (example)</div>
            <div style={{ fontSize: 14, marginTop: 8, lineHeight: 1.7, color: "#e4e4f2" }}>Job #A81F - Free plan<br />User: Ali Raza<br />Created: Oct 22, 2026</div>
            <div style={{ marginTop: 12 }}><button className="ab r">Block user</button><button className="ab">View account</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}
