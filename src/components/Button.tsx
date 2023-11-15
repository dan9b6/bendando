import clsx from "clsx";

type ButtonProps = {
  as?: React.ElementType;
  className?: string;
  bg?: string;
  color?: string;
  hoverBg?: string;
  href?: string;
  children: React.ReactNode;
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
  return (
    <Comp
      href="#"
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
