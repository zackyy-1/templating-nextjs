// app/components/DashboardSection.tsx
"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const browserData = [
  { name: "Chrome", company: "Google, Inc.", users: 35502, change: 12.75, icon: "/images/svgicons/chrome.svg" },
  { name: "Edge", company: "Microsoft Corporation, Inc.", users: 25364, change: -24.37, icon: "/images/svgicons/edge.svg" },
  { name: "Firefox", company: "Mozilla Foundation, Inc.", users: 14635, change: 15.63, icon: "/images/svgicons/firefox.svg" },
  { name: "Safari", company: "Apple Corporation, Inc.", users: 35657, change: -12.54, icon: "/images/svgicons/safari.svg" },
  { name: "Opera", company: "Opera, Inc.", users: 12563, change: -15.12, icon: "/images/svgicons/opera.svg" },
];

const projectData = [
  { month: "Jan", orders: 43, sales: 33 },
  { month: "Feb", orders: 41, sales: 21 },
  { month: "Mar", orders: 56, sales: 36 },
  { month: "Apr", orders: 85, sales: 55 },
  { month: "May", orders: 58, sales: 20 },
  { month: "Jun", orders: 54, sales: 34 },
  { month: "Jul", orders: 69, sales: 60 },
  { month: "Aug", orders: 42, sales: 32 },
  { month: "Sep", orders: 22, sales: 55 },
  { month: "Oct", orders: 52, sales: 77 },
  { month: "Nov", orders: 75, sales: 87 },
  { month: "Dec", orders: 33, sales: 52 },
];

export default function DashboardSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6" suppressHydrationWarning>
      
      {/* Browser Usage */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4 border-b pb-2">Browser Usage</h2>
        <ul className="space-y-4">
          {browserData.map((item) => (
            <li key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-8 h-8" />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.company}</p>
                </div>
              </div>
              <div className="text-right" suppressHydrationWarning>
                <p className="font-semibold">{item.users.toLocaleString()}</p>
                <p
                  className={`text-sm ${
                    item.change > 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {item.change > 0 ? "▲" : "▼"} {Math.abs(item.change)}%
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Project Budget */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4 border-b pb-2">Project Budget</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={projectData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="orders" fill="#00c49f" name="Total Orders" />
              <Bar dataKey="sales" fill="#d0d0d0" name="Total Sales" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}