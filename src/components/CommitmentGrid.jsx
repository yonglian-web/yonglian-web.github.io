export function CommitmentGrid({
  commitments,
  labelPrefix = 'Commitment',
  showHeading = true,
}) {
  return (
    <div className="commitment-grid">
      {commitments.map((commitment, index) => (
        <article className="commitment-card" key={commitment.head ?? commitment.body}>
          <p>
            {labelPrefix} {String(index + 1).padStart(2, '0')}
            {commitment.period ? ` (${commitment.period})` : ''}
          </p>
          {showHeading ? <h3>{commitment.head}.</h3> : null}
          <span>{commitment.body}</span>
        </article>
      ))}
    </div>
  );
}
