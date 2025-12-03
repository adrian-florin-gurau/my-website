import Link from "next/link";

interface ButtonProps {
  link: string;
  label: string;
  icon: React.ElementType;
  mode: "internal" | "external";
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
}

const Button = ({
  link,
  label,
  icon: Icon,
  mode,
  onClick,
}: ButtonProps) => {
  const buttonClasses = `
    flex items-center justify-center gap-2 
    px-5 py-3 
    rounded-full 
    text-white dark:text-gray-200
    font-semibold 
    text-sm sm:text-base
    transition-all duration-300 ease-in-out
    transform hover:scale-[1.02] 
    bg-zinc-700 hover:bg-zinc-600 dark:bg-zinc-800 dark:hover:bg-zinc-700
    shadow-lg hover:shadow-xl
    ring-2 ring-transparent hover:ring-blue-500/50
  `;

  if (mode === "internal") {
    return (
      <Link
        href={link}
        className={buttonClasses}
        target="_self"
        onClick={onClick}
      >
        <Icon className="w-5 h-5" />
        {label}
      </Link>
    );
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClasses}
      onClick={onClick}
    >
      <Icon className="w-5 h-5" />
      {label}
    </a>
  );
};

export default Button;
