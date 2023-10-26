import { useForm } from "react-hook-form";
import usePasswordToggle from "../../../hooks/usePasswordToggle";
import { Link, useNavigate } from "react-router-dom";
import GoogleSignIn from "../../../components/GoogleSignIn/GoogleSignIn";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

// token for image hosting
const image_hoisting_token = import.meta.env.VITE_image_uplode_token;

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  // for password toggle from a hook
  const [passwordInputType, toggleIcon] = usePasswordToggle();

  const navigate = useNavigate();

  // image hosting url
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hoisting_token}`;

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    console.log(data);

    const formData = new FormData();
    formData.append("image", data.photo[0]);

    // user creating...
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;

        // host image in imgbb
        fetch(img_hosting_url, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((imgRes) => {
            if (imgRes.success) {
              const photo = imgRes.data.display_url;
              // profile updating...
              updateUserProfile(name, photo)
                .then(() => {
                  // TODO: send user data to db from here
                  const savedUser = {
                    name: data.name,
                    email: data.email,
                    photo,
                    role: data.role,
                  };

                  fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify(savedUser),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      if (data.insertedId) {
                        toast.success("User register successfully");
                        navigate("/");
                      }
                    });
                })
                .catch((err) => toast.error(err.message));
            }
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="bg-gray-900  px-4 text-white flex items-center justify-center">
      <div className="w-[400px] rounded-md  bg-[#00000052] py-4 my-6">
        <div className="text-center">
          <h2 className="text-3xl mt-2 mb-1 font-semibold">Register</h2>
          <p className="text-gray-400">Sign up in our community</p>
        </div>

        {/* form start */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="m-8 space-y-2">
            <div>
              <label htmlFor="name" className="block mb-2 text-md">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
                {...register("name", { required: true })}
                className="w-full px-3 py-3 bg-[#000000a4] rounded-sm focus:outline-none"
              />
              {errors.name?.type === true && toast.error("Provide your name")}
            </div>

            {/* Photo Field */}
            <div>
              <label className="block mb-2 text-md">
                <span className="">Your Photo</span>
              </label>
              <input
                type="file"
                {...register("photo", { required: true })}
                className="file-input w-full bg-[#000000a4]"
              />
              {errors.photo?.type === "required" &&
                toast.error("Add your photo")}
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-md">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                {...register("email", { required: true })}
                className="w-full px-3 py-3 bg-[#000000a4] rounded-sm focus:outline-none"
              />
              {errors.email?.type === "required" &&
                toast.error("Provide your email")}
            </div>
            <div className="relative">
              <label htmlFor="email" className="block mb-2 text-md">
                Password
              </label>
              <input
                type={passwordInputType}
                name="password"
                id="password"
                placeholder="*******"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-])/,
                })}
                className="w-full px-3 py-3 bg-[#000000a4] rounded-sm focus:outline-none"
              />
              {errors.password?.type === "required" &&
                toast.error("Provide your password")}
              {errors.password?.type === "minLength" &&
                toast.error("Password must be 6 characters")}
              {errors.password?.type === "pattern" &&
                toast.error(
                  "Password must have one uppercase, lowercase & symbol"
                )}
              <span className="absolute top-12 right-4 z-10 cursor-pointer">
                {toggleIcon}
              </span>
            </div>

            {/* role field */}
            <div className="form-control">
              <label htmlFor="role" className="block mb-2 text-md">
                Register as
              </label>
              <select
                className="w-full px-3 py-3 bg-[#000000a4] rounded-sm focus:outline-none"
                {...register("role", { required: true })}
              >
                {/* <option disabled selected>
                Pick one
              </option> */}
                <option>seller</option>
                <option>buyer</option>
              </select>
              {errors.role?.type === "required" &&
                toast.error("Select your role")}
            </div>
          </div>
          <div className="mx-8">
            <input
              className="bg-[#000000] w-full rounded-md py-3 cursor-pointer text-white"
              type="submit"
              value="Register"
            />
          </div>
        </form>

        <p className="px-6 mt-2 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-[15px] duration-300 hover:text-[#EE9322] text-gray-600"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
