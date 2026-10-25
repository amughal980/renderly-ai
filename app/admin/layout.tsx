import type { Metadata } from "next";
import type { ReactNode } from "react";
import AdminNav from "@/components/AdminNav";

export const metadata: Metadata = {
  title: "Admin - Renderly.AI",
  robots: { index: false, follow: false },
};

export default function AdminLayout(props: { children: ReactNode }) {
  return (
    <div className="adm">
      <AdminNav />
      <div className="adm-main">{props.children}</div>
    </div>
  );
}
