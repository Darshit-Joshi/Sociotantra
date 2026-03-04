import React, { useState, useEffect } from "react";
import DashboardLayout from "../components/DashboardLayout";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const StatCard = ({ title, value, subtitle, icon, isLoading }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-4">
    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg text-2xl">
      {icon}
    </div>
    <div className="flex-1">
      <p className="text-sm font-medium text-gray-500">{title}</p>
      {/* Conditional Rendering based on Loading State */}
      {isLoading ? (
        <div className="h-8 bg-gray-200 rounded animate-pulse w-1/2 mt-1 mb-1"></div>
      ) : (
        <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
      )}
      <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
    </div>
  </div>
);

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    volunteers: 0,
    donations: 0,
    campaigns: 0,
    inquiries: 0,
  });
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [recentActivity, setRecentActivity] = useState([]);
  // 2. Simulate fetching data from your Node.js backend
  useEffect(() => {
    // This simulates an API call taking 1.5 seconds
    const fetchStats = async () => {
      setIsLoading(true);
      try {
        // In the future, this will be: const response = await fetch('/api/stats');
        // const data = await response.json();

        setTimeout(() => {
          setDashboardData({
            volunteers: 42,
            donations: 12500, // ₹12,500
            campaigns: 3,
            inquiries: 8,
          });
          setRecentActivity([
            {
              id: 1,
              date: "2026-03-04",
              user: "Rahul K.",
              action: "Donated ₹5,000",
              status: "Completed",
            },
            {
              id: 2,
              date: "2026-03-03",
              user: "Priya S.",
              action: "Registered as Volunteer",
              status: "Pending",
            },
            {
              id: 3,
              date: "2026-03-02",
              user: "Amit Sharma",
              action: "Event Inquiry",
              status: "Responded",
            },
          ]);
          setChartData([
            { name: "Jan", donations: 4000 },
            { name: "Feb", donations: 3000 },
            { name: "Mar", donations: 5500 }, // Totaling our 12,500
          ]);
          setIsLoading(false);
        }, 1500);
      } catch (error) {
        console.error("Failed to fetch dashboard data", error);
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []); // Empty dependency array means this runs once when the component mounts
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome to Sociotantra Admin
          </h1>
          <p className="text-gray-600">
            Here is what is happening across your platform today.
          </p>
        </div>

        {/* 1. KPI Cards (Zero State) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Volunteers"
            value={dashboardData.volunteers}
            subtitle="Active members"
            icon="👥"
            isLoading={isLoading}
          />
          <StatCard
            title="Total Donations"
            value={`₹${dashboardData.donations.toLocaleString("en-IN")}`}
            subtitle="This month"
            icon="❤️"
            isLoading={isLoading}
          />
          <StatCard
            title="Active Campaigns"
            value={dashboardData.campaigns}
            subtitle="Currently running"
            icon="📢"
            isLoading={isLoading}
          />
          <StatCard
            title="New Inquiries"
            value={dashboardData.inquiries}
            subtitle="Needs response"
            icon="✉️"
            isLoading={isLoading}
          />
        </div>

        {/* Middle Section: Chart Placeholder & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* Chart Section */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm min-h-[300px] flex flex-col">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Donation Overview
            </h2>

            <div className="flex-1 mt-2">
              {isLoading ? (
                // LOADING STATE: A pulsing gray box
                <div className="w-full h-full min-h-[250px] bg-gray-100 animate-pulse rounded-lg"></div>
              ) : chartData.length === 0 ? (
                // ZERO STATE: What we had before
                <div className="w-full h-full min-h-[250px] border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <p className="text-gray-500 font-medium">
                      No data to display yet
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      Analytics will appear here once donations begin.
                    </p>
                  </div>
                </div>
              ) : (
                // DATA STATE: The actual Recharts BarChart
                <div className="w-full h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={chartData}
                      margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="#E5E7EB"
                      />
                      <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#6B7280", fontSize: 12 }}
                        dy={10}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#6B7280", fontSize: 12 }}
                        tickFormatter={(value) => `₹${value}`}
                      />
                      <Tooltip
                        cursor={{ fill: "#F3F4F6" }}
                        formatter={(value) => [`₹${value}`, "Donations"]}
                        contentStyle={{
                          borderRadius: "8px",
                          border: "none",
                          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                        }}
                      />
                      <Bar
                        dataKey="donations"
                        fill="#2563EB"
                        radius={[4, 4, 0, 0]}
                        maxBarSize={50}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions Panel */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-blue-300 transition-colors">
                <span className="font-medium text-blue-600">
                  + Add New Volunteer
                </span>
              </button>
              <button className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-blue-300 transition-colors">
                <span className="font-medium text-blue-600">
                  + Log Offline Donation
                </span>
              </button>
              <button className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-blue-300 transition-colors">
                <span className="font-medium text-blue-600">
                  + Create Event
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 3. Recent Activity Table (Zero State) */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm mt-8 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">
              Recent Activity
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="px-6 py-3 font-medium">Date</th>
                  <th className="px-6 py-3 font-medium">User / Source</th>
                  <th className="px-6 py-3 font-medium">Action</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  // LOADING STATE
                  <tr>
                    <td
                      colSpan="4"
                      className="px-6 py-8 text-center text-gray-500"
                    >
                      Loading recent activity...
                    </td>
                  </tr>
                ) : recentActivity.length === 0 ? (
                  // ZERO STATE (If array is empty)
                  <tr>
                    <td
                      colSpan="4"
                      className="px-6 py-12 text-center text-gray-500"
                    >
                      <div className="flex flex-col items-center justify-center">
                        <span className="text-3xl mb-2">📋</span>
                        <p className="font-medium">No recent activity</p>
                        <p className="text-sm text-gray-400">
                          Actions taken on the platform will be logged here.
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  // DATA STATE (Looping through the array)
                  recentActivity.map((activity) => (
                    <tr
                      key={activity.id}
                      className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">{activity.date}</td>
                      <td className="px-6 py-4 font-medium text-gray-800">
                        {activity.user}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {activity.action}
                      </td>
                      <td className="px-6 py-4">
                        {/* Dynamic styling based on status */}
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            activity.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : activity.status === "Pending"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {activity.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
