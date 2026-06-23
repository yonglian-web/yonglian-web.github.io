export function Timeline({ timeline }) {
  return (
    <ol className="timeline">
      {timeline.map((item) => (
        <li className={`timeline__item timeline__item--${item.state}`} key={item.phase}>
          <span className="timeline__dot" aria-hidden="true" />
          <strong>{item.phase}</strong>
          <time>{item.dates}</time>
        </li>
      ))}
    </ol>
  );
}
