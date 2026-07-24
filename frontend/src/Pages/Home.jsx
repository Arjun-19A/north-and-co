import Editorial from "../components/Home/Editorial";
import FeaturedCollections from "../components/Home/FeaturedCollections";
import Hero from "../components/Home/Hero";
import {
  fetchNewArrivals,
  fetchFeaturedProducts,
} from "../redux/slices/productsSlice";
import Newsletter from "../components/Home/Newsletter";
import WhySection from "../components/Home/WhySection";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import NewArrivals from "../components/Home/NewArrivals";

const Home = () => {
  const dispatch = useDispatch();

  const { newArrivals, featuredProducts, loading, error } = useSelector(
    (state) => state.products,
  );

  useEffect(() => {
    dispatch(fetchNewArrivals());
    dispatch(fetchFeaturedProducts());
  }, [dispatch]);

  return (
    <main className="w-full bg-stone-100">
      <Hero />
      <NewArrivals
        products={newArrivals}
        loading={loading.newArrivals}
        error={error.newArrivals}
      />
      <Editorial />
      <FeaturedCollections
        products={featuredProducts}
        loading={loading.featured}
        error={error.featured}
      />
      <WhySection />
      <Newsletter />
    </main>
  );
};

export default Home;
