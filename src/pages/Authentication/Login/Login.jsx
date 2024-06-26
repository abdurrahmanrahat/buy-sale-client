import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleSignIn from "../../../components/GoogleSignIn/GoogleSignIn";
import usePasswordToggle from "../../../hooks/usePasswordToggle";
import { AuthContext } from "../../../provider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [passwordInputType, toggleIcon] = usePasswordToggle();

  // for redirect purpose
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // react hook form
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    // sign in user
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        toast.success("User login successfully");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="min-h-screen px-4 bg-gray-900 text-white flex items-center justify-center">
      <div className="w-[400px] rounded-md h-[520px] bg-[#00000052] py-4">
        <div className="text-center">
          <h2 className="text-3xl mt-2 mb-1 font-semibold">Login</h2>
          <p className="text-gray-200">Sign in to access your account</p>
        </div>

        {/* form start */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="m-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-md text-gray-200"
              >
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
              <label
                htmlFor="email"
                className="block mb-2 text-md text-gray-200"
              >
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

        <p className="px-6 text-sm text-center text-gray-200">
          Do not have an account yet?{" "}
          <Link
            to="/register"
            className="hover:underline duration-300 hover:text-[#EE9322] text-gray-200"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
