import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { useQuery } from "react-query";
import useUsers from "./useUsers";

const isSellerUser = () => {
  const { user } = useContext(AuthContext);
  const [users] = useUsers();

  const findUser = users?.find((u) => u.email === user?.email);

  const isSeller = findUser?.role === "seller";

  // const {
  //   data: isSeller,
  //   refetch,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["seller"],
  //   queryFn: async () => {
  //     const res = await axios(
  //       `https://device-market-server.vercel.app/seller?email=${user?.email}`
  //     );
  //     return res.data;
  //   },
  // });
  // console.log(isSeller);

  return [isSeller];
};

export default isSellerUser;
