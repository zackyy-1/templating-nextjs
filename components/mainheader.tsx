"use client";

import { useState } from "react";
import {
  Menu, Search, Sun, Moon, ShoppingCart, Bell,
  Grid, Maximize2, Filter, Settings
} from "lucide-react";
import ThemeSwitcher from "@/components/ui/themeSwitcher";

interface HeaderProps {
  onMenuToggle?: () => void;
}

export default function MainHeader({ onMenuToggle }: HeaderProps) {
  const [fullscreen, setFullscreen] = useState(false);
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);

  const handleFullscreen = () => {
    if (!fullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setFullscreen(!fullscreen);
  };

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="flex items-center justify-between h-14 px-4">
          {/* Left Section */}
          <div className="flex items-center gap-3">
            <button
              onClick={onMenuToggle}
              className="p-2 rounded-md text-gray-500 hover:bg-gray-100"
            >
              <Menu className="h-5 w-5" />
            </button>

            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-3 py-1.5 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <Search className="h-4 w-4 text-gray-400 absolute left-2 top-2.5" />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <Moon className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700" />

            <div className="relative cursor-pointer">
              <ShoppingCart className="h-5 w-5 text-gray-500 hover:text-gray-700" />
              <span className="absolute -top-1 -right-2 bg-yellow-400 text-xs text-white font-bold px-1 rounded-full">
                5
              </span>
            </div>

            <div className="relative cursor-pointer">
              <Bell className="h-5 w-5 text-gray-500 hover:text-gray-700" />
              <span className="absolute -top-1 -right-2 bg-red-500 text-xs text-white font-bold px-1 rounded-full">
                6
              </span>
            </div>

            <Grid className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700" />

            <button onClick={handleFullscreen}>
              <Maximize2 className="h-5 w-5 text-gray-500 hover:text-gray-700" />
            </button>

            <Filter className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700" />

            {/* User Info */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-300" />
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium text-gray-700">Zacky</p>
                <p className="text-xs text-gray-400">Web Developer</p>
              </div>
            </div>

            {/* Settings */}
            <button onClick={() => setIsSwitcherOpen(true)}>
              <Settings className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      {/* Theme Switcher */}
      <ThemeSwitcher
        isOpen={isSwitcherOpen}
        onClose={() => setIsSwitcherOpen(false)}
      />
    </>
  );
}