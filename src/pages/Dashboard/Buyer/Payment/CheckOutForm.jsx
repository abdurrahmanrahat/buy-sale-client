import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../provider/AuthProvider";
import "./CheckOutForm.css";
import getCartProductsByEmail from "../../../../hooks/getCartProductsByEmail";

const CheckOutForm = ({ price, cartProducts }) => {
  const { user } = useContext(AuthContext);
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [, refetch] = getCartProductsByEmail();

  const stripe = useStripe();
  const elements = useElements();

  // const location = useLocation();
  // console.log(location);
  // Check if location.state exists before accessing it
  // const data = location.state ? location.state : 432;
  // const price = parseFloat(data.toFixed(2));

  useEffect(() => {
    if (price > 0) {
      axios
        .post("http://localhost:5000/create-payment-intent", { price })
        .then((res) => {
          // console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
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
      refetch();
      toast.success(`Payment success- Id: ${transactionId}`);
      // send payment data to db
      const payment = {
        email: user.email,
        transactionId,
        price,
        date: new Date(),
        quantity: cartProducts.length,
        cartItems: cartProducts.map((item) => item._id),
        productItems: cartProducts.map((item) => item.productId),
        orderStatus: "pending",
        itemNames: cartProducts.map((item) => item.productName),
      };
      // console.log(payment);
      axios.post("http://localhost:5000/payments", payment).then((res) => {
        // console.log(res.data);
        if (res.data.insertResult.insertedId) {
          toast.success("Payment Info saved in DB");
        }
      });
    }
  };

  return (
    <form className="checkOutForm" onSubmit={handleSubmit}>
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
          // className="text-[18px] font-semibold bg-[#EE9322] px-4 py-2 rounded"
          className="bg-[#EE9322] checkOut-btn"
          disabled={!stripe || !clientSecret || processing}
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default CheckOutForm;
