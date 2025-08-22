// components/ThemeSwitcher.js
import { useState } from 'react';

// components/ThemeSwitcher.tsx
interface ThemeSwitcherProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ThemeSwitcher({ isOpen, onClose }: ThemeSwitcherProps) {
  const [settings, setSettings] = useState({
    themeMode: "light",
    direction: "ltr",
    navStyle: "vertical",
    menuStyle: "menuClick",
    layoutStyle: "default",
  });

  const resetSettings = () => {
    setSettings({
      themeMode: "light",
      direction: "ltr",
      navStyle: "vertical",
      menuStyle: "menuClick",
      layoutStyle: "default",
    });
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 h-full overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Switcher</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          {/* Theme Styles Section */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Theme Styles</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Theme Color Mode */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Theme Color Mode:</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSettings({...settings, themeMode: 'light'})}
                    className={`flex-1 p-2 rounded border ${
                      settings.themeMode === 'light' ? 'bg-blue-100 border-blue-500' : 'border-gray-300'
                    }`}
                  >
                    Light
                  </button>
                  <button
                    onClick={() => setSettings({...settings, themeMode: 'dark'})}
                    className={`flex-1 p-2 rounded border ${
                      settings.themeMode === 'dark' ? 'bg-blue-100 border-blue-500' : 'border-gray-300'
                    }`}
                  >
                    Dark
                  </button>
                </div>
              </div>

              {/* Directions */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Directions:</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSettings({...settings, direction: 'ltr'})}
                    className={`flex-1 p-2 rounded border ${
                      settings.direction === 'ltr' ? 'bg-blue-100 border-blue-500' : 'border-gray-300'
                    }`}
                  >
                    LTR
                  </button>
                  <button
                    onClick={() => setSettings({...settings, direction: 'rtl'})}
                    className={`flex-1 p-2 rounded border ${
                      settings.direction === 'rtl' ? 'bg-blue-100 border-blue-500' : 'border-gray-300'
                    }`}
                  >
                    RTL
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Reset Button */}
          <button
            onClick={resetSettings}
            className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}