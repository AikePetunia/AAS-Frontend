import { Footer } from "@components/Footer/Footer";
import { Navbar } from "@components/Navbar/Navbar";
import { MainSection } from "@components/MainSection/MainSection";
import { FeaturedProducts } from "@components/FeaturedProducts/FeaturedProducts";

export function Home() {
  return (
    <>
      <Navbar />
      <MainSection />

      <FeaturedProducts />
      <Footer />
    </>
  );
}

export default Home;
