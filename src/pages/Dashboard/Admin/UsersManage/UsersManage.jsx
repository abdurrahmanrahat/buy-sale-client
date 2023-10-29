import useUsers from "../../../../hooks/useUsers";

const UsersManage = () => {
  const [users, refetch] = useUsers();
  return (
    <div>
      <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold text-center mt-6">
        Total Users: {users?.length}
      </h2>
    </div>
  );
};

export default UsersManage;
