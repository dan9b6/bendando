import Hero from "@/components/project/Hero";

const heroImg = {
  src: "/images/malc/desk.png",
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
        title="Malcolm Wall"
        type="Website Build"
        img={heroImg}
        button={heroBtn}
      >
        Malcolm Wall is a giant in the media industry a truly charming client
        and a pleasure to work with. As CEO for Virgin Media, Pinewood and
        involved with various Media companies around the world, he required an
        online resume for attracting potential partners.
      </Hero>
    </>
  );
};

export default page;
