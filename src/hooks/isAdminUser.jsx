import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { useQuery } from "react-query";

const isAdminUser = () => {
  const { user } = useContext(AuthContext);

  const {
    data: isAdmin,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["admin"],
    queryFn: async () => {
      const res = await axios(
        `https://device-market-server.vercel.app/admin?email=${user?.email}`
      );
      return res.data;
    },
  });

  return [isAdmin, isLoading];
};

export default isAdminUser;
