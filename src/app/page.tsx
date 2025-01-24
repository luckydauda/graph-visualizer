"use client";

import React, { useState } from "react";
import SideBar from "@/components/ui/sidebar";
import Description from "@/components/ui/description";
import Home from "@/components/ui/home";

export default function HomePage() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => setIsMobileSidebarOpen(!isMobileSidebarOpen);

  return (
    <div className="flex min-h-screen gap-8 bg-gray-100">
      {/* Sidebar */}
      <div className="md:block fixed top-4 left-4 z-50 md:relative md:top-0 md:left-0">
        {/* Hamburger Button for Mobile */}
        <button
          className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center md:hidden"
          onClick={toggleMobileSidebar}
        >
          <img src="/hamburger-icon.svg" alt="Menu" />
        </button>

        {/* Sidebar for Mobile and Desktop */}
        <div
          className={`fixed top-0 left-0 h-full bg-white shadow-md transition-transform duration-300 md:static md:translate-x-0 ${
            isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SideBar />
        </div>

        {/* Overlay for Mobile Sidebar */}
        {isMobileSidebarOpen && (
          <div
            className="fixed inset-0  z-40 md:hidden"
            onClick={toggleMobileSidebar}
          ></div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-4 md:flex-row">
        {/* Description Section */}
        <Description />

        {/* Home Section */}
        <Home />
      </div>
    </div>
  );
}
