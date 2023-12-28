// components/StepOne.js
import { UserIcon, AtSymbolIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function StepOne({ onNext, formData, handleChange }) {
  return (
    <div className="bg-gray-700 p-4 rounded-lg">
      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label
            className="block text-gray-400 text-sm font-bold mb-1"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <div className="flex items-center border border-gray-600 bg-gray-700 rounded p-2">
            <UserIcon className="h-5 w-5 text-gray-500 mr-2" />
            <input
              id="fullName"
              type="text"
              name="fullName"
              value={formData.fullName || ""}
              onChange={handleChange}
              placeholder="John Doe"
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-500"
              required
            />
          </div>
        </div>

        {/* Email Address */}
        <div>
          <label
            className="block text-gray-400 text-sm font-bold mb-1"
            htmlFor="email"
          >
            Email Address
          </label>
          <div className="flex items-center border border-gray-600 bg-gray-700 rounded p-2">
            <AtSymbolIcon className="h-5 w-5 text-gray-500 mr-2" />
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              placeholder="john@example.com"
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-500"
              required
            />
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label
            className="block text-gray-400 text-sm font-bold mb-1"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <div className="flex items-center border border-gray-600 bg-gray-700 rounded p-2">
            <PhoneIcon className="h-5 w-5 text-gray-500 mr-2" />
            <input
              id="phoneNumber"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber || ""}
              onChange={handleChange}
              placeholder="(555) 555-5555"
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-500"
              required
            />
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-end mt-4">
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
