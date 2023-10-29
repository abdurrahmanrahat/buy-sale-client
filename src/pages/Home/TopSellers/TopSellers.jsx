import useUsers from "../../../hooks/useUsers";
import TopSeller from "./TopSeller";

const TopSellers = () => {
  const [users, isLoading] = useUsers();
  // console.log(users);

  const sellers = users?.filter((user) => user.role === "seller");
  console.log(sellers);

  return (
    <div className="mb-16">
      <div className="text-center md:px-28 mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          Famous Sellers
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
          delectus eum est odio consequatur eligendi iste similique, excepturi
          fugiat voluptatem vitae quam repellendus exercitationem eaque illo
          nisi laborum tempore! Atque!
        </p>
      </div>

      {/* product showing by map */}
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 md:p-10">
        {sellers?.map((seller) => (
          <TopSeller key={seller._id} seller={seller}></TopSeller>
        ))}
      </div>
    </div>
  );
};

export default TopSellers;
