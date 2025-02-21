import ProductCard from "../components/ProductCard";
import productDetails from "../data.json"
export default function ProductPage() {
    return (
      <div className="w-full min-h-screen bg-neutral-800">
        <div className="grid grid-cols-5 gap-4 p-4">
          {productDetails.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    );
  }
  