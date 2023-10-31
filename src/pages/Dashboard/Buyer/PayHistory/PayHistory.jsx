import getPayHistoryByEmail from "../../../../hooks/getPayHistoryByEmail";
import HistoryCard from "./HistoryCard";

const PayHistory = () => {
  const [payments] = getPayHistoryByEmail();
  return (
    <div>
      <div className="flex items-center justify-center">
        <span className="text-2xl md:text-4xl 2xl:text-5xl font-semibold mt-6 border-b-2 border-[#9875ff]">
          List of Payments: {payments?.length}
        </span>
      </div>

      {/* pay history card */}
      <div className="grid grid-cols-1 gap-8 mt-6">
        {payments?.map((payment) => (
          <HistoryCard key={payment._id} payment={payment}></HistoryCard>
        ))}
      </div>
    </div>
  );
};

export default PayHistory;
