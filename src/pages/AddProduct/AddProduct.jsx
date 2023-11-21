import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../provider/AuthProvider";

const img_hosting_tkn = import.meta.env.VITE_image_uplode_token;

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_tkn}`;

  // react hook form
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    const {
      productName,
      productCategory,
      productPrice,
      productInfoOne,
      productInfoTwo,
      productInfoThree,
      productRAM,
      productStorage,
      productWarranty,
      productCamera,
      productPort,
      productRelease,
      productUpcomingFeature,
      productDescription,
    } = data;

    // img hosting to imgbb

    const formData = new FormData();
    formData.append("image", data.productPhoto[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        if (imgRes.success) {
          const productImg = imgRes.data.display_url;

          const newProduct = {
            productName,
            productImg,
            productCategory,
            productPrice,
            productFeatures: {
              one: productInfoOne,
              two: productInfoTwo,
              three: productInfoThree,
            },
            productRAM,
            productStorage,
            productWarranty,
            productCamera,
            productPort,
            productRelease,
            productUpcomingFeature,
            productDescription,
            productRatting: "0",
            sellerName: user.displayName,
            sellerEmail: user.email,
          };

          // Send new product to database store
          fetch("https://device-market-server.vercel.app/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newProduct),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                toast.success("New product uploaded successfully");
              }
            });
        }
      });
  };

  return (
    <div className="my-12">
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl font-semibold">
          Welcome! {user?.displayName}
        </h2>
        <p className="text-[#EE9322] font-bold">Upload your products to sale</p>
      </div>

      {/* form here */}
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="mx-10 md:mx-48 mt-8">
          <div className="md:flex gap-6 justify-between mb-3">
            {/* product name */}
            <div className="w-full">
              <label className="block mb-2 text-lg text-white">
                Product Name*
              </label>
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
              <label className="block mb-2 text-lg text-white">
                <span className="">Product Photo(280 * 320)*</span>
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
              <label className="block mb-2 text-lg text-white">
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
              <label className="block mb-2 text-lg text-white">
                Product Price*
              </label>
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
              <label className="block mb-2 text-lg text-white">
                Product Info*
              </label>
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
              <label className="block mb-2 text-lg text-white">
                Product Info*
              </label>
              <input
                type="text"
                name="productInfoTwo"
                id="productInfoTwo"
                placeholder="processor..."
                {...register("productInfoTwo", { required: true })}
                className="w-full px-3 py-3 bg-[#000000a4] rounded-sm focus:outline-none"
              />
            </div>
            {/* product info three */}
            <div className="w-full">
              <label className="block mb-2 text-lg text-white">
                Product Info*
              </label>
              <input
                type="text"
                name="productInfoThree"
                id="productInfoThree"
                placeholder="battery..."
                {...register("productInfoThree", { required: true })}
                className="w-full px-3 py-3 bg-[#000000a4] rounded-sm focus:outline-none"
              />
            </div>
          </div>

          <div className="md:flex gap-6 justify-between mb-3">
            {/* product RAM */}
            <div className="w-full">
              <label className="block mb-2 text-lg text-white">
                Product RAM*
              </label>
              <input
                type="text"
                name="productRAM"
                id="productRAM"
                placeholder="RAM"
                {...register("productRAM", { required: true })}
                className="w-full px-3 py-3 bg-[#000000a4] rounded-sm focus:outline-none"
              />
            </div>

            {/* product Storage */}
            <div className="w-full">
              <label className="block mb-2 text-lg text-white">
                Product Storage*
              </label>
              <input
                type="text"
                name="productStorage"
                id="productStorage"
                placeholder="Storage"
                {...register("productStorage", { required: true })}
                className="w-full px-3 py-3 bg-[#000000a4] rounded-sm focus:outline-none"
              />
            </div>

            {/* product warranty */}
            <div className="w-full">
              <label className="block mb-2 text-lg text-white">
                Product Warranty*
              </label>
              <input
                type="text"
                name="productWarranty"
                id="productWarranty"
                placeholder="... years"
                {...register("productWarranty", { required: true })}
                className="w-full px-3 py-3 bg-[#000000a4] rounded-sm focus:outline-none"
              />
            </div>
          </div>

          <div className="md:flex gap-6 justify-between mb-3">
            {/* product camera */}
            <div className="w-full">
              <label className="block mb-2 text-lg text-white">
                Product Camera*
              </label>
              <input
                type="text"
                name="productCamera"
                id="productCamera"
                placeholder="camera"
                {...register("productCamera", { required: true })}
                className="w-full px-3 py-3 bg-[#000000a4] rounded-sm focus:outline-none"
              />
            </div>
            {/* product port */}
            <div className="w-full">
              <label className="block mb-2 text-lg text-white">
                Product Port*
              </label>
              <input
                type="text"
                name="productPort"
                id="productPort"
                placeholder="port"
                {...register("productPort", { required: true })}
                className="w-full px-3 py-3 bg-[#000000a4] rounded-sm focus:outline-none"
              />
            </div>
          </div>

          <div className="md:flex gap-6 justify-between mb-3">
            {/* product release history */}
            <div className="w-full">
              <label className="block mb-2 text-lg text-white">
                Product Release Date*
              </label>
              <input
                type="date"
                name="productRelease"
                id="productRelease"
                placeholder="-/-/-"
                {...register("productRelease", { required: true })}
                className="w-full px-3 py-3 bg-[#000000a4] text-white rounded-sm focus:outline-none"
              />
            </div>
            {/* product upcoming features */}
            <div className="w-full">
              <label className="block mb-2 text-lg text-white">
                Product Upcoming Features*
              </label>
              <input
                type="text"
                name="productUpcomingFeature"
                id="productUpcomingFeature"
                placeholder="New features"
                {...register("productUpcomingFeature", { required: true })}
                className="w-full px-3 py-3 bg-[#000000a4] rounded-sm focus:outline-none"
              />
            </div>
          </div>

          {/* Product description */}
          <div className="">
            <label className="block mb-2 text-lg text-white">
              Product Description*
            </label>
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
