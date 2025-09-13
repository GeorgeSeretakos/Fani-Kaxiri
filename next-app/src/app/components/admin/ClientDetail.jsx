"use client";
import { useState, useEffect } from "react";
import { format } from "date-fns";

import UploadModal from "./UploadModal";
import EditClientModal from "./EditClientModal";
import ClientInfoCard from "./ClientInfoCard";
import DocumentList from "./DocumentList";


import { deleteClient, updateClient } from "../../../services/clients";
import {
  requestUpload,
  uploadToStorage,
  getDownloadUrl,
  deleteDocument, finalizeUpload,
} from "../../../services/documents";
import {router} from "next/client";
import {useRouter} from "next/navigation";

export default function ClientDetail({ client, mode = "admin" }) {
  const [activeTab, setActiveTab] = useState("diet");
  const [clientData, setClientData] = useState(client);
  const [groupedDocs, setGroupedDocs] = useState({});
  const [dateFilter, setDateFilter] = useState(null);

  const [isEditing, setIsEditing] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  const [file, setFile] = useState(null);
  const [docType, setDocType] = useState("DIET");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const router = useRouter();
  const [busy, setBusy] = useState(false);

  const [formData, setFormData] = useState({
    firstName: client.firstName || "",
    lastName: client.lastName || "",
    phone: client.phone || "",
  });

  const [notifyLoading, setNotifyLoading] = useState(false);

  useEffect(() => {
    if (isUploadOpen) {
      // modal just opened → reset everything
      setFile(null);
      setDocType("DIET");
      setDescription("");
      setDate(new Date().toISOString().split("T")[0]);
      setStatus("");
    }
  }, [isUploadOpen]);


  // --- Group docs by month/year ---
  useEffect(() => {
    const grouped = {};

    // normalize + sort all docs by date desc first
    const sortedDocs = [...(clientData.documents || [])].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    for (const d of sortedDocs) {
      if (activeTab !== "all" && d.type.toLowerCase() !== activeTab) continue;

      if (dateFilter) {
        const docDate = new Date(d.date);
        if (dateFilter.from && docDate < new Date(dateFilter.from)) continue;
        if (dateFilter.to && docDate > new Date(dateFilter.to)) continue;
      }

      const key = format(new Date(d.date), "yyyy-MM");
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(d);
    }

    setGroupedDocs(grouped);
  }, [clientData.documents, activeTab, dateFilter]);


  const handleDeleteClient = async () => {
    if (
      !confirm(
        "Θέλετε σίγουρα να διαγράψετε τον πελάτη?\n\n" +
        "Πρόκειται να διαγράψετε οριστικά τα προσωπικά στοιχεία " +
        "καθώς επίσης και όλα τα αρχεία που αφορούν τον πελάτη!"
      )
    ) return;

    try {
      await deleteClient(clientData.id); // if it resolves, consider it done
      alert("Ο πελάτης διαγράφηκε επιτυχώς!");
      window.location.assign("/admin"); // hard reload avoids any stale state
    } catch (err) {
      console.error(err);
      alert("Σφάλμα κατά τη διαγραφή πελάτη");
    }
  };


  const handleEditSave = async () => {
    try {
      setStatus("Αποθήκευση...");
      const updated = await updateClient(clientData.id, formData);
      console.log("Response from updateClient API: ", updated);
      setFormData({
        firstName: updated.firstName,
        lastName: updated.lastName,
        phone: updated.phone,
      });
      setClientData((prev) => ({
        ...prev,
        ...updated,
        documents: prev.documents,
      }));
      setStatus("✅ Αποθηκεύτηκε με επιτυχία!");
      setIsEditing(false);
    } catch (err) {
      console.error(err);
      setStatus("❌ Σφάλμα στην αποθήκευση");
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return setStatus("Επιλέξτε αρχείο.");

    try {
      setStatus("Δημιουργία upload URL...");
      // STEP 1: presign (NO DB write)
      const { uploadUrl, filePath } = await requestUpload({
        clientId: clientData.id,
        fileName: file.name,
      });

      setStatus("Ανέβασμα αρχείου...");
      // STEP 2: upload to B2
      await uploadToStorage(uploadUrl, file);

      setStatus("Οριστικοποίηση...");
      // STEP 3: finalize (verify in B2 → write DB)
      const { doc } = await finalizeUpload({
        clientId: clientData.id,
        fileName: file.name,
        type: docType,
        description,
        date,
        filePath,
      });

      // Only now append to UI
      setClientData((prev) => ({
        ...prev,
        documents: [
          ...(prev.documents || []),
          { ...doc, date: new Date(doc.date).toISOString() },
        ],
      }));

      setStatus("✅ Επιτυχής μεταφόρτωση!");
      setIsUploadOpen(false);
    } catch (err) {
      console.error(err);
      setStatus("❌ Σφάλμα στην μεταφόρτωση");
    }
  };




  const handleDownload = async (docId) => {
    try {
      const { url } = await getDownloadUrl(docId);
      const link = document.createElement("a");
      link.href = url;
      link.download = docId || "downloaded-file";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Download error:", err);
    }
  };

  const handleDeleteDocument = async (id) => {
    if (!confirm("Θέλετε σίγουρα να διαγράψετε αυτό το αρχείο?\n" +
      "\n" +
      "Η διαγραφή είναι οριστική!")) return;
    try {
      await deleteDocument(id);
      setClientData((prev) => ({
        ...prev,
        documents: prev.documents.filter((d) => d.id !== id),
      }));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const handleNotifyUser = async () => {
    if (!clientData?.email) {
      alert("Δεν υπάρχει email για τον πελάτη.");
      return;
    }
    try {
      setNotifyLoading(true);

      const res = await fetch("/api/notify/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          to: clientData.email,
          name: `${clientData.firstName || ""} ${clientData.lastName || ""}`.trim(),
        }),
      });

      const ct = res.headers.get("content-type") || "";
      const data = ct.includes("application/json") ? await res.json() : null;

      if (res.ok && data?.ok) {
        setStatus("✅ Η ειδοποίηση στάλθηκε επιτυχώς.");
        alert("Η ειδοποίηση στάλθηκε επιτυχώς.");
      } else {
        const msg = data?.error || "Σφάλμα στην αποστολή ειδοποίησης.";
        setStatus("❌ " + msg);
        alert(msg);
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Σφάλμα δικτύου. Δοκίμασε ξανά.");
      alert("Σφάλμα δικτύου. Δοκίμασε ξανά.");
    } finally {
      setNotifyLoading(false);
    }
  };


  return (
    <div>
      {/* Client Info Card */}
      <ClientInfoCard
        client={clientData}
        mode={mode}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setDateFilter={setDateFilter}
        {...(mode === "admin"
          ? {
            onEdit: () => setIsEditing(true),
            onDelete: handleDeleteClient,
            onUpload: () => setIsUploadOpen(true),
            onNotify: handleNotifyUser,
            notifyLoading
          }
          : {})}
      />

      {/*{status && <p className="px-4 text-xs sm:text-sm">{status}</p>}*/}

      <div>
        <DocumentList
          documents={groupedDocs}
          onDownload={handleDownload}
          {...(mode === "admin" ? {onDelete: handleDeleteDocument} : {})}
        />
      </div>

      {/* Admin-only modals */}
      {mode === "admin" && (
        <>
          <EditClientModal
            isOpen={isEditing}
            onClose={() => setIsEditing(false)}
            formData={formData}
            setFormData={setFormData}
            onSave={handleEditSave}
            status={status}
          />

          <UploadModal
            isOpen={isUploadOpen}
            onClose={() => setIsUploadOpen(false)}
            onSubmit={handleUpload}
            file={file}
            setFile={setFile}
            docType={docType}
            setDocType={setDocType}
            description={description}
            setDescription={setDescription}
            status={status}
            date={date}
            setDate={setDate}
          />
        </>
      )}
    </div>
  );
}
