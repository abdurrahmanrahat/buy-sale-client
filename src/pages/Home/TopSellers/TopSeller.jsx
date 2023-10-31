const TopSeller = ({ seller }) => {
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
          <p className="text-lg">
            {email === "linthia@islam.com" && "+8801826893832"}
            {email === "mathewarnold@gmail.com" && "+8801623853836"}
            {email === "williamblack@gmail.com" && "+88015628938354"}
            {email === "elizabeth@gmaili.com" && "+8801966897882"}
            {email === "sidney@gmail.com" && "+8801726856833"}
            {email === "jsonroy@gmail.com" && "+8801326693848"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopSeller;
