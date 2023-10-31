import React from "react";

const HistoryCard = ({ payment }) => {
  const {
    email,
    transactionId,
    price,
    date,
    quantity,
    cartItems: productsId,
    itemNames: productsName,
  } = payment;

  return (
    <div className=" rounded-lg shadow-white my-4 shadow-md p-4 md:p-8 lg:p-12">
      <div className="text-[17px]">
        <div>
          <h2 className="">
            <span className="font-semibold text-xl">Transaction ID:</span> {transactionId}
          </h2>
          <p><span className="font-semibold text-xl">Email:</span> {email}</p>
          <p><span className="font-semibold text-xl">Transaction Date:</span> {date}</p>
        </div>
        <div>
          <p><span className="font-semibold text-xl">Price:</span> ${price.toFixed(2)}</p>
          <p><span className="font-semibold text-xl">Quantity:</span> {quantity}</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Cart Items:</h3>
        <ul className="list-disc list-inside">
          {productsName.map((productName, index) => (
            <li key={productsId[index]}>{productName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HistoryCard;
