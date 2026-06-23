// Renders year-led CV entries as a two-column record list (time | content),
// matching the Employment History table format. `sep` controls how each entry is
// split into time + content: 'colon' splits on the first ":" (e.g. "2024: …"),
// 'space' on the first " " (e.g. "2009/2010 …"). Pass `title` to wrap in an h3.
export function CvRecordList({ items, sep = 'colon', title }) {
  const rows = items.map((item) => {
    const at = sep === 'space' ? item.indexOf(' ') : item.indexOf(':');
    if (at === -1) return { time: '', content: item };
    return { time: item.slice(0, at).trim(), content: item.slice(at + 1).trim() };
  });

  const list = (
    <ul className="record-list">
      {rows.map((row, index) => (
        <li key={index}>
          <time>{row.time}</time>
          <span>{row.content}</span>
        </li>
      ))}
    </ul>
  );

  if (!title) return list;

  return (
    <section className="ieee-activity-group">
      <h3>{title}</h3>
      {list}
    </section>
  );
}
