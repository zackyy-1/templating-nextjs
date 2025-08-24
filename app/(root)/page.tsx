"use client";

import DashboardCards from '@/components/ui/dashboardCard';
import DashboardSection from '@/components/ui/dashboardSection';
import { useState } from 'react';
import { useTheme } from '@/components/context/themeContext';

export default function Dashboard1() {
    const [usedStorage, setUsedStorage] = useState(85);
    const { direction, themeMode, primaryColor, backgroundColor } = useTheme();

  return (
    <div
        className="min-h-screen p-12 transition-colors duration-300"
        style={{
            backgroundColor: themeMode === "dark" ? "#1e1e2f" : backgroundColor,
            direction: direction,
        }}
    >
        <div className="max-w-7xl mx-auto"> 
            {/* Header */}
            <div className="mb-8">
                <div
                    className=" p-6 mb-8 shadow-lg transition-colors duration-300"
                    style={{
                    background: themeMode === "dark" ? "#2a2a3b" : "#ffffff",
                    color: themeMode === "dark" ? "#FFFFFF" : "#171717",
                    }}
                >
                    <h1 className="text-2xl font-bold mb-2">
                        Hi, Welcome Back <span className='text-blue-500'>John!</span>
                    </h1>
                    <p className="mb-4">
                        You have used {usedStorage}% of your free plan storage.
                        Please upgrade your plan to get unlimited storage.
                    </p>

                    {/* Progress Bar */}
                    <div
                        className="w-full bg-opacity-50 rounded-full h-2.5 mb-4"
                        style={{
                            backgroundColor: primaryColor + "80",
                        }}
                    >
                        <div
                            className="h-2.5 rounded-full transition-all duration-500 ease-in-out"
                            style={{
                                width: `${usedStorage}%`,
                                backgroundColor: themeMode === "dark" ? "#ffffff" : primaryColor,
                            }}
                        />
                    </div>

                    <button
                        className="font-semibold py-2 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                        style={{
                            backgroundColor: themeMode === "dark" ? "#ffffff" : primaryColor,
                            color: themeMode === "dark" ? primaryColor  : "#ffffff",
                        }}
                        suppressHydrationWarning
                    >
                    Upgrade Now
                    </button>
                </div>
            </div>

            {/* Content Section */}
            <div>
            <DashboardCards />
            </div>
            <div className="mt-5">
            <DashboardSection />
            </div>
        </div>
    </div>
  );
}
