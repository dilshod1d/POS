// components/PaymentForm.js
import { useState } from "react";
import {
  LockClosedIcon,
  CreditCardIcon,
  UserIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

export default function PaymentForm({ onClose }) {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolderName: "",
  });

  const handleChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle card payment logic here
    console.log(cardDetails);
    onClose();
  };

  return (
    <div className="bg-gray-700 p-4 rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Card Number */}
        <div>
          <label
            className="block text-gray-400 text-sm font-bold mb-1"
            htmlFor="cardNumber"
          >
            Card Number
          </label>
          <div className="flex items-center border border-gray-600 bg-gray-700 rounded p-2">
            <CreditCardIcon className="h-5 w-5 text-gray-500 mr-2" />{" "}
            {/* Card icon */}
            <input
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-500"
              id="cardNumber"
              type="text"
              placeholder="1234 5678 9012 3456"
              name="cardNumber"
              value={cardDetails.cardNumber}
              onChange={handleChange}
            />
            <LockClosedIcon className="h-5 w-5 text-gray-500" />{" "}
            {/* Secure icon */}
          </div>
        </div>

        {/* Expiry Date and CVV */}
        <div className="flex items-center space-x-2">
          {/* Expiry Date */}
          <div className="w-3/5">
            <label
              className="block text-gray-400 text-sm font-bold mb-1"
              htmlFor="expiryDate"
            >
              Expiry Date
            </label>
            <div className="flex items-center border border-gray-600 bg-gray-700 rounded p-2">
              <CalendarIcon className="h-5 w-5 text-gray-500 mr-2" />
              <input
                className="flex-1 bg-transparent outline-none placeholder-gray-500 text-white"
                id="expiryDate"
                type="text"
                placeholder="MM/YY"
                name="expiryDate"
                value={cardDetails.expiryDate}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* CVV */}
          <div className="flex-grow-0 flex-shrink w-2/5">
            {" "}
            {/* Adjusted for a fixed width */}
            <label
              className="block text-gray-400 text-sm font-bold mb-1"
              htmlFor="cvv"
            >
              CVV
            </label>
            <div className="flex items-center border border-gray-600 bg-gray-700 rounded p-2">
              <LockClosedIcon className="h-5 w-5 text-gray-500 mr-2" />
              <input
                className="w-full bg-transparent outline-none placeholder-gray-500 text-white"
                id="cvv"
                type="text"
                placeholder="123"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Card Holder Name */}
        <div>
          <label
            className="block text-gray-400 text-sm font-bold mb-1"
            htmlFor="cardHolderName"
          >
            Card Holder Name
          </label>
          <div className="flex items-center border border-gray-600 bg-gray-700 rounded p-2">
            <UserIcon className="h-5 w-5 text-gray-500 mr-2" />
            <input
              className="flex-1 bg-transparent outline-none placeholder-gray-500"
              id="cardHolderName"
              type="text"
              placeholder="John Doe"
              name="cardHolderName"
              value={cardDetails.cardHolderName}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Submit and Cancel Buttons */}
        <div className="flex items-center justify-between mt-4">
          {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Pay
        </button> */}
          <button
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
