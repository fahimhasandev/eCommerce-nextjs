import ProductList from "components/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  const formattedProducts = latestProducts.map((product: any) => ({
    ...product,
    price: product.price.toString(),
  }));
  return (
    <ProductList title="Newest Arrivals" data={formattedProducts} limit={4} />
  );
};

export default Homepage;
