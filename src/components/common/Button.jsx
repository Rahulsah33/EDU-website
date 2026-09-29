import { Link } from "react-router-dom";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  className = "",
  ...props
}) {
  const classes = `button button-${variant} button-${size} ${className}`;
  return to ? (
    <Link className={classes} to={to} {...props}>
      {children}
    </Link>
  ) : (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
