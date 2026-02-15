import Link from "next/link";

export interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  variant?: "hollow" | "default";
}

export default function ButtonComponent({
  variant = "default",
  children,
  ...props
}: Button) {
  const styles = {
    default:
      "px-8 py-4 border-1 border-graphite font-sans text-sm font-bold bg-graphite text-bone-white",
    hollow: "bg-transparent text-graphite",
  };

  const classNames = [styles[variant], styles["default"], props.className]
    .filter(Boolean)
    .join(" ");

  if (props.href) {
    return (
      <Link href={props.href || "#"} className={classNames}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={classNames}>
      {children}
    </button>
  );
}
