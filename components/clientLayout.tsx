"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar";
import MainHeader from "@/components/mainheader";
import Footer from "@/components/footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} />

      {/* Main area */}
      <div
        className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${
          sidebarOpen ? "lg:ml-64" : "ml-0"
        }`}
      >
        {/* Header */}
        <MainHeader onMenuToggle={toggleSidebar} />

        {/* Content */}
        <main className="flex-1 p-6 bg-gray-50">{children}</main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
