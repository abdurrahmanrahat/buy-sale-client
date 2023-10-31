import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import getCartProductsByEmail from "../../../../hooks/getCartProductsByEmail";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);

const Payment = () => {
  const [cartProducts] = getCartProductsByEmail();

  const total = cartProducts?.reduce(
    (sum, item) => sum + parseInt(item.productPrice),
    0
  );
  const price = parseFloat(total.toFixed(2));

  return (
    <div className="w-full md:w-2/3 px-4 md:px-20 lg:px-32 py-20 text-white">
      <h2 className="text-2xl md:text-3xl font-semibold text-center">Make Payment</h2>
      <Elements stripe={stripePromise}>
        <CheckOutForm price={price} cartProducts={cartProducts}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
