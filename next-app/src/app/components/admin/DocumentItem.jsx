import { Download, Trash2 } from "lucide-react";

export default function DocumentItem({ doc, onDownload, onDelete }) {
  const formattedDate = new Date(doc.date).toLocaleString("el-GR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <li className="flex justify-between items-center border p-3 rounded hover:shadow transition bg-white">
      {/* Left side: Name + Description */}
      <div className="flex-1">
        <p className="font-semibold text-gray-800">{doc.name}</p>
        {doc.description && (
          <p className="text-sm text-gray-600 mt-1">{doc.description}</p>
        )}
      </div>

      {/* Middle: Date & Time */}
      <div className="text-sm text-gray-500 whitespace-nowrap mx-4">
        {formattedDate}
      </div>

      {/* Right side: Icon Buttons */}
      <div className="flex space-x-2">
        <button
          onClick={() => onDownload(doc.id)}
          className="p-2 rounded hover:bg-green-100 text-green-600 transition"
          title="Download"
        >
          <Download className="w-5 h-5" />
        </button>
        <button
          onClick={() => onDelete(doc.id)}
          className="p-2 rounded hover:bg-red-100 text-red-600 transition"
          title="Delete"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </li>
  );
}
