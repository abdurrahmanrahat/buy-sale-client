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

  const { data, refetch, isLoading } = useQuery(
    ["products", limit, page],
    fetchProducts
  );

  // Update the query key when limit or page changes
  useEffect(() => {
    refetch();
  }, [limit, page, refetch, category, search]);

  const products = data?.products;
  const totalProducts = data?.totalProducts;

  return {
    products,
    totalProducts,
    refetch,
    isLoading,
    page,
    setPage,
    limit,
    setCategory,
    searchRef,
    handleSearch,
  };
};

export default useProducts;
