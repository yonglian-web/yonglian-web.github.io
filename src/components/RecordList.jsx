export function RecordList({ record }) {
  return (
    <ol className="record-list">
      {record.map((item) => (
        <li key={`${item.years}-${item.role}`}>
          <time>{item.years}</time>
          <span>{item.role}</span>
        </li>
      ))}
    </ol>
  );
}
