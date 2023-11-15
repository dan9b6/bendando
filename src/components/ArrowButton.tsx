import clsx from "clsx";

type ArrowButtonProps = {
  as?: React.ElementType;
  className?: string;
  color?: string;
  href?: string;
  children: React.ReactNode;
};

export default function ArrowButton({
  as: Comp = "button",
  color = "text-white",
  href,
  children,
  className,
  ...restProps
}: ArrowButtonProps) {
  return (
    <Comp
      href="#"
      className={clsx(
        "text-sm font-semibold leading-6 hover:translate-x-1.5 transition ease-in-out",
        color,
        className
      )}
      {...restProps}
    >
      {children} <span aria-hidden="true">→</span>
    </Comp>
  );
}
