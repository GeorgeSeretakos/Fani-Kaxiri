import { Download, Trash2, FileText, Image as ImageIcon, File } from "lucide-react";

function pickIcon(name = "", mime = "") {
  const n = name?.toLowerCase() || "";
  if (mime?.startsWith("image/") || /\.(png|jpe?g|gif|webp|heic)$/i.test(n)) return ImageIcon;
  if (/\.(pdf|docx?|txt|md)$/i.test(n)) return FileText;
  return File;
}

export default function DocumentItem({ doc, onDownload, onDelete }) {
  const Icon = pickIcon(doc?.name, doc?.mimeType);

  const dateLabel = doc?.date
    ? new Date(doc.date).toLocaleString("el-GR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
    : "—";

  return (
    <div className="w-full bg-white hover:bg-zinc-50 transition-colors border-b border-gray-200 last:border-b-0">
      <div className="flex items-center gap-3 px-4 py-2">
        {/* icon */}
        <Icon className="h-4 w-4 text-blue-600 shrink-0" />

        {/* name + description (+ mobile date) */}
        <div className="min-w-0 flex-1">
          <p className="truncate font-medium text-[0.7rem] sm:text-xs md:text-sm text-zinc-900">
            {doc?.name || "Χωρίς τίτλο"}
          </p>
          {doc?.description && (
            <p className="truncate text-[0.65rem] sm:text-xs md:text-sm text-zinc-500">
              {doc.description}
            </p>
          )}
          <p className="md:hidden mt-1 text-[0.65rem] sm:text-xs text-zinc-500">{dateLabel}</p>
        </div>

        {/* date (desktop only) */}
        <div className="hidden md:block w-48 text-right text-[0.7rem] sm:text-xs md:text-sm text-zinc-700">
          {dateLabel}
        </div>

        {/* actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onDownload?.(doc.id)}
            className="inline-flex items-center gap-1.5 px-2 py-1 rounded hover:bg-zinc-100 text-zinc-700 text-[0.7rem] sm:text-xs md:text-sm"
            title="Λήψη"
          >
            <Download className="w-4 h-4" />
            <span className="hidden md:inline">Λήψη</span>
          </button>

          <button
            onClick={() => onDelete?.(doc.id)}
            className="inline-flex items-center gap-1.5 px-2 py-1 rounded hover:bg-red-50 text-red-600 text-[0.7rem] sm:text-xs md:text-sm"
            title="Διαγραφή"
          >
            <Trash2 className="w-4 h-4" />
            <span className="hidden md:inline">Διαγραφή</span>
          </button>
        </div>
      </div>
    </div>
  );
}
