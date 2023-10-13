import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const usePasswordToggle = () => {
  const [visible, setVisible] = useState(false);

  const Icon = (
    <>
      {visible ? (
        <FaEyeSlash onClick={() => setVisible(!visible)} />
      ) : (
        <FaEye onClick={() => setVisible(!visible)} />
      )}
    </>
  );

  const inputType = visible ? "text" : "password";

  return [inputType, Icon];
};

export default usePasswordToggle;
