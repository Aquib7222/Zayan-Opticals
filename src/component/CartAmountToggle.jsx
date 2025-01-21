import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="d-flex ms-2 mt-1 mb-2">
      
      <button className="" onClick={() => setDecrease()}>
        <FaMinus />
      </button>
      <div className="px-3">{amount}</div>
      <button onClick={() => setIncrease()}>
        <FaPlus />
      </button>
    </div>
  );
};
export default CartAmountToggle;
