import { Link, useRouteError } from "react-router-dom";
import ErrorLottie from "../../assets/error.json";
import { FaArrowLeft } from "react-icons/fa";
import Lottie from "lottie-react";

const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <section className="container">
      <div className="grid md:grid-cols-2 gap-10 min-h-screen">
        <div className="text-center flex flex-col items-center justify-center">
          <h2 className="mb-8 font-bold text-7xl mt-5">
            <span>Error</span>
            <span className="sr-only">Error</span> {status || 404}
          </h2>
          <p className="fs-4 font-bold mb-4">{error?.message}</p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded btn bg-[#EE9322] border-none hover:bg-[#0E0C1A] duration-500 text-black hover:text-white "
          >
            <FaArrowLeft /> Go to homepage
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Lottie animationData={ErrorLottie} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
