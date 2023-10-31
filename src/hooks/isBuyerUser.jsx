import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { useQuery } from "react-query";
import useUsers from "./useUsers";

const isBuyerUser = () => {
  const { user } = useContext(AuthContext);
  const [users] = useUsers();

  const findUser = users?.find((u) => u.email === user?.email);

  const isBuyer = findUser?.role === "buyer";

  // const {
  //   data: isBuyer,
  //   refetch,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["buyer"],
  //   queryFn: async () => {
  //     const res = await axios(
  //       `https://device-market-server.vercel.app/buyer?email=${user?.email}`
  //     );
  //     return res.data;
  //   },
  // });
  // console.log(isBuyer);

  return [isBuyer];
};

export default isBuyerUser;
