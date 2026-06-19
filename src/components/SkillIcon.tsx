import type { ReactNode } from "react";

type SkillIconProps = {
  name: string;
  className?: string;
};

function BaseIcon({
  children,
  className,
  title,
}: {
  children: ReactNode;
  className?: string;
  title?: string;
}) {
  return (
    <svg
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function SkillIcon({ name, className }: SkillIconProps) {
  switch (name) {
    case "Python":
      return (
        <BaseIcon className={className} title="Python">
          <path
            d="M9.5 4.5h4.2c2.2 0 3.3 1.1 3.3 3.2v1.7c0 1.4-.7 2.2-2.1 2.2H10.8c-2.2 0-3.3 1.1-3.3 3.2v1.3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M14.5 19.5H10.3c-2.2 0-3.3-1.1-3.3-3.2v-1.7c0-1.4.7-2.2 2.1-2.2h4.1c2.2 0 3.3-1.1 3.3-3.2V7.9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="14.9" cy="6.8" r="1" fill="currentColor" />
          <circle cx="9.1" cy="17.2" r="1" fill="currentColor" />
        </BaseIcon>
      );

    case "FastAPI":
      return (
        <BaseIcon className={className} title="FastAPI">
          <path
            d="M12 2.8l7.6 4.4v9L12 21.6 4.4 16.2v-9L12 2.8Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M13.4 6.8 8.6 13h4.2l-2.2 4.2 4.8-6.2h-4.2l2.2-4.2Z"
            fill="currentColor"
          />
        </BaseIcon>
      );

    case "Kotlin":
      return (
        <BaseIcon className={className} title="Kotlin">
          <path
            d="M5 4h7.4L5 12.6V4Z"
            fill="currentColor"
            opacity="0.9"
          />
          <path d="M12.4 4H19L12.4 10.6V4Z" fill="currentColor" opacity="0.65" />
          <path
            d="M5 20V13.4L12.4 11 19 20H5Z"
            fill="currentColor"
            opacity="0.5"
          />
        </BaseIcon>
      );

    case "Java":
      return (
        <BaseIcon className={className} title="Java">
          <path
            d="M8 9.5c0-1.7 1.8-3 4-3s4 1.3 4 3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M7.5 10.5h9v4.3c0 2.1-1.7 3.7-3.7 3.7H11.2c-2.1 0-3.7-1.7-3.7-3.7v-4.3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 12.2h1.1c1 0 1.9.8 1.9 1.9 0 1-.8 1.9-1.9 1.9h-1.1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M10 5c1.2.7 2 .8 2.9 1.5.9.7.8 1.6-.2 2.3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </BaseIcon>
      );

    case "Android":
      return (
        <BaseIcon className={className} title="Android">
          <path
            d="M7.5 11.2c0-2.8 2.2-5 5-5s5 2.2 5 5v5.3c0 1.6-1.3 2.9-2.9 2.9H10.4c-1.6 0-2.9-1.3-2.9-2.9v-5.3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9.3 7.1 7.9 5.4M15.7 7.1l1.4-1.7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="10.5" cy="12" r="1" fill="currentColor" />
          <circle cx="14.5" cy="12" r="1" fill="currentColor" />
        </BaseIcon>
      );

    case "MongoDB":
      return (
        <BaseIcon className={className} title="MongoDB">
          <path
            d="M12 3.2c2.8 2.7 4.7 5.8 4.7 9.2 0 3.4-1.8 6.4-4.7 8.4-2.9-2-4.7-5-4.7-8.4 0-3.4 1.9-6.5 4.7-9.2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M12 6.2v15.2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.8"
          />
        </BaseIcon>
      );

    case "Redis":
      return (
        <BaseIcon className={className} title="Redis">
          <path
            d="M6.5 8.2c0-1.9 3.1-3.4 5.5-3.4s5.5 1.5 5.5 3.4-3.1 3.4-5.5 3.4-5.5-1.5-5.5-3.4Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M6.5 8.2v7.1c0 1.9 3.1 3.4 5.5 3.4s5.5-1.5 5.5-3.4V8.2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9 10.6h.01M11 11.2h.01M13 10.9h.01M15 10.3h.01"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </BaseIcon>
      );

    case "Microservices":
      return (
        <BaseIcon className={className} title="Microservices">
          <path
            d="M12 6.2v3.2M12 14.6v3.2M6.2 12h3.2M14.6 12h3.2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 12 7.5 7.5M12 12l4.5-4.5M12 12l-4.5 4.5M12 12l4.5 4.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.55"
          />
          <circle cx="12" cy="12" r="2.2" fill="currentColor" />
          <circle cx="7.5" cy="7.5" r="1.6" fill="currentColor" opacity="0.9" />
          <circle cx="16.5" cy="7.5" r="1.6" fill="currentColor" opacity="0.9" />
          <circle cx="7.5" cy="16.5" r="1.6" fill="currentColor" opacity="0.9" />
          <circle cx="16.5" cy="16.5" r="1.6" fill="currentColor" opacity="0.9" />
        </BaseIcon>
      );

    default:
      return (
        <BaseIcon className={className}>
          <path
            d="M12 2.8 19.2 7v10L12 21.2 4.8 17V7L12 2.8Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9.2 12h5.6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </BaseIcon>
      );
  }
}
