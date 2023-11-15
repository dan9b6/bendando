import Hero from "@/components/project/Hero";
import Features from "@/components/project/Features";

const heroImg = {
  src: "/images/thub/desk.png",
  alt: "Tenants Hub Desktop Image",
};

const heroBtn = {
  href: "/",
  text: "See Tenants Hub",
};

const features = [
  {
    name: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
  {
    name: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
];

const page = () => {
  return (
    <>
      <Hero
        href="/"
        title="Hurn Recycling"
        type="Website Build & SEO"
        img={heroImg}
        button={heroBtn}
      >
        A Property Management app used to connect Block and Letting Managers,
        Owners, Surveyors, Maintenance Personnel and Residents. It{"'"}s built
        for your tenants to manage all their building related needs, maintenance
        personnel to manage their work and building managers and owners to
        manage all your building services.
      </Hero>
      <Features features={features} />
    </>
  );
};

export default page;
