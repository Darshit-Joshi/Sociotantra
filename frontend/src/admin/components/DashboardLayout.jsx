import React, { useState } from "react";

const DashboardLayout = ({ children }) => {
  // State to track if the mobile sidebar is open or closed
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden relative">
      {/* 1. MOBILE OVERLAY (Darkens the background when sidebar is open on phones) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* 2. THE SIDEBAR */}
      {/* Tailwind Magic here:
        - absolute inset-y-0 left-0: Positions it on the left.
        - transform -translate-x-full: Hides it off-screen by default.
        - md:relative md:translate-x-0: On desktop (md), positions it normally and shows it.
        - transition duration-200: Makes it slide in smoothly.
      */}
      <aside
        className={`absolute inset-y-0 left-0 z-30 w-64 bg-slate-800 text-white flex flex-col transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-700">
          <span className="text-xl font-bold">Sociotantra</span>
          {/* Close button for mobile only */}
          <button
            className="md:hidden text-gray-300 hover:text-white text-2xl"
            onClick={() => setIsSidebarOpen(false)}
          >
            &times;
          </button>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <a href="#" className="block px-4 py-2 bg-blue-600 rounded-md">
            Dashboard
          </a>
          <a
            href="#"
            className="block px-4 py-2 hover:bg-slate-700 rounded-md transition-colors"
          >
            Volunteers
          </a>
          <a
            href="#"
            className="block px-4 py-2 hover:bg-slate-700 rounded-md transition-colors"
          >
            Donations
          </a>
          <a
            href="#"
            className="block px-4 py-2 hover:bg-slate-700 rounded-md transition-colors"
          >
            Events
          </a>
        </nav>
      </aside>

      {/* 3. THE RIGHT SIDE (Main Content & Topbar) */}
      <div className="flex-1 flex flex-col min-w-0">
        {" "}
        {/* min-w-0 prevents flex items from overflowing */}
        {/* 4. THE TOPBAR */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-4 sm:px-8 z-10">
          <div className="flex items-center">
            {/* Hamburger Button (Only visible on mobile) */}
            <button
              className="mr-4 md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
              onClick={() => setIsSidebarOpen(true)}
            >
              {/* SVG icon for Hamburger Menu */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div className="text-gray-700 font-medium hidden sm:block">
              Overview
            </div>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Search Bar (Hidden on very small screens) */}
            <input
              type="text"
              placeholder="Search..."
              className="hidden sm:block px-4 py-1.5 border rounded-full text-sm focus:outline-none focus:border-blue-500 w-32 lg:w-48"
            />
            {/* Notification Bell */}
            <button className="text-gray-500 hover:text-blue-600 text-xl">
              🔔
            </button>
            {/* User Avatar */}
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer text-sm">
              A
            </div>
          </div>
        </header>
        {/* 5. THE MAIN CONTENT */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 sm:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
