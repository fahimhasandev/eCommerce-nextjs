import ProductList from "@/components/product/product";
import sampleData from "@/db/sample-data";

const Homepage = () => {
  return (
    <ProductList title="Newest Arrivals" data={sampleData.products} limit={4} />
  );
};

export default Homepage;
