import useUsers from "../../../../hooks/useUsers";

const UsersManage = () => {
  const [users, refetch] = useUsers();
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
                <td className="text-lg">{user.role}</td>
                <td>
                  <button className="text-[16px] font-semibold bg-[#EE9322] px-2 py-1 rounded">
                    Delete
                  </button>
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
