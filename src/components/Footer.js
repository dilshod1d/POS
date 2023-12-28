import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 p-4 border-t border-gray-500 mt-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Footer Item */}
        <div className="flex items-center space-x-4 border-gray-500 border-r pr-12">
          <CheckCircleIcon className="h-6 w-6 text-green-500" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Leslie K.</span>
            <span className="text-xs">6 items • Kitchen</span>
          </div>
        </div>

        {/* Footer Item */}
        <div className="flex items-center space-x-4h-full">
          <CheckCircleIcon className="h-6 w-6 text-green-500" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Jacob J.</span>
            <span className="text-xs">4 items • Kitchen</span>
          </div>
          <span className="bg-blue-500 text-xs font-semibold px-2 py-1 rounded-full">
            Active
          </span>
        </div>

        {/* Footer Item */}
        <div className="flex items-center space-x-4 border-l border-gray-500 pl-12">
          <CheckCircleIcon className="h-6 w-6 text-green-500" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Cameron W.</span>
            <span className="text-xs">7 items • Kitchen</span>
          </div>
          <span className="bg-blue-500 text-xs font-semibold px-2 py-1 rounded-full">
            Active
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
