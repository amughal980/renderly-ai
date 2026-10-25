// DESIGN PREVIEW ONLY: every number below is dummy data.
const stats = [
  { l: "Revenue (month)", v: "$4,820", d: "+12.4% vs last month", c: "#22c55e" },
  { l: "GPU cost", v: "$1,920", d: "40% of revenue", c: "#facc15" },
  { l: "Net profit", v: "$2,900", d: "60% margin", c: "#22c55e" },
  { l: "Active users", v: "1,248", d: "+86 this week", c: "#22c55e" },
];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const rev = [120, 150, 110, 170, 190, 160, 200];
const cost = [48, 60, 44, 68, 76, 64, 80];
const pays = [
  { u: "Ali Raza", a: "Rs 2,900", t: "EP-88213490", w: "2 min ago" },
  { u: "Sara Khan", a: "Rs 8,100", t: "EP-88213477", w: "9 min ago" },
  { u: "Usman Tariq", a: "Rs 1,450", t: "EP-88213402", w: "21 min ago" },
  { u: "Hira Noor", a: "Rs 8,100", t: "EP-88213391", w: "1 hr ago" },
];
const users = [
  { n: "Ali Raza", e: "ali@mail.com", p: "Pro", c: "412", k: "t-ok", s: "Active" },
  { n: "Sara Khan", e: "sara@mail.com", p: "Pro", c: "388", k: "t-ok", s: "Active" },
  { n: "Usman Tariq", e: "usman@mail.com", p: "Free", c: "12", k: "t-wt", s: "Low credits" },
  { n: "Bilal Ahmed", e: "bilal@mail.com", p: "Free", c: "0", k: "t-bad", s: "Blocked" },
];

export default function AdminOverview() {
  const gp = "1.3fr 1fr 1.3fr 1fr 1.4fr";
  const gu = "1.2fr 1.5fr 0.7fr 0.7fr 1fr";
  return (
    <div>
      <h1 className="adm-h">Overview<span className="demotag">Demo data</span></h1>
      <div className="adm-sub">Sunday, October 25, 2026</div>

      <div className="stats">
        {stats.map((s) => (
          <div key={s.l} className="card">
            <div className="stat-l">{s.l}</div>
            <div className="stat-v">{s.v}</div>
            <div className="stat-d" style={{ color: s.c }}>{s.d}</div>
          </div>
        ))}
      </div>

      <div className="cols">
        <div className="card">
          <div className="ct">Revenue vs GPU cost<span>This week</span></div>
          <svg width="100%" viewBox="0 0 600 250" aria-label="Revenue and GPU cost per day" role="img">
            <defs>
              <linearGradient id="rv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#a78bfa" />
                <stop offset="1" stopColor="#6d4be0" />
              </linearGradient>
            </defs>
            <path d="M0 215H600M0 160H600M0 105H600M0 50H600" stroke="rgba(255,255,255,0.06)" />
            {days.map((d, i) => (
              <g key={d}>
                <rect x={30 + i * 80} y={215 - rev[i]} width="26" height={rev[i]} rx="6" fill="url(#rv)" />
                <rect x={60 + i * 80} y={215 - cost[i]} width="26" height={cost[i]} rx="6" fill="#3b3a6b" />
                <text x={58 + i * 80} y="236" fill="#8a8aa0" fontSize="12" textAnchor="middle">{d}</text>
              </g>
            ))}
          </svg>
        </div>
        <div className="card">
          <div className="ct">Pricing &amp; margin</div>
          <div style={{ color: "#b0b0c8", fontSize: 13 }}>Example: 10s, 1080p video</div>
          <div className="row"><span>GPU cost per video</span><b>$0.30</b></div>
          <div className="row"><span>Your margin</span><b style={{ color: "#a78bfa" }}>60%</b></div>
          <div className="slider"><div /><b /></div>
          <div className="row"><span>Customer price</span><b>$0.48</b></div>
          <div className="row"><span>Credits charged</span><b style={{ color: "#4ade80" }}>48 credits</b></div>
          <button className="gen" style={{ fontSize: 15, padding: 12 }}>Save pricing</button>
        </div>
      </div>

      <div className="cols">
        <div className="card">
          <div className="ct">Pending Easypaisa payments<span>{pays.length} waiting</span></div>
          <div className="tw">
            <div className="tr th" style={{ gridTemplateColumns: gp }}><span>USER</span><span>AMOUNT</span><span>TRANSACTION ID</span><span>TIME</span><span>ACTION</span></div>
            {pays.map((p) => (
              <div key={p.t} className="tr" style={{ gridTemplateColumns: gp }}>
                <b>{p.u}</b><span>{p.a}</span><span style={{ color: "#b0b0c8" }}>{p.t}</span><span style={{ color: "#8a8aa0" }}>{p.w}</span>
                <span><button className="ab y">Approve</button><button className="ab r">Reject</button></span>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <div className="ct">Video jobs<span>View all</span></div>
          <div className="row"><span>Running now</span><b style={{ color: "#a78bfa" }}>6</b></div>
          <div className="row"><span>In queue</span><b style={{ color: "#facc15" }}>14</b></div>
          <div className="row"><span>Completed today</span><b style={{ color: "#4ade80" }}>212</b></div>
          <div className="row"><span>Failed (refunded)</span><b style={{ color: "#f87171" }}>3</b></div>
        </div>
      </div>

      <div className="card" style={{ marginTop: 18 }}>
        <div className="ct">Recent users<span>View all users</span></div>
        <div className="tw">
          <div className="tr th" style={{ gridTemplateColumns: gu }}><span>NAME</span><span>EMAIL</span><span>PLAN</span><span>CREDITS</span><span>STATUS</span></div>
          {users.map((u) => (
            <div key={u.e} className="tr" style={{ gridTemplateColumns: gu }}>
              <b>{u.n}</b><span style={{ color: "#b0b0c8" }}>{u.e}</span>
              <span><span className="tg t-pu">{u.p}</span></span><span>{u.c}</span>
              <span><span className={"tg " + u.k}>{u.s}</span></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
