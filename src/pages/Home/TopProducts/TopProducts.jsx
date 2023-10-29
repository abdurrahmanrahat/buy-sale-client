import useProducts from "../../../hooks/useProducts";
import TopProduct from "./TopProduct";

const TopProducts = () => {
  const [products] = useProducts();
  return (
    <div className="my-24">
      <div className="text-center md:px-28 mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          Most Ratting Products
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
          delectus eum est odio consequatur eligendi iste similique, excepturi
          fugiat voluptatem vitae quam repellendus exercitationem eaque illo
          nisi laborum tempore! Atque!
        </p>
      </div>

      {/* product showing by map */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products?.slice(0, 6).map((product) => (
          <TopProduct key={product._id} product={product}></TopProduct>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
