import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const GoogleSignIn = () => {
  const { googleSignIn } = useContext(AuthContext);

  // for redirect purpose
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSinIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        // send to db and role as default buyer
        toast.success("User login successfully");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div
      onClick={handleGoogleSinIn}
      className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer mx-8"
    >
      <FaGoogle size={26} />
      <p>Continue with Google</p>
    </div>
  );
};

export default GoogleSignIn;
