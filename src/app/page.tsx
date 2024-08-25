import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import AboutUs from "./components/AboutUs/AboutUs";
import Blurb from "./components/Blurb/Blurb";
import LatestWorks from "./components/LatestWorks/LatestWorks";
import Clients from "./components/Clients/Clients";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="page windows desktop landscape rd-navbar-fullwidth-linked components-ready page-loaded">
        <Header />
        <main>
          <Intro />
          <AboutUs />
          <Blurb />
          <LatestWorks />
          <Clients />
          <Contact />
          <Blog />
        </main>
        <Footer />
      </div>
    </>
  );
}
