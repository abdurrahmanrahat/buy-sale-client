import { useForm } from "react-hook-form";
import usePasswordToggle from "../../../hooks/usePasswordToggle";
import GoogleSignIn from "../../../components/GoogleSignIn/GoogleSignIn";
import { Link } from "react-router-dom";

const Login = () => {
  const [passwordInputType, toggleIcon] = usePasswordToggle();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-gray-900 min-h-screen px-4 text-white flex items-center justify-center">
      <div className="w-[400px] rounded-md h-[500px] bg-[#00000052] py-4">
        <div className="text-center">
          <h2 className="text-3xl mt-2 mb-1 font-semibold">Login</h2>
          <p className="text-gray-400">Sign in to access your account</p>
        </div>

        {/* form start */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="m-8">
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
                {...register("password", { required: true })}
                className="w-full px-3 py-3 bg-[#000000a4] rounded-sm focus:outline-none"
              />
              <span className="absolute top-12 right-4 z-10 cursor-pointer">
                {toggleIcon}
              </span>
            </div>
          </div>
          <div className="mx-8">
            <input
              className="bg-[#000000] w-full rounded-md py-3 text-white cursor-pointer"
              type="submit"
              value="Login"
            />
          </div>
        </form>

        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>

        {/* Login With Google */}
        <GoogleSignIn></GoogleSignIn>

        <p className="px-6 text-sm text-center text-gray-400">
          Do not have an account yet?{" "}
          <Link
            to="/register"
            className="hover:underline hover:text-[15px] duration-300 hover:text-[#EE9322] text-gray-600"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
