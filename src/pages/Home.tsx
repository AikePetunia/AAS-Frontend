import { Footer } from "@components/common/Footer/Footer";
import { Navbar } from "@components/common/Navbar/Navbar";
import { MainSection } from "@components/MainSection/MainSection";
import { FeaturedProducts } from "@components/FeaturedProducts/FeaturedProducts";
import { StoresList } from "@components/StoresList/StoresList";
import { Stats } from "@components/Stats/Stats";
import { Warning } from "@components/common/Warning/Warning";

export function Home() {
  return (
    <>
      <Warning />
      <Navbar />
      <MainSection />
      <Stats />
      <StoresList />
      <FeaturedProducts />
      <Footer />
    </>
  );
}

export default Home;
