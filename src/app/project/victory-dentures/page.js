import Hero from "@/components/project/Hero";

const heroImg = {
  src: "/images/thub/desk.png",
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
        title="Victory Dentures"
        type="Website Build"
        img={heroImg}
        button={heroBtn}
      >
        A Property Management app used to connect Block and Letting Managers,
        Owners, Surveyors, Maintenance Personnel and Residents. It{"'"}s built
        for your tenants to manage all their building related needs, maintenance
        personnel to manage their work and building managers and owners to
        manage all your building services.
      </Hero>
    </>
  );
};

export default page;
