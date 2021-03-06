import React, { useEffect, useState } from "react";
import "./Payment.css";
import {db} from './firebase'
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import CurrencyFormat from "react-currency-format";
import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "./axios";
import { collection, doc, setDoc } from "firebase/firestore";

function Payment() {
  const [{ user, basket }, dispatch] = useStateValue();

  const navigateTo = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [clientSecret, setClientSecret] = useState(true);

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  //Todo: not understood
  useEffect(() => {
    //generating the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies sub-units
        url: `/payments/create?total=${parseInt(getBasketTotal(basket) * 100 )}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

//   console.log("The SECRET >>>",clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // here we will handle stripe get or post things
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // Payment Intent is Payment Confirmation   

      const ordersDocRef = doc(db, "users", user?.uid);
       setDoc(ordersDocRef, {
        orders:{
          basket,
          amount:12334, //paymentIntent.amount || null,
          created: 223311, //paymentIntent.created || null,
        }
        })

          

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        navigateTo('../orders',{replace:true});
      });
  };
  const handleChange = (e) => {
    // Listens for changes of CardElement and displays any errors as customer types
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>1924 React</p>
            <p>Bhagalpur</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Methods</h3>
          </div>
          <div className="payment__details">
            {/* Stripe magic goes here */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType="text"
                  thousandSeperator={true}
                  prefix="$"
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>error</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
