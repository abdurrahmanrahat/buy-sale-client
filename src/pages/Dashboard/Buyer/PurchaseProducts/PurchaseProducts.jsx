import getPurchasesByEmail from "../../../../hooks/getPurchasesByEmail";

const PurchaseProducts = () => {
  const [purchases] = getPurchasesByEmail();
  return (
    <div>
      <div className="flex items-center justify-center">
        <span className="text-2xl md:text-4xl 2xl:text-5xl font-semibold mt-6 border-b-2 border-[#9875ff]">
          List of Purchase Products: {purchases.length}
        </span>
      </div>
    </div>
  );
};

export default PurchaseProducts;
