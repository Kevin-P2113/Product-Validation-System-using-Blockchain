import React from "react";
import { useState } from "react";

function AddBlock() {
  const [transaction, setTransaction] = useState({
    from: "",
    to: "",
    amount: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/blockchain/body", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: transaction.from,
          to: transaction.to,
          amount: transaction.amount,
        }),
      });
      const json = await response.json();
      if (json.success) {
        alert("added successfully");
      } else {
        alert("there was an error");
      }
    } catch (error) {}
  };

  const onChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container my-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="seller" className="form-label">
              Seller
            </label>
            <input
              type="text"
              className="form-control"
              id="seller"
              name="from"
              value={transaction.from}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="buyer" className="form-label">
              Buyer
            </label>
            <input
              type="text"
              className="form-control"
              id="buyer"
              name="to"
              value={transaction.to}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              type="text"
              className="form-control"
              id="amount"
              name="amount"
              value={transaction.amount}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddBlock;
