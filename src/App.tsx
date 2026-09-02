import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Process from "./components/Process";
import Quality from "./components/Quality";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Presence from "./components/Presence";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Process />
        <Quality />
        <WhyChoose />
        <Testimonials />
        <Gallery />
        <Presence />
      </main>
      <Footer />
    </>
  );
}

export default App;
