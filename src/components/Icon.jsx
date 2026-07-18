// Inline SVG icon set, lifted verbatim from the candidate's Claude Design
// (连勇竞选网站.dc.html) so the migration is 1:1. Stroke icons inherit `color`
// via currentColor; the two solid marks (play, star) set fill instead.
const STROKE = {
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.6"/><path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3"/>',
  users: '<circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c0-4.2 3.4-6.5 7.5-6.5s7.5 2.3 7.5 6.5"/>',
  bars: '<path d="M4 20h16"/><path d="M4 20V8M9 20v-7M14 20v-4M19 20V5"/><path d="M4 8l5-4 5 3 5-4"/>',
  barsAlt: '<path d="M4 20h16"/><path d="M4 20V9M9 20v-7M14 20v-4M19 20V6"/><path d="M4 9l5-4 5 3 5-4"/>',
  institution: '<path d="M4 10l8-6 8 6"/><path d="M4 10v10h16V10"/><path d="M9 20v-5h6v5"/><path d="M11 8h2"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  network: '<circle cx="6" cy="6" r="2.4"/><circle cx="18" cy="6" r="2.4"/><circle cx="12" cy="18" r="2.4"/><path d="M7.6 7.6l3 8M16.4 7.6l-3 8M8 6h8"/>',
  trending: '<path d="M3 17l6-6 4 4 8-8"/><path d="M21 7v6h-6"/>',
  orgchart: '<rect x="9" y="3" width="6" height="4" rx="1"/><rect x="3" y="15" width="6" height="4" rx="1"/><rect x="15" y="15" width="6" height="4" rx="1"/><path d="M12 7v3M6 15v-2h12v2M12 10v3"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  usersPair: '<circle cx="9" cy="8" r="3"/><path d="M3.5 19c0-3 2.5-4.6 5.5-4.6s5.5 1.6 5.5 4.6"/><circle cx="17" cy="8.5" r="2.4"/><path d="M15.5 14.6c3 .2 5 1.8 5 4.4"/>',
  heartCheck: '<path d="M12 20s-7-4.4-9.2-9C1.3 8 3 4.5 6.3 4.5c1.9 0 3.2 1.1 3.9 2.2.7-1.1 2-2.2 3.9-2.2 2.5 0 4.3 2 4.1 4.7"/><path d="M15 13l2 2 4-4"/>',
  lightbulb: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.5.4.5 1 .5 1.6h6c0-.6 0-1.2.5-1.6A6 6 0 0 0 12 3z"/>',
  targetDot: '<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="9"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/>',
  building: '<path d="M6 21V9l6-4 6 4v12"/><path d="M6 21h12M10 21v-5h4v5M9 12h1M14 12h1"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c0-4.2 3.4-6.5 7.5-6.5s7.5 2.3 7.5 6.5"/>',
  ballot: '<rect x="4" y="4" width="16" height="13" rx="2"/><path d="M8 21h8M9 9l2 2 4-4"/>',
  checkCircle: '<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>',
  download: '<path d="M12 3v12M8 11l4 4 4-4M5 21h14"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  award: '<circle cx="12" cy="9" r="5"/><path d="M9 13.5L7.5 21l4.5-2.6L16.5 21 15 13.5"/>',
  check: '<path d="M20 6L9 17l-5-5"/>',
  flag: '<path d="M5 21V4"/><path d="M5 4.5h12l-2.2 3.3L17 11H5"/>',
};

const FILL = {
  play: '<path d="M8 5v14l11-7z"/>',
  star: '<path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.9 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z"/>',
};

export function Icon({ name, size = 24, stroke = 1.7, className, style }) {
  const solid = FILL[name];
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className,
    style,
    'aria-hidden': true,
  };
  if (solid) {
    return <svg {...common} fill="currentColor" dangerouslySetInnerHTML={{ __html: solid }} />;
  }
  return (
    <svg
      {...common}
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: STROKE[name] || '' }}
    />
  );
}
