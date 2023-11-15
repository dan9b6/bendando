import Image from "next/image";
import clsx from "clsx";
type SwiperTileProps = {
  data: {
    href: string;
    img: {
      src: string;
      alt: string;
    };
    title: string;
    subtitle: string;
    description: string;
  };
  addClass?: string;
};

const SwiperTile = ({ data, addClass, ...restProps }: SwiperTileProps) => {
  return (
    <a
      href={data.href}
      className={clsx(
        "relative h-[300px] min-w-[80vw] sm:min-w-[50vw] md:min-w-[33vw] max-w-[600px] overflow-hidden rounded-md transition-all hover:scale-95 flex flex-col justify-end",
        addClass
      )}
      {...restProps}
    >
      <Image
        src={data.img?.src}
        alt={data.img?.alt}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        width={400}
        height={400}
      />
      <div className="ms-2 mb-2 py-2 ps-3 pe-6 rounded-md bg-white w-max shadow-sm">
        <h3 className="font-semibold text-indigo-800">{data.title}</h3>
        <h4 className="text-sm ">{data.subtitle}</h4>
      </div>
    </a>
  );
};

export default SwiperTile;
