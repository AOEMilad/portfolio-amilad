import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Work from "./components/Work";
import About from "./components/About";
import Footer from "./components/Footer";
import ContactSheet from "./components/ContactSheet";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <Services />
        <Pricing />
        <Work />
        <About />
      </main>
      <Footer />
      <ContactSheet /> {/* modal lives at root so it overlays everything */}
    </>
  );
}
