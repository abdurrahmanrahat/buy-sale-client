import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import toast from "react-hot-toast";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  // handle submit for payment
  const handleSubmit = async (event) => {
    event.preventDefault();

    // check stripe and elements to load.
    if (!stripe || !elements) {
      return;
    }

    // check card element.
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    // console.log(card);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      //   console.log("error", error);
      toast.error(error.message);
    } else {
      console.log("paymentmethod", paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        className="text-[18px] font-semibold bg-[#EE9322] px-4 py-2 rounded"
        disabled={!stripe}
      >
        Confirm
      </button>
    </form>
  );
};

export default CheckOutForm;
