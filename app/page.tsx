import { products } from "@/utils/products";
import Container from "./components/products/Container";
import HomeBanner from "./components/HomeBanner";
import { truncateText } from "@/utils/truncateText";
import ProductCard from "./components/products/ProductCard";
export const revalidate = 0;

export default function Home() {
  return (<div>
    <Container>
      <div className="p-8">
        <HomeBanner/>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 
        lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
          {products.map((product: any) => {
            return <ProductCard key={product.id} data={product}/>;
          })}
        </div>
      </div>
    </Container>;

    </div>
  );
}
