// components/OrderSummary.js
"use client";
import { useState, useRef, useEffect } from "react";
import {
  CurrencyDollarIcon,
  CreditCardIcon,
  WalletIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import PaymentForm from "./PaymentForm";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import { motion, AnimatePresence } from "framer-motion";
import { removeFromCart } from "../redux/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import OrderSuccess from "./OrderSuccess";

export default function OrderSummary() {
  const [showPaymentForm, setShowPaymentForm] = useState(false); // State to manage payment form visibility
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Initialize with all the fields needed across the steps
  });
  const listRef = useRef(null);
  const swipeThreshold = 50;

  // State to track animation direction for each item
  const [animationDirections, setAnimationDirections] = useState({});

  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  // Add state to track which item is swiped
  const [swipedItemId, setSwipedItemId] = useState(null);

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
    // Remove from refs after animation
    // setTimeout(() => itemRefs.current.delete(id), 500);
    setTimeout(() => dispatch(removeFromCart(id)), 500); // Adjust timeout as needed
  };

  // Function to handle swipe to reveal delete button
  const handleSwipe = (id) => {
    setSwipedItem(id);
  };

  // Animation variants
  const variants = {
    right: { x: [300, 0] }, // Enter from right
    left: { x: [0, -300] }, // Exit to left
    center: { x: 0 },
    dragged: { x: -15 },
  };

  // Handle field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    // Determine the animation direction for each item
    const directions = {};
    items.forEach((item) => {
      directions[item.id] = "right";
    });
    setAnimationDirections(directions);
  }, [items]);

  // Proceed to next step
  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // Go back to previous step
  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const prevItemsRef = useRef();

  useEffect(() => {
    const prevItems = prevItemsRef.current;
    if (prevItems?.length < items.length) {
      // New item added, find it and set it as swiped
      const newItem = items.find(
        (item) => !prevItems.map((i) => i.id).includes(item.id)
      );
      if (newItem) {
        // Delay setting swipedItemId to allow add-to-cart animation to complete
        setTimeout(() => {
          setSwipedItemId(newItem.id);
          // Reset swiped state after the animation
          setTimeout(() => setSwipedItemId(null), 500);
        }, 500); // Delay time should be equal or more than your add-to-cart animation time
      }
    }
    prevItemsRef.current = items;
  }, [items]);
  // useEffect(() => {
  //   const prevItems = prevItemsRef.current;
  //   if (prevItems?.length < items.length) {
  //     // New item added, find it and set it as swiped
  //     const newItem = items.find(
  //       (item) => !prevItems.map((i) => i.id).includes(item.id)
  //     );
  //     if (newItem) {
  //       setSwipedItemId(newItem.id);
  //       setTimeout(() => setSwipedItemId(null), 500); // Reset swiped state after animation
  //     }
  //   }
  //   prevItemsRef.current = items;
  // }, [items]);

  // Example data and functions for OrderSuccess component

  // Example data for OrderSuccess component

  const exampleOrderDetails = {
    id: "ORD123456789",
    orderedDate: "December 26, 2023",
    items: [
      { name: "Widget A", quantity: 2 },
      { name: "Gadget B", quantity: 1 },
      { name: "Tool C", quantity: 3 },
    ],
  };

  // Placeholder functions for button actions
  const handleGoToOrderDetails = () => {
    console.log(
      "Navigating to Order Details for Order ID:",
      exampleOrderDetails.id
    );
    // Here, you would navigate to the order details page
  };

  const handleGoToOrders = () => {
    console.log("Navigating to My Orders page");
    // Here, you would navigate to the user's orders page
  };

  // Render the component for the current step
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepOne
            onNext={nextStep}
            formData={formData}
            handleChange={handleChange}
          />
        );
      case 2:
        return (
          <StepTwo
            onBack={prevStep}
            onNext={nextStep}
            formData={formData}
            handleChange={handleChange}
          />
        );
      case 3:
        return <PaymentForm onClose={prevStep} formData={formData} />;

      case 4:
        return (
          <OrderSuccess
            orderDetails={exampleOrderDetails}
            onGoToOrders={handleGoToOrders}
            onGoToOrderDetails={handleGoToOrderDetails}
          />
        );
      default:
        return <div>Step not found</div>;
    }
  };
  // Toggle function to show payment form and hide debit card button
  const togglePaymentForm = () => {
    setShowPaymentForm((currentShow) => !currentShow);
  };

  // Calculation for subtotal, tax, and total
  const subtotal = items.reduce(
    (acc, item) => acc + item.count * item.price,
    0
  );
  const tax = subtotal * 0.1; // Assuming tax is 10%
  const total = subtotal + tax;

  const onRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  useEffect(() => {
    if (listRef.current) {
      const scrollHeight = listRef.current.scrollHeight;
      const height = listRef.current.clientHeight;
      const maxScrollTop = scrollHeight - height;
      listRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }
  }, [items]);

  const handleDragEnd = (event, info, id) => {
    if (info.offset.x < -swipeThreshold) {
      removeItem(id);
    }
  };

  return (
    <div className="bg-gray-900 text-white h-full overflow-auto">
      <div className="flex flex-col justify-between h-full">
        <div className="overflow-y-auto p-4 space-y-4">
          <h2 className="text-lg font-bold">Order Summary</h2>
          <p>Leslie K.</p>
          <div
            ref={listRef}
            className="space-y-2"
            style={{ maxHeight: "180px", overflowY: "auto" }}
          >
            <AnimatePresence>
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={{
                    enter: { x: 300, opacity: 0 }, // For entering animation (add to cart)
                    center: { x: 0, opacity: 1 },
                    exit: { x: -300, opacity: 0 }, // For exiting animation (remove from cart)
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="flex items-center bg-gray-800 rounded-md relative"
                >
                  {/* Swipeable area for dragging */}
                  <motion.div
                    drag="x"
                    dragConstraints={{ left: 0, right: 40 }} // Constrain drag to 100px to the right
                    dragElastic={0.1} // Reduce elasticity to make it feel more stiff
                    onDragEnd={(event, info) => {
                      // If the drag distance passes the threshold, keep the delete button visible
                      if (info.offset.x > 10) {
                        // Assuming 50px is the threshold to show the delete button
                        setSwipedItemId(item.id);
                      } else {
                        // Otherwise, hide the delete button again
                        setSwipedItemId(null);
                      }
                    }}
                    className="flex-grow flex items-center bg-gray-700 p-2 rounded-md"
                  >
                    {/* Item content here */}
                    <div className="rounded-full bg-white h-5 w-5 flex items-center justify-center mr-2">
                      <span className="text-black text-sm">{index + 1}</span>
                    </div>
                    <p className="text-base text-white">
                      {item.name} x{item.quantity}
                    </p>
                    <div className="text-base text-white ml-12">
                      ${item.price.toFixed(2)}
                    </div>
                  </motion.div>

                  {/* Delete button, only visible when swiped */}
                  {swipedItemId === item.id && (
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{
                        x: swipedItemId === item.id ? 0 : -20,
                        opacity: swipedItemId === item.id ? 1 : 0,
                      }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute left-0 pl-2 flex items-center justify-center ${
                        swipedItemId === item.id ? "" : "hidden"
                      }`}
                      onClick={() => removeItem(item.id)}
                    >
                      {/* Trash icon, remains hidden until swipedItemId matches item.id */}
                      <TrashIcon className="h-5 w-5 text-red-600" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="p-4 space-y-2 bg-gray-700 rounded-lg w-11/12 mx-auto">
          <div className="text-xs">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between pb-4">
              <p>Tax 10%</p>
              <p>${tax.toFixed(2)}</p>
            </div>
            <div className="flex justify-between font-bold border-t border-dotted border-gray-300 first-line:pt-4 pb-4 text-lg">
              <p>Total</p>
              <p>${total.toFixed(2)}</p>
            </div>
            {renderStep()}
            {currentStep === 3 && (
              <button
                onClick={() => {
                  nextStep();
                }}
                className="block w-4/5 mx-auto bg-green-600 py-3 rounded-lg font-bold shadow-xl hover:bg-green-700 transition-colors"
              >
                Place Order
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
