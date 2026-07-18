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

  const c = s.countdown;
  let lead;
  let tail;
  let num = null;
  let date;
  if (now < OPEN) {
    lead = c.beforeLead;
    tail = c.beforeTail;
    num = Math.max(0, Math.ceil((OPEN - now) / DAY));
    date = c.openDate;
  } else if (now < CLOSE) {
    lead = c.duringLead;
    tail = c.duringTail;
    num = Math.max(0, Math.ceil((CLOSE - now) / DAY));
    date = c.closeDate;
  } else {
    date = c.closeDate;
  }

  return (
    <div className="cs-countdown">
      <div className="cs-countdown__line">
        <Icon name="calendar" size={15} stroke={1.8} />
        {num !== null ? (
          <span>
            {lead}{' '}
            <b>
              {num} {c.unit}
            </b>
            {tail}
          </span>
        ) : (
          <span>{c.after}</span>
        )}
      </div>
      <div className="cs-countdown__date">
        {c.dateLead} {date}
      </div>
    </div>
  );
}
