import { verifyClient } from "../../api/_lib/auth";
import UnauthorizedRedirect from "@/app/components/UnauthorizedRedirect";
import AuthorizedNavbar from "@/app/components/AuthorizedNavbar";

export default async function ClientLayout({ children }) {
  const client = await verifyClient();
  if (!client) return <UnauthorizedRedirect />;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed client navbar (same look & feel as public/admin) */}
      <AuthorizedNavbar role="client" showLogout logoutAction="/api/logout" />

      {/* Page content (offset for fixed navbar height) */}
      <main>{children}</main>
    </div>
  );
}
