"use client";
import Hero from "@/components/service/Hero";
import Features from "@/components/service/Features";
import Contact from "@/components/Contact";

const features = [
  {
    title: "Custom Solutions",
    description:
      "We don't believe in one-size-fits-all solutions. We take the time to understand your business, industry, and goals to deliver a website that reflects your brand identity and resonates with your target audience.",
  },
  {
    title: "Latest Technologies",
    description:
      "We stay ahead of the curve when it comes to the latest web development technologies and trends. From responsive design to scalable architecture, we leverage the best tools to ensure your website is not just visually appealing but also technologically robust.",
  },
  {
    title: "Mobile Optimization",
    description:
      "In a mobile-first world, we prioritize mobile responsiveness to ensure your website looks and functions flawlessly across a variety of devices. This not only enhances the user experience but also boosts your site's search engine rankings.",
  },
  {
    title: "Scalable Projects",
    description:
      "We build websites with the future in mind. Whether your business is just starting or expanding rapidly, our scalable solutions ensure that your website can grow seamlessly alongside your company.",
  },
  {
    title: "Timely Delivery",
    description:
      "We understand the importance of deadlines. Our agile development methodology allows us to deliver high-quality websites on time, ensuring your digital presence aligns with your business milestones.",
  },
  {
    title: "Collaborative Approach",
    description:
      "Your input is invaluable throughout the development process. We believe in transparent communication, and our team works closely with you to incorporate your feedback, ensuring the final product exceeds your expectations.",
  },
];
const img = { src: "/images/screenshot.png", alt: "/images/screenshot.png" };

const page = () => {
  return (
    <>
      <Hero title="Data Collection" img={img}>
        At Bendando, we bring your digital vision to life! As a leading web
        development agency, we understand the crucial role that a well-crafted
        website plays in today{"'"}s competitive business landscape.
      </Hero>
      <Features data={features} />
      <Contact />
    </>
  );
};

export default page;
