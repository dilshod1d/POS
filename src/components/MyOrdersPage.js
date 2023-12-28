"use client";
// components/MyOrdersPage.js
import { useState, useEffect } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

// Helper component to display the status with appropriate styling
const StatusBadge = ({ status }) => {
  const statusColors = {
    Pending: "text-yellow-400",
    Processing: "text-blue-400",
    Delivered: "text-green-400",
    Cancelled: "text-red-400",
  };

  return (
    <span
      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[status]}`}
    >
      {status}
    </span>
  );
};

export default function MyOrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulate fetching orders
    const fetchedOrders = [
      {
        id: "#f0ba538b",
        status: "Pending",
        datePurchased: "Nov 10, 2022",
        total: "$350.00",
      },
      {
        id: "#f0ba538b",
        status: "Processing",
        datePurchased: "Nov 10, 2022",
        total: "$350.00",
      },
      {
        id: "#f0ba538b",
        status: "Delivered",
        datePurchased: "Nov 10, 2022",
        total: "$350.00",
      },
      {
        id: "#f0ba538b",
        status: "Cancelled",
        datePurchased: "Nov 10, 2022",
        total: "$350.00",
      },
    ];
    setOrders(fetchedOrders);
  }, []);

  const handleViewDetails = (orderId) => {
    // Implement navigation to order details
    console.log("Navigate to details for", orderId);
  };

  return (
    <div className="p-8 w-full h-full overflow-auto text-white">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full text-white">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Order #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Date Purchased
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Total
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-700">
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {order.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <StatusBadge status={order.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {order.datePurchased}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {order.total}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a
                    href="#"
                    onClick={() => handleViewDetails(order.id)}
                    className="text-blue-500 hover:text-blue-600"
                  >
                    View <ChevronRightIcon className="inline h-5 w-5" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
