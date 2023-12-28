// components/StepTwo.js
import {
  MapPinIcon,
  HomeIcon,
  BriefcaseIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function StepTwo({ onNext, onBack, formData, handleChange }) {
  return (
    <div className="bg-gray-700 p-4 rounded-lg">
      <div className="space-y-4">
        {/* Address */}
        <div>
          <label
            className="block text-gray-400 text-sm font-bold mb-1"
            htmlFor="address"
          >
            Address
          </label>
          <div className="flex items-center border border-gray-600 bg-gray-700 rounded p-2">
            <MapPinIcon className="h-5 w-5 text-gray-500 mr-2" />
            <input
              id="address"
              type="text"
              name="address"
              value={formData.address || ""}
              onChange={handleChange}
              placeholder="1234 Main St"
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-500"
              required
            />
          </div>
        </div>

        {/* City */}
        <div>
          <label
            className="block text-gray-400 text-sm font-bold mb-1"
            htmlFor="city"
          >
            City
          </label>
          <div className="flex items-center border border-gray-600 bg-gray-700 rounded p-2">
            <HomeIcon className="h-5 w-5 text-gray-500 mr-2" />
            <input
              id="city"
              type="text"
              name="city"
              value={formData.city || ""}
              onChange={handleChange}
              placeholder="Anytown"
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-500"
              required
            />
          </div>
        </div>

        {/* State/Province */}
        <div>
          <label
            className="block text-gray-400 text-sm font-bold mb-1"
            htmlFor="state"
          >
            State/Province
          </label>
          <div className="flex items-center border border-gray-600 bg-gray-700 rounded p-2">
            <BriefcaseIcon className="h-5 w-5 text-gray-500 mr-2" />
            <input
              id="state"
              type="text"
              name="state"
              value={formData.state || ""}
              onChange={handleChange}
              placeholder="State"
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-500"
              required
            />
          </div>
        </div>

        {/* Postal Code */}
        <div>
          <label
            className="block text-gray-400 text-sm font-bold mb-1"
            htmlFor="zip"
          >
            Postal Code
          </label>
          <div className="flex items-center border border-gray-600 bg-gray-700 rounded p-2">
            <EnvelopeIcon className="h-5 w-5 text-gray-500 mr-2" />
            <input
              id="zip"
              type="text"
              name="zip"
              value={formData.zip || ""}
              onChange={handleChange}
              placeholder="12345"
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-500"
              required
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button
            onClick={onBack}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            type="button"
          >
            Back
          </button>
          <button
            onClick={onNext}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            type="button"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
