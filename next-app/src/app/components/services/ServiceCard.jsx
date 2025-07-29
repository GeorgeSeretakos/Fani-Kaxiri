export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="border border-teal-200 rounded-xl p-4 hover:shadow transition w-64 h-80 flex flex-col justify-between">
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center bg-teal-50 rounded mb-4">
        <div className="text-2xl text-cyan-500">{icon}</div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-teal-600 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm flex-1">
        {description}
      </p>
    </div>
  );
}
