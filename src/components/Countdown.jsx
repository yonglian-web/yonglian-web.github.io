import { useEffect, useState } from 'react';
import { useSite } from '../data/useSite.js';

// Voting opens 17 Aug 2026 00:00 ET (04:00 UTC); closes 1 Oct 2026 12:00 ET
// (16:00 UTC). Ported from the candidate's js/main.js, which hardcodes the same
// instants.
const OPEN = Date.UTC(2026, 7, 17, 4, 0, 0);
const CLOSE = Date.UTC(2026, 9, 1, 16, 0, 0);
const DAY = 864e5;

export function Countdown() {
  const s = useSite();
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 60000);
    return () => clearInterval(id);
  }, []);

  let label;
  let value;
  let date;
  if (now < OPEN) {
    label = s.countdown.before;
    value = Math.ceil((OPEN - now) / DAY) + s.countdown.days;
    date = s.countdown.openDate;
  } else if (now < CLOSE) {
    label = s.countdown.during;
    value = Math.ceil((CLOSE - now) / DAY) + s.countdown.days;
    date = s.countdown.closeDate;
  } else {
    label = s.countdown.after;
    value = s.countdown.thanks;
    date = '';
  }

  return (
    <div className="countdown-card">
      <small>{label}</small>
      <b>{value}</b>
      {date ? <small>{date}</small> : null}
    </div>
  );
}
