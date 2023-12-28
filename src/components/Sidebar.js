import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  UserCircleIcon,
  EnvelopeIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Foods");
  return (
    <div className="h-full bg-gray-900 text-white">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="w-full flex items-center justify-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Example"
                width={200}
                height={200}
                className="w-24 text-center"
              />
            </Link>
          </div>
          <nav className="mb-4 ml-4">
            {[
              "Foods",
              "Services",
              "Digital Products",
              "Household Items",
              "Fashion",
            ].map((item, i) => (
              <a
                key={i}
                href="#"
                className={`flex items-center px-6 py-2 hover:bg-gray-700 rounded-lg my-1 ${
                  activeItem === item ? "bg-gray-700" : ""
                }`}
                onClick={() => setActiveItem(item)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="mb-4 p-2">
          {/* Bottom part of the sidebar */}
          <div className="flex items-center justify-start px-2 py-2 rounded-2xl bg-white dark:bg-gray-800 border dark:border-gray-700 shadow-sm mb-2">
            <UserCircleIcon className="h-5 w-5 text-blue-500 mr-2" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Profile
            </span>
          </div>
          <div className="flex items-center justify-start px-2 py-2  rounded-2xl bg-white dark:bg-gray-800 border dark:border-gray-700 shadow-sm mb-2">
            <EnvelopeIcon className="h-5 w-5 text-green-500 mr-2" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Cameron@gmail.com
            </span>
          </div>
          <div className="flex items-center justify-start px-2 py-2  rounded-2xl bg-white dark:bg-gray-800 border dark:border-gray-700 shadow-sm">
            <ArrowRightCircleIcon className="h-5 w-5 text-yellow-500 mr-2" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Logout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
