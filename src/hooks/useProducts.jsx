import axios from "axios";
import { useQuery } from "react-query";

const useProducts = () => {
  const {
    data: products,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios("https://device-market-server.vercel.app/products");
      return res.data;
    },
  });

  return [products, refetch];
};

export default useProducts;
