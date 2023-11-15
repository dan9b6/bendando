import Hero from "@/components/Hero";
import Swiper from "@/components/Swiper";
import Feature from "@/components/Feature";
import ServiceCards from "@/components/ServiceCards";
import Contact from "@/components/Contact";

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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Swiper data={slides} />
      <Feature />
      <ServiceCards />
      <Contact />
    </main>
  );
}
