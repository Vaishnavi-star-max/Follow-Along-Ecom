import ProductCard from "../components/product";
import productDetails from "../data.json"
import { useEffect ,useState} from "react";
import axios from "axios"





export default function ProductPage() {
   
    let [data,setData]=useState([])
    
    useEffect(() => {
      const fetchData = async () => {
          try {
              let response = await axios.get("http://localhost:5173/product/allproduct");
              
              if (response.status === 200) {  
                 
                  setData(response.data.message);
              }
          } catch (error) {
              console.error("Error fetching products:", error);
          }
      };

      fetchData();  
  }, []);


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
  