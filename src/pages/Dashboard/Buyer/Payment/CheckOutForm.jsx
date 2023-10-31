import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../../../provider/AuthProvider";

const CheckOutForm = () => {
  const { user } = useContext(AuthContext);
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const location = useLocation();
  console.log(location);
  // Check if location.state exists before accessing it
  const data = location.state ? location.state : 432;
  const price = parseFloat(data.toFixed(2));

  useEffect(() => {
    axios
      .post("http://localhost:5000/create-payment-intent", { price })
      .then((res) => {
        // console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [price]);

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
      // console.log("paymentmethod", paymentMethod);
    }

    setProcessing(true);

    // code from stripe confirm payment method
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "Unknown",
            name: user?.displayName || "Anonymous User",
          },
        },
      });

    if (confirmError) {
      toast.error(confirmError);
    }
    // console.log(paymentIntent);
    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      const transactionId = paymentIntent.id;
      toast.success(`Payment success- Id: ${transactionId}`);
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
      <div className="flex items-center justify-center my-10">
        <button
          type="submit"
          className="text-[18px] font-semibold bg-[#EE9322] px-4 py-2 rounded"
          disabled={!stripe || !clientSecret || processing}
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default CheckOutForm;
