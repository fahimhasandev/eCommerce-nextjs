import ProductList from "@/components/product/product";
import { getLatestProducts } from "@/lib/actions/product.actions";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <ProductList title="Newest Arrivals" data={latestProducts} limit={4} />
  );
};

export default Homepage;
