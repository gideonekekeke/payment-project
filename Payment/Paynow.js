import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { usePaystackPayment } from "react-paystack";

// const config = {
//   reference: new Date().getTime(),
//   email: email,
//   amount: amount,
//   publicKey: "pk_test_f747091150685438ae86d5a98b5df3c60275f367",
//   // pk_live_1b38eded7c4210daa7cf2270cebee0bf90de0252
// };

// you can call this function anything
const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log("closed");
};

const Paynow = () => {
  const [amount, setAmount] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const history = useHistory();

  const onSuccess = (refrence) => {
    history.push("/thanks");
    console.log(refrence);
  };

  const initializePayment = usePaystackPayment({
    reference: new Date().getTime(),

    email: email,
    name: name,
    amount: amount,
    publicKey: "pk_live_1b38eded7c4210daa7cf2270cebee0bf90de0252",

    // pk_test_f747091150685438ae86d5a98b5df3c60275f367
  });
  return (
    <div style={{ width: "100vw", height: "100px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "200px",
        }}
      >
        <div>
          <div>your amount is : {amount / 100}</div>
          <label>
            {" "}
            Email
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label>
            {" "}
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label>
            {" "}
            amout
            <input
              placeholder="Amount"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </label>
        </div>
        <button
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Paynow;
