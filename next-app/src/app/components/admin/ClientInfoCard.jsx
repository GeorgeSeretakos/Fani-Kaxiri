import DateFilter from "./DateFilter";
import HeaderTabs from "./HeaderTabs";
import { Edit, Upload, Trash2, Mail, Loader2 } from "lucide-react";

export default function ClientInfoCard({
                                         client,
                                         mode = "admin",
                                         onEdit,
                                         onUpload,
                                         onDelete,
                                         onNotify,
                                         notifyLoading,
                                         activeTab,
                                         setActiveTab,
                                         setDateFilter,
                                       }) {
  const totalDocs = client.documents?.length || 0;

  const formatDate = (date) =>
    date
      ? new Intl.DateTimeFormat("el-GR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date(date))
      : "-";

  return (
    <div className="border-b-4 border-gray-100 py-6 px-12 flex flex-col md:flex-row gap-6 md:justify-between">
      {/* Left: Client info */}
      <div className="flex items-start gap-4 md:flex-1">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold text-lg shrink-0">
          {client.firstName?.[0]}
          {client.lastName?.[0]}
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold truncate">
              {client.firstName} {client.lastName}
            </h2>
            {mode === "admin" && (
              <button
                type="button"
                onClick={onEdit}
                className="p-1 rounded hover:bg-gray-100 text-gray-600"
                title="Επεξεργασία"
                aria-label="Επεξεργασία"
              >
                <Edit className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Email row with inline notify action */}
          {client.email && (
            <div className="text-gray-600 flex items-center gap-2 min-w-0">
              <span className="break-all">
                email:{" "}
                <a
                  href={`mailto:${client.email}`}
                  className="underline-offset-2 hover:underline"
                >
                  {client.email}
                </a>
              </span>
              {mode === "admin" && (
                <button
                  type="button"
                  onClick={onNotify}
                  disabled={!client.email || notifyLoading}
                  className="p-1 rounded hover:bg-gray-100 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                  title={
                    client.email
                      ? "Ειδοποίηση χρήστη"
                      : "Δεν υπάρχει email για τον πελάτη"
                  }
                  aria-label="Ειδοποίηση χρήστη"
                >
                  {notifyLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Mail className="w-4 h-4" />
                  )}
                </button>
              )}
            </div>
          )}

          {client.phone && <p className="text-gray-600">Tel: {client.phone}</p>}

          <div className="mt-3 space-y-1 text-sm">
            <div className="flex items-center gap-2">
              <p>
                Συνολικά έγγραφα:{" "}
                <span className="font-semibold">{totalDocs}</span>
              </p>
              {mode === "admin" && (
                <button
                  type="button"
                  onClick={onUpload}
                  className="p-1 rounded hover:bg-gray-100 text-gray-600"
                  title="Ανέβασμα"
                  aria-label="Ανέβασμα"
                >
                  <Upload className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <p>
                Τελευταία τροποποίηση:{" "}
                <span className="font-semibold">
                  {formatDate(client.updatedAt)}
                </span>
              </p>
              {mode === "admin" && (
                <button
                  type="button"
                  onClick={onDelete}
                  className="p-1 rounded hover:bg-gray-100 text-gray-600"
                  title="Διαγραφή πελάτη"
                  aria-label="Διαγραφή πελάτη"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Right: Filters (fixed width, vertically centered) */}
      <div className="md:self-center w-full md:w-[28rem] lg:w-[32rem] flex flex-col gap-3">
        <div className="w-full">
          <DateFilter setDateFilter={setDateFilter} />
        </div>
        <div className="w-full">
          <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    </div>
  );
}
