"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  ChevronDown, 
  ChevronRight, 
  LayoutDashboard, 
  Grid3X3,
  AppWindow,
  Box,
  Shield,
  Settings,
  FileText,
  HelpCircle,
  Layers,
  BarChart3,
  Calendar,
  Users,
  Image,
  Bell,
  Folder,
  Mail,
  ShoppingCart,
  CreditCard,
  PieChart,
  Map,
  Star,
  type Icon as LucideIcon
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

interface MenuItem {
  title: string;
  icon?:  typeof LucideIcon;
  path?: string;
  children?: MenuItem[];
  badge?: string;
}

const menuItems: MenuItem[] = [
  {
    title: "Dashboards",
    icon:   LayoutDashboard,
    children: [
      { title: "Dashboard 1", path: "/" }
    ]
  },
  {
    title: "Apps",
    icon: AppWindow,
    children: [
      { title: "Notifications", icon: Bell, path: "/apps/notifications" }
    ]
  },
  {
    title: "Elements",
    icon: Grid3X3,
    children: [
      { title: "Alerts", path: "/elements/alerts" },
      { title: "Buttons", path: "/elements/buttons" },
      { title: "Cards", path: "/elements/cards" },
      { title: "Forms", path: "/elements/forms" }
    ]
  },
  {
    title: "Advanced UI",
    icon: Layers,
    children: [
      { title: "Accordions", path: "/advanced/accordions" },
      { title: "Carousel", path: "/advanced/carousel" },
      { title: "Modals", path: "/advanced/modals" }
    ]
  },
  {
    title: "Pages",
    icon: FileText,
    children: [
      { title: "Profile", path: "/pages/profile" },
      { title: "Settings", path: "/pages/settings" },
      { title: "Pricing", path: "/pages/pricing" },
      { title: "Invoice", path: "/pages/invoice" }
    ]
  },
  {
    title: "Charts",
    icon: BarChart3,
    children: [
      { title: "Apex Charts", path: "/charts/apex" },
      { title: "Chart.js", path: "/charts/chartjs" }
    ]
  },
  {
    title: "E-commerce",
    icon: ShoppingCart,
    badge: "New",
    children: [
      { title: "Products", path: "/ecommerce/products" },
      { title: "Product Details", path: "/ecommerce/product-details" },
      { title: "Cart", path: "/ecommerce/cart" },
      { title: "Checkout", path: "/ecommerce/checkout" }
    ]
  }
];

export default function Sidebar({ isOpen }: SidebarProps) {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const toggleMenu = (title: string) => {
    setOpenMenus(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
  <aside className={`bg-gradient-to-b from-gray-900 to-gray-800 text-white h-screen flex flex-col fixed top-0 left-0 z-40 shadow-xl rounded-r-2xl border-r border-gray-700 transition-all duration-300${isOpen ? "w-64" : "w-0 overflow-hidden"}`}>
    {isOpen && (
      <>  
      {/* Header */}
      <div className="p-6 border-b border-gray-700">
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <LayoutDashboard className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Nowa</h1>
            <p className="text-xs text-gray-400"> Dashboard</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 custom-scrollbar">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <div key={item.title} className="relative">
              <button
                onClick={() => toggleMenu(item.title)}
                onMouseEnter={() => setHoveredItem(item.title)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                  openMenus[item.title] 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : hoveredItem === item.title 
                    ? 'bg-gray-700 text-white' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">{item.title}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {item.badge && (
                    <span className="px-2 py-1 bg-blue-500 text-xs rounded-full">
                      {item.badge}
                    </span>
                  )}
                  {item.children && (
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openMenus[item.title] ? 'rotate-180' : ''
                      }`} 
                      />
                  )}
                </div>
              </button>

              {/* Submenu */}
              {item.children && openMenus[item.title] && (
                <div className="ml-4 mt-1 pl-3 border-l border-gray-700 space-y-1">
                  {item.children.map((child) => (
                    <Link
                    key={child.title}
                      href={child.path || "#"}
                      className="flex items-center space-x-2 p-2 text-sm rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-150"
                    >
                      {child.icon ? (
                        <child.icon className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-3 h-3" />
                      )}
                      <span>{child.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-4 border-t border-gray-700"></div>

        {/* Additional Links */}
        <div className="space-y-1">
          <Link
            href="/help"
            className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-150"
          >
            <HelpCircle className="w-5 h-5" />
            <span className="text-sm font-medium">Help Center</span>
          </Link>
          <Link
            href="/settings"
            className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-150"
          >
            <Settings className="w-5 h-5" />
            <span className="text-sm font-medium">Settings</span>
          </Link>
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700 bg-gray-800">
        <div className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold">JD</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">John Doe</p>
            <p className="text-xs text-gray-400 truncate">Administrator</p>
          </div>
          <button className="text-gray-400 hover:text-white transition-colors">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile overlay (optional) */}
      <div className="lg:hidden absolute inset-0 bg-black bg-opacity-50 -z-10"></div>
      </>
      )}
    </aside>
  );
}