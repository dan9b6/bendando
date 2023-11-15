import Hero from "@/components/project/Hero";

const heroImg = {
  src: "/images/win/desk.png",
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
        title="Win A Flat"
        type="Website & App Build"
        img={heroImg}
        button={heroBtn}
      >
        A competition website for Equinox Living promoted by Uri Geller and the
        national press allowing UK residents who successfully answer 3 questions
        to be entered into a prize draw to win a brand new flat!
      </Hero>
    </>
  );
};

export default page;
