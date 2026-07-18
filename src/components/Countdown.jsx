import { useEffect, useState } from 'react';
import { useSite } from '../data/useSite.js';
import { Icon } from './Icon.jsx';

// Voting opens 17 Aug 2026 16:00 UTC, closes 1 Oct 2026 16:00 UTC — the instants
// hardcoded in the candidate's Claude Design. Floating card in the home hero.
const OPEN = Date.UTC(2026, 7, 17, 16, 0, 0);
const CLOSE = Date.UTC(2026, 9, 1, 16, 0, 0);
const DAY = 86400000;

export function Countdown() {
  const s = useSite();
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 60000);
    return () => clearInterval(id);
  }, []);

  let label;
  let num;
  let unit = s.countdown.unit;
  let date;
  if (now < OPEN) {
    label = s.countdown.before;
    num = Math.max(0, Math.ceil((OPEN - now) / DAY));
    date = s.countdown.openDate;
  } else if (now < CLOSE) {
    label = s.countdown.during;
    num = Math.max(0, Math.ceil((CLOSE - now) / DAY));
    date = s.countdown.closeDate;
  } else {
    label = s.countdown.after;
    num = '—';
    unit = '';
    date = s.countdown.closeDate;
  }

  return (
    <div className="cs-countdown">
      <div className="cs-countdown__label">
        <Icon name="calendar" size={14} stroke={1.8} />
        {label}
      </div>
      <div className="cs-countdown__num">
        {num}
        {unit ? <span>{unit}</span> : null}
      </div>
      <div className="cs-countdown__date">{date}</div>
    </div>
  );
}
