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

export default function OrderSummary() {
  const [showPaymentForm, setShowPaymentForm] = useState(false); // State to manage payment form visibility
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Initialize with all the fields needed across the steps
  });

  // State to track animation direction for each item
  const [animationDirections, setAnimationDirections] = useState({});

  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  // Add state to track which item is swiped
  const [swipedItemId, setSwipedItemId] = useState(null);

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
    // Remove from refs after animation
    setTimeout(() => itemRefs.current.delete(id), 500);
    setItems((items) => items.filter((item) => item.id !== id));
    setSwipedItem(null); // Reset the swiped item
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
        setSwipedItemId(newItem.id);
        setTimeout(() => setSwipedItemId(null), 500); // Reset swiped state after animation
      }
    }
    prevItemsRef.current = items;
  }, [items]);

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
      default:
        return <div>Step not found</div>;
    }
  };
  // Toggle function to show payment form and hide debit card button
  const togglePaymentForm = () => {
    setShowPaymentForm((currentShow) => !currentShow);
  };

  // Calculation for subtotal, tax, and total
  console.log("otems", items);
  const subtotal = items.reduce(
    (acc, item) => acc + item.count * item.price,
    0
  );
  const tax = subtotal * 0.1; // Assuming tax is 10%
  const total = subtotal + tax;

  const onRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className=" bg-gray-900 text-white h-full overflow-auto">
      <div className="flex flex-col justify-between h-full">
        <div className="overflow-y-auto p-4 space-y-4">
          <h2 className="text-lg font-bold">Order Summary</h2>
          <p>Leslie K.</p>
          <div
            className="space-y-2"
            style={{ maxHeight: "200px", overflowY: "auto" }}
          >
            <AnimatePresence>
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial="right"
                  animate="center"
                  exit={
                    animationDirections[item.id] === "left" ? "left" : undefined
                  }
                  variants={variants}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20, // Increased damping for a smoother animation
                    mass: 2, // Increased mass for a slower feel
                    duration: 2, // Increased duration
                  }}
                  className="flex justify-between items-center bg-gray-700 p-2 rounded-lg"
                >
                  {swipedItemId === item.id && (
                    <button
                      onClick={() => removeItem(item.id)}
                      className="mr-4"
                    >
                      <TrashIcon className="h-5 w-5 text-red-600" />
                    </button>
                  )}

                  <div className="flex items-center space-x-2">
                    <div className="rounded-full bg-white h-6 w-6 flex items-center justify-center">
                      <span className="rounded-full text-black text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-base text-white">
                      {item.name} x{item.quantity}
                    </p>
                  </div>
                  <p className="text-base text-white">
                    ${item.price.toFixed(2)}
                  </p>
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
              <button className="block w-4/5 mx-auto bg-green-600 py-3 rounded-lg font-bold shadow-xl hover:bg-green-700 transition-colors">
                Place Order
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
