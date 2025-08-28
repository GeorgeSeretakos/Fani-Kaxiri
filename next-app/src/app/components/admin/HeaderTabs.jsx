"use client";

export default function HeaderTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "diet", label: "Δίαιτες" },
    { id: "measurement", label: "Μετρήσεις" },
    { id: "photo", label: "Φωτογραφίες" },
  ];

  return (
    <div className="flex space-x-4 border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === tab.id
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600 hover:text-blue-500"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
