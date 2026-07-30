// Inline SVG national flags for the language switcher. Emoji flags don't render
// on Windows, so we draw them. All use a shared 60x40 (3:2) viewBox and are
// sized via CSS (.lang-select__flag). Simplified but recognizable at ~13px.

// Unit five-point star (radius 1, centred at 0,0, pointing up).
const STAR =
  'M0,-1 L0.2245,-0.309 L0.9511,-0.309 L0.3633,0.1181 L0.5878,0.809 ' +
  'L0,0.382 L-0.5878,0.809 L-0.3633,0.1181 L-0.9511,-0.309 L-0.2245,-0.309 Z';

const FLAGS = {
  // United Kingdom — Union Jack (for the English option).
  en: (
    <>
      <rect width="60" height="40" fill="#012169" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="3" />
      <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="13" />
      <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="7" />
    </>
  ),
  // China — red field with five gold stars.
  zh: (
    <>
      <rect width="60" height="40" fill="#DE2910" />
      <g fill="#FFDE00">
        <path d={STAR} transform="translate(10,10) scale(6)" />
        <path d={STAR} transform="translate(20,4) scale(2)" />
        <path d={STAR} transform="translate(24,8) scale(2)" />
        <path d={STAR} transform="translate(24,14) scale(2)" />
        <path d={STAR} transform="translate(20,18) scale(2)" />
      </g>
    </>
  ),
  // France — blue / white / red vertical bands.
  fr: (
    <>
      <rect width="20" height="40" fill="#0055A4" />
      <rect x="20" width="20" height="40" fill="#fff" />
      <rect x="40" width="20" height="40" fill="#EF4135" />
    </>
  ),
  // Spain — red / yellow / red horizontal bands.
  es: (
    <>
      <rect width="60" height="40" fill="#AA151B" />
      <rect y="10" width="60" height="20" fill="#F1BF00" />
    </>
  ),
  // Italy — green / white / red vertical bands.
  it: (
    <>
      <rect width="20" height="40" fill="#009246" />
      <rect x="20" width="20" height="40" fill="#fff" />
      <rect x="40" width="20" height="40" fill="#CE2B37" />
    </>
  ),
  // Japan — white field with red disc.
  ja: (
    <>
      <rect width="60" height="40" fill="#fff" />
      <circle cx="30" cy="20" r="12" fill="#BC002D" />
    </>
  ),
  // South Korea — white field with red/blue taegeuk (trigrams omitted at this size).
  ko: (
    <>
      <rect width="60" height="40" fill="#fff" />
      <circle cx="30" cy="20" r="12" fill="#0047A0" />
      <path
        d="M18,20 A12,12 0 0,1 42,20 A6,6 0 0,1 30,20 A6,6 0 0,0 18,20 Z"
        fill="#CD2E3A"
      />
    </>
  ),
};

export function Flag({ code }) {
  const flag = FLAGS[code] || FLAGS.en;
  return (
    <svg
      className="lang-select__flag"
      viewBox="0 0 60 40"
      role="img"
      aria-hidden="true"
    >
      {flag}
    </svg>
  );
}
