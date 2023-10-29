import toast from "react-hot-toast";
import useUsers from "../../../../hooks/useUsers";

const UsersManage = () => {
  const [users, refetch] = useUsers();

  // handle buyer user update to seller
  const handleMakeSeller = (user) => {
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          toast.success(`${user.name} is now Seller.`);
        }
      });
  };

  // handle delete user function
  const handleDeleteUser = (user) => {
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("User delete successfully.");
        }
      });
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold text-center mt-6">
        Total Users: {users?.length}
      </h2>

      {/* Table Here */}
      <div className="overflow-x-auto my-10">
        <table className="table shadow-lg text-white text-lg ">
          {/* head */}
          <thead className="py-2">
            <tr className="bg-gray-900 text-white text-lg">
              <th className="py-4">#</th>
              <th className="text-left">Photo</th>
              <th className="text-left">UserName</th>
              <th className="text-left">Email</th>
              <th className="text-left">Role</th>
              <th className="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className=" text-white ">
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="rounded-full w-16 h-16">
                        <img
                          src={user.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-lg">
                    <span className="badge text-lg">{user.name}</span>
                  </div>
                </td>
                <td className="text-lg">{user.email}</td>
                <td className="text-lg">
                  {user.role == "buyer" ? (
                    <button
                      onClick={() => handleMakeSeller(user)}
                      className="text-[12px] font-semibold bg-[#9875ff] px-2 py-1 rounded"
                    >
                      Make Seller
                    </button>
                  ) : user.role === "admin" ? (
                    <span className="text-[18px] text-[#9875ff] font-[600]">
                      {user.role}
                    </span>
                  ) : (
                    <span className="text-[18px] font-[500]">{user.role}</span>
                  )}
                </td>
                <td>
                  {user.role === "admin" ? (
                    <span className="uppercase font-semibold">King</span>
                  ) : (
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className="text-[14px] font-semibold bg-[#EE9322] px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManage;
