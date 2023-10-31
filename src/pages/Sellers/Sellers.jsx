import { Link } from "react-router-dom";
import useUsers from "../../hooks/useUsers";
import Seller from "./Seller";
import Loading from "../../components/Loading/Loading";

const Sellers = () => {
  const [users, ,isLoading] = useUsers();
  // console.log(users);

  const sellers = users?.filter((user) => user.role === "seller");
  // console.log(sellers);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      {/* Page Banner Design */}
      <div className="sellers-page-div h-[140px] md:h-[250px] 2xl:h-[280px] bg-[#000000c7] opacity-60 flex flex-col justify-center items-center text-white">
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold mb-1">
          Contact with Sellers
        </h2>
        <p className="text-lg 2xl:text-xl">
          <Link
            to="/"
            className="cursor-pointer hover:text-[#EE9322] duration-300"
          >
            Home
          </Link>{" "}
          <span className="font-semibold">/</span> Sellers
        </p>
      </div>

      {/* seller card */}
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 p-4 md:p-10">
        {sellers?.map((seller) => (
          <Seller key={seller._id} seller={seller}></Seller>
        ))}
      </div>
    </div>
  );
};

export default Sellers;
