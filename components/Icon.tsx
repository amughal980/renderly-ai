const paths: Record<string, string> = {
  star: "M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5z",
  image: "M3 7a3 3 0 013-3h12a3 3 0 013 3v10a3 3 0 01-3 3H6a3 3 0 01-3-3zM21 16l-5-5-9 9M9 8.5h.01",
  video: "M2 9a3 3 0 013-3h8a3 3 0 013 3v6a3 3 0 01-3 3H5a3 3 0 01-3-3zM16 10l6-3v10l-6-3",
  mic: "M12 3a3 3 0 013 3v6a3 3 0 01-6 0V6a3 3 0 013-3zM5 11a7 7 0 0014 0M12 18v3",
  folder: "M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2z",
  users: "M9 4.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zM2 20a7 7 0 0114 0M16 4.5a3.5 3.5 0 010 7M18 20a6 6 0 00-3-5",
  lock: "M6 11h12a2 2 0 012 2v7a1 1 0 01-1 1H5a1 1 0 01-1-1v-7a2 2 0 012-2zM8 11V7a4 4 0 018 0v4",
  check: "M5 12l5 5 9-10",
  play: "M8 5l12 7-12 7z",
  download: "M12 3v12M7 11l5 5 5-5M4 21h16",
  clock: "M12 3a9 9 0 100 18 9 9 0 000-18zM12 7v5l3 2",
  home: "M3 11l9-8 9 8v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z",
  card: "M5 5h14a3 3 0 013 3v8a3 3 0 01-3 3H5a3 3 0 01-3-3V8a3 3 0 013-3zM2 10h20",
  tag: "M3 12V4h8l10 10-8 8zM7.5 8.5h.01",
  cpu: "M8 6h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2zM9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4",
  shield: "M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5zM9 12l2 2 4-4",
  settings: "M12 9a3 3 0 100 6 3 3 0 000-6zM12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2",
};

export default function Icon(props: { name: string; size?: number }) {
  const size = props.size ?? 22;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[props.name] ?? paths.star} />
    </svg>
  );
}
