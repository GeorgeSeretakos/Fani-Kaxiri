import DocumentItem from "./DocumentItem";
import {format} from "date-fns";
import { el } from "date-fns/locale";


export default function DocumentList({ documents, onDownload, onDelete }) {
  if (Object.keys(documents).length === 0)
    return <p className="text-gray-500 text-center py-12">Δεν έχουν προστεθεί ακόμη έγγραφα σε αυτή την κατηγορία.</p>;

  return (
    <div className="">
      {Object.keys(documents)
        .sort((a, b) => new Date(b + "-01") - new Date(a + "-01")) // "2025-08" → parse
        .map((ym) => (
          <div key={ym} className="shadow">
            <h3 className="text-lg bg-teal-800 py-2 px-4 text-white font-bold">
              {format(new Date(ym + "-01"), "MMMM yyyy", {locale: el})}
            </h3>
            <div>
              {documents[ym].map((doc) => (
                <DocumentItem
                  key={doc.id}
                  doc={doc}
                  onDownload={onDownload}
                  {...(onDelete ? {onDelete} : {})}
                />
              ))}
            </div>
          </div>
        ))}

    </div>
  );
}