const Seller = ({ seller }) => {
  const { name, email, photo } = seller;
  return (
    <div className="bg-gray-900 text-white rounded-lg shadow-xl p-6 mb-4">
      <div className="flex items-center mb-4">
        <img
          src={photo}
          alt={name}
          className="w-24 h-24 rounded-full mr-4 border-4 border-white"
        />
        <div>
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p className="text-lg">{email}</p>
          <p className="text-lg">+8801826893832</p>
        </div>
      </div>
      <div className="text-end mr-10">
        <button className="bg-[#EE9322] hover:bg-[#f39726] text-white font-semibold py-2 px-4 rounded-full transform hover:scale-105 transition-transform duration-300">
          Chat
        </button>
      </div>
    </div>
  );
};

export default Seller;
