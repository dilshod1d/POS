"use client";
import { useState } from "react";
import Image from "next/image";
import SwitchThemeButton from "../components/SwitchThemeButton";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import OrderSummary from "../components/OrderSummary";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <div className="bg-gray-900 max-h-screen">
        <Head>
          <title>POS Layout</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex h-screen">
          {/* Sidebar */}
          <div className="sticky top-0 h-screen p-1">
            <Sidebar />
          </div>

          {/* Scrollable Middle Content */}
          <div className="overflow-auto flex-grow rounded-lg shadow-lg p-4 hide-scrollbar">
            <SearchBar />
            <MainContent />
            <Footer />
          </div>

          {/* Right Sidebar */}
          <div className="sticky top-0 h-screen bg-gray-700 flex-none w-[350px]">
            <OrderSummary />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}
