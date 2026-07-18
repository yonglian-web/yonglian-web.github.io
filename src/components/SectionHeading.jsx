export function SectionHeading({ kicker, title, intro, id }) {
  return (
    <header className="section-heading" id={id}>
      {kicker ? <p className="section-heading__kicker">{kicker}</p> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-heading__intro">{intro}</p> : null}
    </header>
  );
}
