// `icon` is optional and used only by the personal (CV) site — the election home
// calls this without one and renders exactly as before.
export function SectionHeading({ kicker, title, intro, id, icon }) {
  return (
    <header className="section-heading" id={id}>
      {kicker ? <p className="section-heading__kicker">{kicker}</p> : null}
      <h2>
        {icon ? <img className="section-heading__icon" src={`/icons/${icon}.png`} alt="" /> : null}
        {title}
      </h2>
      {intro ? <p className="section-heading__intro">{intro}</p> : null}
    </header>
  );
}
