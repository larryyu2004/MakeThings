type IconProps = {
  className?: string;
};

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M4 12h15M13 5l7 7-7 7" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function ThemeIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle className="theme-toggle__sun" cx="12" cy="12" r="4" fill="currentColor" />
      <g
        className="theme-toggle__rays"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      >
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </g>
      <path
        className="theme-toggle__moon"
        d="M19.2 14.1A7.3 7.3 0 0 1 9.9 4.8a7.3 7.3 0 1 0 9.3 9.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M4 6h16v12H4zM4 7l8 6 8-6" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M7.2 4.5 9.4 4l1.5 4-1.8 1.5a13.5 13.5 0 0 0 5.4 5.4l1.5-1.8 4 1.5-.5 2.2a2.3 2.3 0 0 1-2.5 1.8C10.4 17.7 6.3 13.6 5.4 7a2.3 2.3 0 0 1 1.8-2.5Z" />
    </svg>
  );
}

export function DocumentIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M5 5h14v14H5zM8 9h8M8 12h6M8 15h4" />
    </svg>
  );
}
