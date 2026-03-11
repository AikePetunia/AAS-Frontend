import { Footer } from "@components/common/Footer/Footer";
import { Navbar } from "@components/common/Navbar/Navbar";
import { MainSection } from "@components/MainSection/MainSection";
import { FeaturedProducts } from "@components/FeaturedProducts/FeaturedProducts";
import { StoresList } from "@components/StoresList/StoresList";

export function Home() {
  return (
    <>
      <Navbar />
      <MainSection />
      <StoresList />
      <FeaturedProducts />
      <Footer />
    </>
  );
}

export default Home;
