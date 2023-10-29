import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { useQuery } from "react-query";

const isBuyerUser = () => {
  const { user } = useContext(AuthContext);

  const {
    data: isBuyer,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["buyer"],
    queryFn: async () => {
      const res = await axios(
        `http://localhost:5000/buyer?email=${user?.email}`
      );
      return res.data;
    },
  });
  // console.log(isBuyer);

  return [isBuyer, isLoading];
};

export default isBuyerUser;
