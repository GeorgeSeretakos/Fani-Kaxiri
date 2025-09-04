import { verifyAdmin } from "../api/_lib/auth";
import UnauthorizedRedirect from "@/app/components/UnauthorizedRedirect";
import AuthorizedNavbar from "@/app/components/AuthorizedNavbar";

export default async function AdminLayout({ children }) {
  const admin = await verifyAdmin();
  if (!admin) return <UnauthorizedRedirect />;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed admin navbar */}
      <AuthorizedNavbar role="admin" />

      {/* Page content (offset for fixed navbar) */}
      <main className="pt-16">{children}</main>
    </div>
  );
}
