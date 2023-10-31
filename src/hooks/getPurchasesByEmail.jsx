import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "react-query";
import axios from "axios";

const getPurchasesByEmail = () => {
  const { user } = useContext(AuthContext);

  const {
    data: purchases,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["productsbyemail"],
    queryFn: async () => {
      const res = await axios(
        `http://localhost:5000/purchases?email=${user?.email}`
      );
      return res.data;
    },
  });

  return [purchases, refetch];
};

export default getPurchasesByEmail;
