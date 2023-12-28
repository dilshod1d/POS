// components/OrderSuccess.js
import { CheckCircleIcon, CalendarIcon } from "@heroicons/react/24/outline";

export default function OrderSuccess({
  orderDetails,
  onGoToOrders,
  onGoToOrderDetails,
}) {
  return (
    <div className="bg-gray-700 p-8 rounded-lg max-w-lg mx-auto">
      <div className="text-center">
        <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-white mb-2">
          Order Confirmation
        </h2>
        <p className="text-gray-300">
          Order ID:{" "}
          <span className="font-bold text-white">#{orderDetails.id}</span>
        </p>
        <div className="flex justify-center items-center text-gray-300 mb-4">
          <CalendarIcon className="h-5 w-5 text-gray-500 mr-2" />
          <span>Date: {orderDetails.orderedDate}</span>
        </div>
        <div className="text-gray-300 text-left mt-4">
          <table className="w-full">
            <thead>
              <tr className="text-white">
                <th className="text-left">Item</th>
                <th className="text-right">Quantity</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {orderDetails.items.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td className="text-right">{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={onGoToOrderDetails}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            type="button"
          >
            Continue Shopping
          </button>
          <button
            onClick={onGoToOrders}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            type="button"
          >
            Go to My Orders
          </button>
        </div>
      </div>
    </div>
  );
}
