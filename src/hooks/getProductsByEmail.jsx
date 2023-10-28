import axios from "axios";
import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../provider/AuthProvider";

const getProductsByEmail = () => {
  const { user } = useContext(AuthContext);

  const {
    data: products,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["productsbyemail"],
    queryFn: async () => {
      const res = await axios(
        `http://localhost:5000/products?email=${user?.email}`
      );
      return res.data;
    },
  });

  return [products, isLoading];
};

export default getProductsByEmail;
