import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2 className="text-3xl font-semibold">
        Welcome! <span className="text-[#9875ff] font-bold">{user?.displayName}</span> to
        Dashboard
      </h2>
    </div>
  );
};

export default DashboardHome;
