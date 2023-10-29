import axios from "axios";
import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../provider/AuthProvider";

const getCartProductsByEmail = () => {
  const { user } = useContext(AuthContext);

  const {
    data: cartProducts,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["productsbyemail"],
    queryFn: async () => {
      const res = await axios(
        `http://localhost:5000/cartproducts?email=${user?.email}`
      );
      return res.data;
    },
  });

  return [cartProducts, refetch];
};

export default getCartProductsByEmail;
