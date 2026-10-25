import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Renderly.AI - AI Video Generator",
  description: "Turn any idea into a cinematic video with AI.",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  );
}
