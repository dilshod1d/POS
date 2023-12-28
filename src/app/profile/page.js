"use client";
import React, { useState } from "react";
import {
  ClipboardDocumentListIcon,
  HeartIcon,
  LifebuoyIcon,
  UserCircleIcon,
  MapPinIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import MyOrdersPage from "@/components/MyOrdersPage";

const components = {
  Orders: () => <MyOrdersPage />,
  Wishlist: () => <div>Wishlist content</div>,
  SupportTickets: () => <div>Support Tickets content</div>,
  ProfileInfo: () => <div>Profile Info content</div>,
  Addresses: () => <div>Addresses content</div>,
  PaymentMethods: () => <div>Payment Methods content</div>,
};

const SidebarItem = ({ label, Icon, count, active, setActive }) => {
  return (
    <div
      onClick={() => setActive(label)}
      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer my-1 ${
        active === label
          ? "bg-gray-700 text-white"
          : "text-gray-300 hover:bg-gray-700"
      }`}
    >
      <div className="flex items-center">
        <Icon className="h-6 w-6 mr-2" />
        <span>{label}</span>
      </div>
      {count !== undefined && (
        <span
          className={`inline-block text-xs font-semibold px-2 py-1 rounded-full ${
            active === label ? "bg-red-600" : "bg-red-500"
          }`}
        >
          {count}
        </span>
      )}
    </div>
  );
};

const ProfilePage = () => {
  const [active, setActive] = useState("Orders");
  const ActiveComponent = components[active];

  return (
    <div className="flex h-screen bg-gray-800 text-white">
      {/* Sidebar */}
      <aside className="w-1/5 bg-gray-800 px-5 py-7">
        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-3">PROFILE</h3>
          <SidebarItem
            label="Orders"
            Icon={ClipboardDocumentListIcon}
            count={5}
            active={active}
            setActive={setActive}
          />
          <SidebarItem
            label="Wishlist"
            Icon={HeartIcon}
            count={19}
            active={active}
            setActive={setActive}
          />
          <SidebarItem
            label="Support Tickets"
            Icon={LifebuoyIcon}
            count={1}
            active={active}
            setActive={setActive}
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">ACCOUNT SETTINGS</h3>
          <SidebarItem
            label="Profile Info"
            Icon={UserCircleIcon}
            count={null}
            active={active}
            setActive={setActive}
          />
          <SidebarItem
            label="Addresses"
            Icon={MapPinIcon}
            count={null}
            active={active}
            setActive={setActive}
          />
          <SidebarItem
            label="Payment Methods"
            Icon={CreditCardIcon}
            count={null}
            active={active}
            setActive={setActive}
          />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-7">
        <h1 className="text-2xl font-bold mb-5">{active}</h1>
        <div className="rounded-lg shadow-lg p-5 bg-gray-700">
          <ActiveComponent />
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
