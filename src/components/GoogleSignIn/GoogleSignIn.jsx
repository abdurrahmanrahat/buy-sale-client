import { FaGoogle } from "react-icons/fa";

const GoogleSignIn = () => {
  return (
    <div
      className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer mx-8"
    >
      <FaGoogle size={26} />
      <p>Continue with Google</p>
    </div>
  );
};

export default GoogleSignIn;
