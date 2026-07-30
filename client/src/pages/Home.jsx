import Editorial from "../components/Home/Editorial";
import FeaturedCollections from "../components/Home/FeaturedCollections";
import Hero from "../components/Home/Hero";
import {
  fetchNewArrivals,
  fetchFeaturedProducts,
  fetchBestSellerProducts,
} from "../redux/slices/productsSlice";
import Newsletter from "../components/Home/Newsletter";
import WhySection from "../components/Home/WhySection";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import NewArrivals from "../components/Home/NewArrivals";
import BestSellers from "../components/Home/BestSellers";
import ScrollReveal from "../components/ScrollReveal";

const Home = () => {
  const dispatch = useDispatch();

  const { newArrivals, featuredProducts, bestSellerProducts, loading, error } =
    useSelector((state) => state.products);

  useEffect(() => {
    if (!newArrivals.length) {
      dispatch(fetchNewArrivals());
    }

    if (!featuredProducts.length) {
      dispatch(fetchFeaturedProducts());
    }

    if (!bestSellerProducts.length) {
      dispatch(fetchBestSellerProducts());
    }
  }, [
    dispatch,
    newArrivals.length,
    featuredProducts.length,
    bestSellerProducts.length,
  ]);

  return (
    <main className="w-full bg-stone-100">
      <Hero />

      <ScrollReveal>
        <NewArrivals
          products={newArrivals}
          loading={loading.newArrivals}
          error={error.newArrivals}
        />
      </ScrollReveal>

      <ScrollReveal>
        <Editorial />
      </ScrollReveal>

      <ScrollReveal>
        <FeaturedCollections
          products={featuredProducts}
          loading={loading.featured}
          error={error.featured}
        />
      </ScrollReveal>

      <ScrollReveal>
        <WhySection />
      </ScrollReveal>

      <ScrollReveal>
        <BestSellers
          products={bestSellerProducts}
          loading={loading.bestSeller}
          error={error.bestSeller}
        />
      </ScrollReveal>

      <ScrollReveal>
        <Newsletter />
      </ScrollReveal>
    </main>
  );
};

export default Home;
