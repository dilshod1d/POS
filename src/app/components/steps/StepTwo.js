// components/StepTwo.js
export default function StepTwo({ onNext, onBack, formData, handleChange }) {
  return (
    <div className="bg-gray-700 p-8 rounded-lg shadow-lg max-w-md mx-auto my-10">
      <div className="grid grid-cols-1 gap-2">
        <label className="block">
          <span className="text-gray-300">Address</span>
          <input
            type="text"
            name="address"
            value={formData.address || ""}
            onChange={handleChange}
            placeholder="1234 Main St"
            className="py-1 px-2 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          />
        </label>

        <label className="block">
          <span className="text-gray-300">City</span>
          <input
            type="text"
            name="city"
            value={formData.city || ""}
            onChange={handleChange}
            placeholder="Anytown"
            className="py-1 px-2 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          />
        </label>

        <label className="block">
          <span className="text-gray-300">State/Province</span>
          <input
            type="text"
            name="state"
            value={formData.state || ""}
            onChange={handleChange}
            placeholder="State"
            className="py-1 px-2 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          />
        </label>

        <label className="block">
          <span className="text-gray-300">Postal Code</span>
          <input
            type="text"
            name="zip"
            value={formData.zip || ""}
            onChange={handleChange}
            placeholder="12345"
            className="py-1 px-2 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          />
        </label>

        <div className="flex justify-between">
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
