import { Edit, Upload, Trash2 } from "lucide-react";

export default function ClientInfoCard({ client, onEdit, onDelete, onUpload, mode = "admin" }) {
  const totalDocs = client.documents?.length || 0;

  const lastDocDate = client.documents?.length
    ? new Date(Math.max(...client.documents.map((d) => new Date(d.date).getTime())))
    : null;

  const formatDate = (date) => {
    if (!date) return "-";
    return new Intl.DateTimeFormat("el-GR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  return (
    <div className="bg-white shadow rounded p-6 flex justify-between items-center">
      {/* Πληροφορίες */}
      <div>
        <h2 className="text-xl font-semibold">
          {client.firstName} {client.lastName}
        </h2>
        <p className="text-gray-600">{client.email}</p>
        <p className="text-gray-600">{client.phone}</p>

        <p className="text-gray-600 mt-2">
          Συνολικά έγγραφα: <span className="font-semibold">{totalDocs}</span>
        </p>
        <p className="text-gray-600">
          Τελευταία τροποποίηση:{" "}
          <span className="font-semibold">{formatDate(lastDocDate)}</span>
        </p>
      </div>

      {/* Ενέργειες Admin */}
      {mode === "admin" && (
        <div className="flex space-x-3">
          <button
            onClick={onEdit}
            className="p-2 rounded hover:bg-gray-100 text-gray-600 transition"
            title="Επεξεργασία"
          >
            <Edit className="w-5 h-5" />
          </button>
          <button
            onClick={onUpload}
            className="p-2 rounded hover:bg-gray-100 text-blue-600 transition"
            title="Ανεβάστε Αρχείο"
          >
            <Upload className="w-5 h-5" />
          </button>
          <button
            onClick={onDelete}
            className="p-2 rounded hover:bg-gray-100 text-red-600 transition"
            title="Διαγραφή"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
