// components/StepsBar.js
import {
  ShoppingCartIcon,
  CreditCardIcon,
  TruckIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";

const StepsBar = ({ currentStep }) => {
  const steps = [
    {
      name: "Add to Cart",
      description: "Select your items",
      Icon: ShoppingCartIcon,
    },
    { name: "Pay", description: "Secure checkout", Icon: CreditCardIcon },
    { name: "Delivery", description: "Fast and reliable", Icon: TruckIcon },
    { name: "Receive", description: "Enjoy your items", Icon: InboxIcon },
  ];

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <div className="flex items-center justify-between relative w-full">
        {/* Animated background for completed steps */}
        <div className="absolute inset-0 flex items-center">
          <div
            className="w-full h-1 bg-gradient-to-r from-purple-600 to-blue-400 filter blur-lg opacity-50 transition-all duration-1000 ease-in-out"
            style={{
              width: `calc(${
                (currentStep / (steps.length - 1)) * 100
              }% + 1rem)`,
            }}
          ></div>
        </div>
        {steps.map((step, index) => {
          const isCompleted = index <= currentStep;
          return (
            <div
              key={step.name}
              className="flex flex-col items-center relative"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ease-in-out relative cursor-pointer
                  ${
                    isCompleted
                      ? "bg-green-500 hover:bg-green-400"
                      : "bg-gray-300 hover:bg-gray-200"
                  }
                  ${isCompleted ? "animate-rubberBand" : ""} `}
                onMouseEnter={(e) =>
                  e.currentTarget.classList.add("animate-wiggle")
                }
                onMouseLeave={(e) =>
                  e.currentTarget.classList.remove("animate-wiggle")
                }
              >
                <step.Icon
                  className={`w-8 h-8 text-white transition duration-300 ease-in-out ${
                    isCompleted ? "scale-110" : "scale-100"
                  }`}
                />
              </div>
              <span className="absolute top-full mt-2 text-xs font-medium text-gray-700">
                {step.description}
              </span>
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-between text-xs text-gray-500">
        {steps.map((step, index) => (
          <span
            key={step.name}
            className={`transition-colors duration-500 ${
              index <= currentStep ? "text-green-500" : "text-gray-500"
            }`}
          >
            {step.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StepsBar;

// const StepsBar = ({ currentStep }) => {
//   const steps = [
//     { name: "Add to Cart", Icon: ShoppingCartIcon },
//     { name: "Pay", Icon: CreditCardIcon },
//     { name: "Delivery", Icon: TruckIcon },
//     { name: "Receive", Icon: InboxIcon },
//   ];

//   return (
//     <div className="flex justify-center py-4">
//       {steps.map((step, index) => {
//         const isCompleted = index <= currentStep;
//         const circleClasses = isCompleted
//           ? "bg-gradient-to-r from-green-400 to-blue-500 text-white"
//           : "bg-white text-gray-400";
//         const lineClasses = isCompleted
//           ? "bg-gradient-to-r from-green-400 via-blue-500 to-purple-500"
//           : "bg-gray-300";

//         return (
//           <div key={step.name} className="flex items-center">
//             {index !== 0 && (
//               <div
//                 className={`w-20 h-1 ${lineClasses} transition-all duration-500 ease-in-out`}
//               ></div>
//             )}
//             <div
//               className={`w-12 h-12 rounded-full flex justify-center items-center shadow-md ${circleClasses} transition-all duration-500 ease-in-out transform ${
//                 isCompleted ? "scale-110" : "scale-100"
//               }`}
//             >
//               <step.Icon className="w-6 h-6" />
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default StepsBar;
