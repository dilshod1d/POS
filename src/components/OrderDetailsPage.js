"use client";
// components/OrderDetailsPage.js
import { useState, useEffect } from "react";
import {
  CalendarIcon,
  MapPinIcon,
  CreditCardIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function OrderDetailsPage({ orderId }) {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    // Fetch order details from an API or state management
    const fetchedOrderDetails = {
      id: orderId,
      orderedDate: "December 26, 2023",
      status: "Shipped",
      items: [
        { name: "Widget A", quantity: 2, price: "$20.00" },
        { name: "Gadget B", quantity: 1, price: "$35.00" },
        { name: "Tool C", quantity: 3, price: "$15.00" },
      ],
      shippingAddress: "1234 Main St, Anytown, State, 12345",
      customerName: "John Doe",
      paymentMethod: "Credit Card - **** **** **** 1234",
    };
    setOrderDetails(fetchedOrderDetails);
  }, [orderId]);

  if (!orderDetails) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-gray-700 p-8 w-full h-screen">
      <h1 className="text-2xl font-bold text-white mb-6">Order Details</h1>

      {/* Order Information */}
      <section className="mb-6">
        <p className="text-white mb-2">Order ID: {orderDetails.id}</p>
        <div className="flex items-center text-gray-300 mb-2">
          <CalendarIcon className="h-5 w-5 text-gray-500 mr-2" />
          <span>Ordered Date: {orderDetails.orderedDate}</span>
        </div>
        <div className="flex items-center text-gray-300">
          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
          <span>Order Status: {orderDetails.status}</span>
        </div>
      </section>

      {/* Items Ordered */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-white mb-2">Items Ordered</h2>
        <ul className="list-disc list-inside text-gray-300">
          {orderDetails.items.map((item, index) => (
            <li key={index}>
              {item.name} - {item.quantity} x {item.price}
            </li>
          ))}
        </ul>
      </section>

      {/* Shipping Address */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-white mb-2">Shipping Address</h2>
        <div className="flex items-center text-gray-300">
          <MapPinIcon className="h-5 w-5 text-gray-500 mr-2" />
          <span>{orderDetails.shippingAddress}</span>
        </div>
      </section>

      {/* Customer Information */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-white mb-2">Customer</h2>
        <p className="text-gray-300">{orderDetails.customerName}</p>
      </section>

      {/* Payment Method */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-white mb-2">Payment Method</h2>
        <div className="flex items-center text-gray-300">
          <CreditCardIcon className="h-5 w-5 text-gray-500 mr-2" />
          <span>{orderDetails.paymentMethod}</span>
        </div>
      </section>
    </div>
  );
}
