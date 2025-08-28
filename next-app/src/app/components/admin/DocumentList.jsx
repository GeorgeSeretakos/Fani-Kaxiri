import DocumentItem from "./DocumentItem";
import {format} from "date-fns";
import { el } from "date-fns/locale";


export default function DocumentList({ documents, onDownload, onDelete }) {
  if (Object.keys(documents).length === 0)
    return <p className="text-gray-500">No documents found.</p>;

  return (
    <div className="space-y-6">
      {Object.keys(documents)
        .sort((a, b) => new Date(b + "-01") - new Date(a + "-01")) // "2025-08" → parse
        .map((ym) => (
          <div key={ym} className="bg-gray-700 rounded shadow p-4">
            <h3 className="text-lg text-white font-bold mb-2">
              {format(new Date(ym + "-01"), "MMMM yyyy", {locale: el})}
            </h3>
            <ul className="space-y-2">
              {documents[ym].map((doc) => (
                <DocumentItem
                  key={doc.id}
                  doc={doc}
                  onDownload={onDownload}
                  {...(onDelete ? {onDelete} : {})}
                />
              ))}
            </ul>
          </div>
        ))}

    </div>
  );
}