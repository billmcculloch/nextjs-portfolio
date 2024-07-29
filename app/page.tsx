import Hero from "./components/Hero";
import Work from "./components/Work";
import Current from "./components/Current";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Current />
      <Work />
      <Footer />
    </main>
  );
}
