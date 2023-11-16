"use client";

import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

import Hero from "@/components/project/Hero";
import Features from "@/components/project/Features";
import Mockup from "@/components/project/Mockup";
import Swiper from "@/components/Swiper";
import Bounded from "@/components/Bounded";

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

const mockups = [
  { src: "", alt: "" },
  { src: "", alt: "" },
  { src: "", alt: "" },
];

const slides = [
  {
    href: "/project/tenants-hub",
    img: {
      src: "/images/thub.jpeg",
      alt: "Tenants Hub Prototype",
    },
    title: "Tenants Hub",
    subtitle: "App / Web App",
    description: "Property Management Software",
  },
  {
    href: "/project/malcolm-wall",
    img: {
      src: "/images/mal.jpeg",
      alt: "Malcolm Wall Prototype",
    },
    title: "Malcolm Wall",
    subtitle: "Website",
    description: "Property Website",
  },
  {
    href: "/project/win-a-flat",
    img: {
      src: "/images/win.jpeg",
      alt: "Win a flat Prototype",
    },
    title: "Win a Flat",
    subtitle: "Website",
    description: "Property Website",
  },
  {
    href: "/project/green-acre",
    img: {
      src: "/images/gre.jpeg",
      alt: "Green Acre Prototype",
    },
    title: "Green Acre",
    subtitle: "Website",
    description: "Property Website",
  },
  {
    href: "/project/mexican-mama",
    img: {
      src: "/images/thub.jpeg",
      alt: "Mexican Mama Prototype",
    },
    title: "Mexican Mama",
    subtitle: "Shopify App",
    description: "Restaurant Web App",
  },
  {
    href: "/project/hurn-recycling",
    img: {
      src: "/images/mal.jpeg",
      alt: "Hurn Recycling Prototype",
    },
    title: "Hurn Recycling",
    subtitle: "Website",
    description: "Waste Management Website",
  },
  {
    href: "/project/victory-dentures",
    img: {
      src: "/images/win.jpeg",
      alt: "Victory Dentures Prototype",
    },
    title: "Victory Dentures",
    subtitle: "Website",
    description: "Dental Website",
  },
  {
    href: "/project/vale",
    img: {
      src: "/images/gre.jpeg",
      alt: "Vale Building Services Prototype",
    },
    title: "Vale Building Services",
    subtitle: "Website",
    description: "Building Services Website",
  },
  {
    href: "/project/clara-monroy",
    img: {
      src: "/images/win.jpeg",
      alt: "Clara Monroy Prototype",
    },
    title: "Clara Monroy",
    subtitle: "Website",
    description: "Therapy Services Website",
  },
  {
    href: "/project/marisol-corona",
    img: {
      src: "/images/gre.jpeg",
      alt: "Marisol Corona Prototype",
    },
    title: "Marisol Corona Services",
    subtitle: "Website",
    description: "Therapy Services Website",
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
      <Mockup />
    </>
  );
};

export default page;
