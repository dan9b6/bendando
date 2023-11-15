import Hero from "@/components/project/Hero";

const heroImg = {
  src: "/images/gree/desk.png",
  alt: "Tenants Hub Desktop Image",
};

const heroBtn = {
  href: "/",
  text: "See Tenants Hub",
};

const page = () => {
  return (
    <>
      <Hero
        href="/"
        title="Green Acre"
        type="Website & App Build"
        img={heroImg}
        button={heroBtn}
      >
        Greenacre Energy is a company whose mission is to identify and invest in
        environmentally sustainable solutions for the disposal of all waste.
        They work alongside governments and experts across the UK and South East
        Asia. They approached us to brand their organisation and design their
        website.
      </Hero>
    </>
  );
};

export default page;
