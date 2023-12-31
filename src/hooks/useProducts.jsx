import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";

const useProducts = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(9);
  const [category, setCategory] = useState("");
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };

  const fetchProducts = async () => {
    const res = await axios.get(
      `https://device-market-server.vercel.app/products?limit=${limit}&page=${page}&category=${category}&search=${search}`
    );
    return res.data;
  };

  const {
    data: products,
    refetch,
    isLoading,
  } = useQuery(["products", limit, page], fetchProducts);

  // Update the query key when limit or page changes
  useEffect(() => {
    refetch();
  }, [limit, page, refetch, category, search]);

  return [
    products,
    refetch,
    isLoading,
    page,
    setPage,
    limit,
    setCategory,
    searchRef,
    handleSearch,
  ];

  // const {
  //   data: products,
  //   refetch,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: async () => {
  //     const res = await axios(
  //       "https://device-market-server.vercel.app/products"
  //     );
  //     return res.data;
  //   },
  // });

  // return [products, refetch];
};

export default useProducts;
