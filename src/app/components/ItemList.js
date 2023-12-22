import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/outline";

const ItemList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Item Card 1 */}
      <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl shadow-lg p-4 text-white">
        <div className="flex justify-between items-center mb-3">
          <div>
            <h3 className="text-lg">Fish and chips</h3>
            <p className="text-md">$7.50</p>
          </div>
          <div className="flex items-center">
            <MinusCircleIcon className="h-6 w-6 text-pink-600 mr-2 cursor-pointer" />
            <span className="mx-2">0</span>
            <PlusCircleIcon className="h-6 w-6 text-pink-600 cursor-pointer" />
          </div>
        </div>
      </div>
      {/* Item Card 2 */}
      <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl shadow-lg p-4 text-white">
        <div className="flex justify-between items-center mb-3">
          <div>
            <h3 className="text-lg">Roast chicken</h3>
            <p className="text-md">$12.75</p>
          </div>
          <div className="flex items-center">
            <MinusCircleIcon className="h-6 w-6 text-pink-600 mr-2 cursor-pointer" />
            <span className="mx-2">2</span>
            <PlusCircleIcon className="h-6 w-6 text-pink-600 cursor-pointer" />
          </div>
        </div>
      </div>
      {/* Item Card 3 */}
      <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl shadow-lg p-4 text-white">
        <div className="flex justify-between items-center mb-3">
          <div>
            <h3 className="text-lg">Beefsteak</h3>
            <p className="text-md">$10.20</p>
          </div>
          <div className="flex items-center">
            <MinusCircleIcon className="h-6 w-6 text-pink-600 mr-2 cursor-pointer" />
            <span className="mx-2">1</span>
            <PlusCircleIcon className="h-6 w-6 text-pink-600 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl shadow-lg p-4 text-white">
        <div className="flex justify-between items-center mb-3">
          <div>
            <h3 className="text-lg">Buffalo wings</h3>
            <p className="text-md">$8.85</p>
          </div>
          <div className="flex items-center">
            <MinusCircleIcon className="h-6 w-6 text-pink-600 mr-2 cursor-pointer" />
            <span className="mx-2">3</span>
            <PlusCircleIcon className="h-6 w-6 text-pink-600 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Item Card 5 */}
      <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl shadow-lg p-4 text-white">
        <div className="flex justify-between items-center mb-3">
          <div>
            <h3 className="text-lg">Lobster</h3>
            <p className="text-md">$13.40</p>
          </div>
          <div className="flex items-center">
            <MinusCircleIcon className="h-6 w-6 text-pink-600 mr-2 cursor-pointer" />
            <span className="mx-2">0</span>
            <PlusCircleIcon className="h-6 w-6 text-pink-600 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Item Card 6 */}
      <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl shadow-lg p-4 text-white">
        <div className="flex justify-between items-center mb-3">
          <div>
            <h3 className="text-lg">Red caviar</h3>
            <p className="text-md">$12.30</p>
          </div>
          <div className="flex items-center">
            <MinusCircleIcon className="h-6 w-6 text-pink-600 mr-2 cursor-pointer" />
            <span className="mx-2">1</span>
            <PlusCircleIcon className="h-6 w-6 text-pink-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
