import React, { useState } from "react";
import {
  BeakerIcon,
  CakeIcon,
  ClipboardDocumentListIcon,
  FireIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import ItemList from "./ItemList";
import StepsBar from "./StepsBar";
import Products from "./Products";

const MainContent = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const goToNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };
  return (
    <div className="flex-1 w-full overflow-auto">
      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div className="flex items-center justify-between p-8 bg-[#cfdddb] rounded-xl shadow-lg text-black">
          <ClipboardDocumentListIcon className="h-6 w-6" />
          <div>
            <h2 className="text-lg">Breakfast</h2>
            <p className="text-sm">13 items</p>
          </div>
        </div>
        <div className="flex items-center justify-between p-8 bg-[#e4cded] rounded-xl shadow-lg text-black">
          <ClipboardDocumentListIcon className="h-6 w-6" />
          <div>
            <h2 className="text-lg">Breakfast</h2>
            <p className="text-sm">13 items</p>
          </div>
        </div>
        <div className="flex items-center justify-between p-8 bg-[#c2dbe9] rounded-xl shadow-lg text-black">
          <ClipboardDocumentListIcon className="h-6 w-6" />
          <div>
            <h2 className="text-lg">Soups</h2>
            <p className="text-sm">8 items</p>
          </div>
        </div>
        <div className="flex items-center justify-between p-8 bg-[#c9caef] rounded-xl shadow-lg text-black">
          <ClipboardDocumentListIcon className="h-6 w-6" />
          <div>
            <h2 className="text-lg">Pasta</h2>
            <p className="text-sm">10 items</p>
          </div>
        </div>
        <div className="flex items-center justify-between p-8 bg-[#f3c0d8] rounded-xl shadow-lg text-black">
          <ClipboardDocumentListIcon className="h-6 w-6" />
          <div>
            <h2 className="text-lg">Sushi</h2>
            <p className="text-sm">15 items</p>
          </div>
        </div>
        <div className="flex items-center justify-between p-8 bg-[#e5dade] rounded-xl shadow-lg text-black">
          <CakeIcon className="h-6 w-6" />
          <div>
            <h2 className="text-lg">Desserts</h2>
            <p className="text-sm">9 items</p>
          </div>
        </div>
        <div className="flex items-center justify-between p-8 bg-[#f1c8d0] rounded-xl shadow-lg text-black">
          <BeakerIcon className="h-6 w-6" />
          <div>
            <h2 className="text-lg">Drinks</h2>
            <p className="text-sm">11 items</p>
          </div>
        </div>
        <div className="flex items-center justify-between p-8 bg-[#c2e9dd] rounded-xl shadow-lg text-black">
          <CakeIcon className="h-6 w-6" />
          <div>
            <h2 className="text-lg">Alcohol</h2>
            <p className="text-sm">12 items</p>
          </div>
        </div>
      </div>
      <Products />

      {/* <StepsBar currentStep={currentStep} /> */}
    </div>
  );
};

export default MainContent;
