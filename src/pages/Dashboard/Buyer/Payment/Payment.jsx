import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);

const Payment = () => {
  return (
    <div className="w-full md:w-2/3 px-4 md:px-20 lg:px-32 py-20 text-white">
      <h2>Make Payment</h2>
      <Elements stripe={stripePromise}>
        <CheckOutForm></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
