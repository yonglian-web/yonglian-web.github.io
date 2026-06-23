// Renders a CV list using the shared design language. Pass `title` to wrap the
// list in an h3 sub-group (matching the homepage IEEE Activities pattern), or
// omit it for a bare list. `ordered` switches to a numbered list.

// Render `**bold**` spans inside an item as <strong> (used to highlight award
// names). Items without `**` are returned unchanged, so other lists are unaffected.
function renderRich(text) {
  if (typeof text !== 'string' || !text.includes('**')) return text;
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i} className="cv-highlight">{part.slice(2, -2)}</strong>
    ) : (
      part
    ),
  );
}

export function CvList({ title, items, ordered = false }) {
  const ListTag = ordered ? 'ol' : 'ul';
  const listClass = ordered ? 'cv-list cv-list--ordered' : 'ieee-activity-list';

  const list = (
    <ListTag className={listClass}>
      {items.map((item, index) => (
        <li key={index}>{renderRich(item)}</li>
      ))}
    </ListTag>
  );

  if (!title) return list;

  return (
    <section className="ieee-activity-group">
      <h3>{title}</h3>
      {list}
    </section>
  );
}
