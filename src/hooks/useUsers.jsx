import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const useUsers = () => {
  const {
    data: users,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios("https://device-market-server.vercel.app/users");
      return res.data;
    },
  });

  return [users, refetch, isLoading];
};

export default useUsers;
