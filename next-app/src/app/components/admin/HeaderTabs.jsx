"use client";

export default function HeaderTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "diet", label: "Δίαιτες" },
    { id: "measurement", label: "Μετρήσεις" },
    { id: "photo", label: "Φωτογραφίες" },
  ];

  return (
    <div className="flex flex-col sm:flex-row mx-auto w-full">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-3 py-2 border text-sm font-medium transition
              ${isActive
              ? "bg-teal-800 text-white border-teal-800"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
