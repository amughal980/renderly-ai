"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";

const items = [
  { href: "/admin", label: "Overview", icon: "home" },
  { href: "/admin/users", label: "Users", icon: "users" },
  { href: "/admin/jobs", label: "Video jobs", icon: "video" },
  { href: "/admin/payments", label: "Payments", icon: "card" },
  { href: "/admin/pricing", label: "Pricing & margin", icon: "tag" },
  { href: "/admin/abuse", label: "Abuse & fraud", icon: "shield" },
  { href: "/admin/gpu", label: "GPU providers", icon: "cpu" },
  { href: "/admin/settings", label: "Settings", icon: "settings" },
];

// Only Overview and Abuse & fraud are built yet. Other links open the Overview for now.
const built = ["/admin", "/admin/abuse"];

export default function AdminNav() {
  const path = usePathname();
  return (
    <div className="adm-side">
      <div className="brand" style={{ margin: "0 8px 20px" }}>
        <div className="logo" style={{ width: 40, height: 40, fontSize: 20 }}>R</div>
        <div>
          <div style={{ fontWeight: 800, fontSize: 19 }}>Renderly.AI</div>
          <div style={{ fontSize: 11, color: "#c4b5fd", fontWeight: 700, letterSpacing: 1 }}>ADMIN</div>
        </div>
      </div>
      <nav className="adm-nav">
        {items.map((it) => (
          <Link key={it.href} href={built.indexOf(it.href) >= 0 ? it.href : "/admin"} className={path === it.href ? "act" : ""}>
            <Icon name={it.icon} size={18} />
            {it.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
