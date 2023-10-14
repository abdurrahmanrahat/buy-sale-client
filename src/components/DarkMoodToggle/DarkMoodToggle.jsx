import { useContext } from "react";
import { ThemeContext } from "../../provider/ThemeProvider";

const DarkMoodToggle = () => {
  const { mood, toggle } = useContext(ThemeContext);
  return (
    <div
      className="w-12 h-6 border-[1.5px] border-solid border-[#53c28b70] rounded-[30px] flex justify-between items-center p-[2px] relative cursor-pointer"
      onClick={toggle}
    >
      <div className="text-xs">🌙</div>
      <div className="text-xs">🔆</div>
      <div
        className="w-[16px] h-[16px] bg-[#53c28b] rounded-[50%] absolute"
        style={mood == "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkMoodToggle;
