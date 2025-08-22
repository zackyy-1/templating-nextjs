// pages/dashboard-1.js
"use client";

import DashboardCards from '@/components/ui/dashboardCard';
import BrowserUsage from '@/components/ui/browserUsage';
import DashboardSection from '@/components/ui/dashboardSection';
import Head from 'next/head';
import { useState } from 'react';

export default function Dashboard1() {
    const [usedStorage, setUsedStorage] = useState(85);
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white rounded-xl p-6 mb-8 text-white shadow-lg">
                    <h1 className="text-2xl font-bold mb-2">Hi, Welcome Back Nick!</h1>
                    <p className="mb-4">
                        You have used {usedStorage}% of your free plan storage. 
                        Please upgrade your plan to get unlimited storage.
                    </p>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-blue-500 bg-opacity-50 rounded-full h-2.5 mb-4">
                        <div 
                        className="bg-white h-2.5 rounded-full transition-all duration-500 ease-in-out" 
                        style={{ width: `${usedStorage}%` }}
                        ></div>
                    </div>
                    
                    <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-md hover:shadow-lg">
                        Upgrade Now
                    </button>
                </div>
            </div>

            <div className="min-h-screen bg-gray-100 p-6">
                <div className="max-w-7xl mx-auto">
                    <div>
                        <DashboardCards />
                    </div>
                    
                    <div className='mt-5'>
                        <DashboardSection />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}