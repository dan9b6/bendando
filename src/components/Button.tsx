import clsx from "clsx";
import Link from "next/link";

type ButtonProps = {
  as?: React.ElementType;
  className?: string;
  bg?: string;
  color?: string;
  hoverBg?: string;
  href?: string;
  children: React.ReactNode;
  newTab?: boolean;
};

export default function Button({
  as: Comp = "button",
  bg = "bg-indigo-600",
  hoverBg = "bg-indigo-500",
  color = "text-white",
  href,
  children,
  className,
  ...restProps
}: ButtonProps) {
  if (Comp === "a") {
    return (
      <Link
        className={clsx(
          bg,
          color,
          hoverBg,
          className,
          `transition ease-in-out rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`
        )}
        href={`${href}`}
        {...restProps}
      >
        {children}
      </Link>
    );
  }
  return (
    <Comp
      className={clsx(
        bg,
        color,
        hoverBg,
        className,
        `transition ease-in-out rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`
      )}
      {...restProps}
    >
      {children}
    </Comp>
  );
}
