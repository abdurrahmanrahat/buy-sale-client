import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "react-query";
import axios from "axios";

const getPayHistoryByEmail = () => {
    const { user } = useContext(AuthContext);

    const {
      data: payments,
      refetch,
      isLoading,
    } = useQuery({
      queryKey: ["payhistory"],
      queryFn: async () => {
        const res = await axios(
          `http://localhost:5000/payments?email=${user?.email}`
        );
        return res.data;
      },
    });
  
    return [payments];
};

export default getPayHistoryByEmail;