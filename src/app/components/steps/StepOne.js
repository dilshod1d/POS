// components/StepOne.js
export default function StepOne({ onNext, formData, handleChange }) {
    return (
      <div className="bg-gray-700 p-8 rounded-lg shadow-lg max-w-md mx-auto my-10">
        <div className="grid grid-cols-1 gap-6">
          <label className="block">
            <span className="text-gray-300">Full Name</span>
            <input
              type="text"
              name="fullName"
              value={formData.fullName || ''}
              onChange={handleChange}
              placeholder="John Doe"
              className="py-1 px-2 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              required
            />
          </label>
  
          <label className="block">
            <span className="text-gray-300">Email Address</span>
            <input
              type="email"
              name="email"
              value={formData.email || ''}
              onChange={handleChange}
              placeholder="john@example.com"
              className="py-1 px-2 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              required
            />
          </label>
  
          <label className="block">
            <span className="text-gray-300">Phone Number</span>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber || ''}
              onChange={handleChange}
              placeholder="(555) 555-5555"
              className="py-1 px-2 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              required
            />
          </label>
  
          <div className="flex justify-end">
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
  