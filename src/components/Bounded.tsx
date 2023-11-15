import clsx from "clsx";
import Image from "next/image";

type BoundedProps = {
  as?: React.ElementType;
  className?: String;
  children: React.ReactNode;
  img?: {
    alt: string;
    src: string;
  };
};

export default function Bounded({
  as: Comp = "section",
  className,
  children,
  img,
  ...restProps
}: BoundedProps) {
  return (
    <Comp
      className={clsx("relative py-10 md:py-14 lg:py-16", className)}
      {...restProps}
    >
      {img && (
        <Image
          src={img?.src}
          alt={img?.alt}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
          width={100}
          height={100}
        />
      )}

      <div className="container mx-auto px-4">{children}</div>
    </Comp>
  );
}
