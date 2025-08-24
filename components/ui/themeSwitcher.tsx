import { useTheme } from "../context/themeContext";

interface ThemeSwitcherProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ThemeSwitcher({ isOpen, onClose }: ThemeSwitcherProps) {
  const {
  direction,
  setDirection,
  themeMode,
  setThemeMode,
  menuColor,
  setMenuColor,
  headerColor,
  setHeaderColor,
  primaryColor,
  setPrimaryColor,
  backgroundColor,
  setBackgroundColor
} = useTheme();


  const resetSettings = () => {
  setThemeMode("light");
  setDirection("ltr");
  setMenuColor("#000000");
  setHeaderColor("#000000");
  setPrimaryColor("#3b82f6");
  setBackgroundColor("#ffffff");
};


  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Switcher</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>

          <div className="mb-6">
            <h5 className="font-semibold text-gray-900 mb-3">Theme Styles</h5>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Theme Color Mode:</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setThemeMode("light")}
                    className={`flex-1 p-2 rounded border ${themeMode === "light" ? "bg-blue-100 border-blue-500" : "border-gray-300"}`}
                  >
                    Light
                  </button>
                  <button
                    onClick={() => setThemeMode("dark")}
                    className={`flex-1 p-2 rounded border ${themeMode === "dark" ? "bg-blue-100 border-blue-500" : "border-gray-300"}`}
                  >
                    Dark
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">Directions:</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setDirection("ltr")}
                    className={`flex-1 p-2 rounded border ${direction === "ltr" ? "bg-blue-100 border-blue-500" : "border-gray-300"}`}
                  >
                    LTR
                  </button>
                  <button
                    onClick={() => setDirection("rtl")}
                    className={`flex-1 p-2 rounded border ${direction === "rtl" ? "bg-blue-100 border-blue-500" : "border-gray-300"}`}
                  >
                    RTL
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <h5 className="font-semibold text-gray-900 mb-3">Theme Colors</h5>

                {/* Menu Colors */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Menu Colors:</p>
                  <div className="flex gap-2">
                    {["#000000", "#1e293b", "#06b6d4", "#d1d5db"].map((color) => (
                      <div
                        key={color}
                        className={`w-6 h-6 rounded-full cursor-pointer border-2 ${menuColor === color ? "border-blue-500" : "border-transparent"}`}
                        style={{ backgroundColor: color }}
                        onClick={() => setMenuColor(color)}
                      />
                    ))}
                  </div>
                </div>

                {/* Header Colors */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Header Colors:</p>
                  <div className="flex gap-2">
                    {["#000000", "#1e293b", "#06b6d4", "#d1d5db"].map((color) => (
                      <div
                        key={color}
                        className={`w-6 h-6 rounded-full cursor-pointer border-2 ${headerColor === color ? "border-blue-500" : "border-transparent"}`}
                        style={{ backgroundColor: color }}
                        onClick={() => setHeaderColor(color)}
                      />
                    ))}
                  </div>
                </div>

                {/* Primary Theme Color */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Theme Primary:</p>
                  <div className="flex gap-2">
                    {["#3b82f6", "#8b5cf6", "#22c55e", "#ef4444"].map((color) => (
                      <div
                        key={color}
                        className={`w-6 h-6 rounded-full cursor-pointer border-2 ${primaryColor === color ? "border-blue-500" : "border-transparent"}`}
                        style={{ backgroundColor: color }}
                        onClick={() => setPrimaryColor(color)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button onClick={resetSettings} className="w-full bg-red-200 text-gray-800 py-2 px-4 rounded hover:bg-red-300 transition-colors">
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
