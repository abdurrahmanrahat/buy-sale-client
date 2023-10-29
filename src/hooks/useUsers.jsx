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
      const res = await axios("http://localhost:5000/users");
      return res.data;
    },
  });

  return [users, refetch];
};

export default useUsers;
