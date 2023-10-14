import { useForm } from "react-hook-form";

const AddProduct = () => {
  // react hook form
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="my-12">
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl font-semibold">
          Welcome! Abdur Rahman
        </h2>
        <p className="text-[#EE9322] font-bold">Upload your products to sale</p>
      </div>

      {/* form here */}
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="mx-10 md:mx-48 mt-8">
          <div className="md:flex gap-6 justify-between mb-3">
            {/* product name */}
            <div className="w-full">
              <label className="block mb-2 text-lg">Product Name*</label>
              <input
                type="text"
                name="productName"
                id="productName"
                placeholder="Provide product name"
                {...register("productName", { required: true })}
                className="w-full px-3 py-3 bg-[#000000a4] rounded-sm focus:outline-none"
              />
            </div>

            {/* product photo */}
            <div className="w-full">
              <label className="block mb-2 text-lg">
                <span className="">Product Photo*</span>
              </label>
              <input
                type="file"
                {...register("productPhoto", { required: true })}
                className="file-input w-full bg-[#000000a4]"
              />
            </div>
          </div>

          <div className="md:flex gap-6 justify-between mb-3">
            {/* product category */}
            <div className="w-full">
              <label className="block mb-2 text-lg">
                <span className="">Product Category*</span>
              </label>
              <select
                className="w-full px-3 py-3 bg-[#000000a4] rounded-sm focus:outline-none"
                {...register("productCategory", { required: true })}
              >
                {/* <option disabled selected>
                Pick one
              </option> */}
                <option>Apple</option>
                <option>Samsung</option>
                <option>Oppo</option>
              </select>
            </div>

            {/* product photo */}
            <div className="w-full">
              <label className="block mb-2 text-lg">Product Price*</label>
              <input
                type="number"
                name="productPrice"
                id="productPrice"
                placeholder="$"
                {...register("productPrice", { required: true })}
                className="w-full px-3 py-3 bg-[#000000a4] rounded-sm focus:outline-none"
              />
            </div>
          </div>

          <div className="md:flex gap-6 justify-between mb-3">
            {/* product info one */}
            <div className="w-full">
              <label className="block mb-2 text-lg">Product Info*</label>
              <input
                type="text"
                name="productInfoOne"
                id="productInfoOne"
                placeholder="display..."
                {...register("productInfoOne", { required: true })}
                className="w-full px-3 py-3 bg-[#000000a4] rounded-sm focus:outline-none"
              />
            </div>
            {/* product info two */}
            <div className="w-full">
              <label className="block mb-2 text-lg">Product Info*</label>
              <input
                type="text"
                name="productInfoTwo"
                id="productInfoTwo"
                placeholder="processor..."
                {...register("productInfoTwo", { required: true })}
                className="w-full px-3 py-3 bg-[#000000a4] rounded-sm focus:outline-none"
              />
            </div>
          </div>
          <div className="md:flex gap-6 justify-between mb-3">
            {/* product feature */}
            <div className="w-full">
              <label className="block mb-2 text-lg">Product Feature*</label>
              <input
                type="text"
                name="productFeature"
                id="productFeature"
                placeholder="ram/rom etc..."
                {...register("productFeature", { required: true })}
                className="w-full px-3 py-3 bg-[#000000a4] rounded-sm focus:outline-none"
              />
            </div>
            {/*  */}
          </div>

          {/* Product description */}
          <div className="">
            <label className="block mb-2 text-lg">Product Description*</label>
            <textarea
              name="productDescription"
              id=""
              cols="30"
              rows="4"
              {...register("productDescription", { required: true })}
              className="w-full px-3 py-3 bg-[#000000a4] rounded-sm focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center my-10">
            <input
              className="text-[18px] font-semibold bg-[#EE9322] px-4 py-2 rounded cursor-pointer"
              type="submit"
              value="Add Product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
