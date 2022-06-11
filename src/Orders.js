import React, { useState, useEffect } from "react";
import "./Orders.css";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";

function Orders() {
  const [{ user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  const fetchUserData = async () => {
    try {
      const ordersDocRef = doc(db, "users", user?.uid);
    const docSnap = await getDoc(ordersDocRef)
    // console.log(docSnap.data().orders.basket);
      setOrders([...orders,{id:docSnap.data().orderBy("created","desc").id,data: docSnap.data().orderBy("created","desc")}]);
    } catch (err) {
      console.error(err);
    //   alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {

    fetchUserData();
    
  }, []);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
    </div>
  );
}

export default Orders;
