const MailIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
    <path d="M22 6L12 13L2 6" />
  </svg>
);

const LinkedInIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.418 2.867 8.163 6.83 9.48.5.092.682-.217.682-.482 0-.236-.008-.864-.013-1.795-2.782.601-3.37-1.34-3.37-1.34-.454-1.157-1.107-1.465-1.107-1.465-.907-.62.068-.608.068-.608 1.002.071 1.531 1.025 1.531 1.025.891 1.529 2.342 1.087 2.91.832.091-.645.353-1.087.643-1.336-2.22-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.272.098-2.645 0 0 .84-.268 2.75 1.029A9.458 9.458 0 0 1 12 6.844c.85.004 1.701.114 2.493.344 1.909-1.297 2.748-1.029 2.748-1.029.546 1.373.202 2.392.099 2.645.64.698 1.028 1.591 1.028 2.682 0 3.837-2.337 4.686-4.566 4.935.359.307.681.916.681 1.849 0 1.334-.012 2.41-.012 2.745 0 .268.18.577.688.48C19.136 20.177 22 16.43 22 12.017 22 6.484 17.52 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const MonitorIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

export { MailIcon, LinkedInIcon, GitHubIcon, MonitorIcon };
