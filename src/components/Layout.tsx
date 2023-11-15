import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
