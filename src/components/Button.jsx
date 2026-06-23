import { Link } from 'react-router-dom';

export function Button({
  children,
  href = '#vote',
  to,
  variant = 'primary',
  className = '',
  onClick,
  disabled = false,
}) {
  const cls = `button button--${variant} ${className}`;

  // Disabled: render a non-interactive span (shown but not clickable).
  if (disabled) {
    return (
      <span className={`button button--${variant} button--disabled ${className}`} aria-disabled="true">
        {children}
      </span>
    );
  }

  // `to` set: internal route navigation via react-router (HashRouter-safe).
  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }

  // Default: a plain anchor (external links, in-page #anchors, onClick handlers).
  return (
    <a className={cls} href={href} onClick={onClick}>
      {children}
    </a>
  );
}
