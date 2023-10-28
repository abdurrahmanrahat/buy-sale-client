import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { useQuery } from "react-query";

const isSellerUser = () => {
  const { user } = useContext(AuthContext);

  const {
    data: isSeller,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["seller"],
    queryFn: async () => {
      const res = await axios(
        `http://localhost:5000/seller?email=${user?.email}`
      );
      return res.data;
    },
  });

  return [isSeller, isLoading];
};

export default isSellerUser;
