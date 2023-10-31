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
    queryKey: ["purchases"],
    queryFn: async () => {
      const res = await axios(
        `https://device-market-server.vercel.app/purchases?email=${user?.email}`
      );
      return res.data;
    },
  });

  return [purchases, refetch];
};

export default getPurchasesByEmail;
