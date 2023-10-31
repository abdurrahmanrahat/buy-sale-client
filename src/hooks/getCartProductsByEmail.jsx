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
        `https://device-market-server.vercel.app/cartproducts?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
      return res.data;
    },
  });

  return [cartProducts, refetch];
};

export default getCartProductsByEmail;
