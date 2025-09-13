import { verifyAdmin } from "../api/_lib/auth";
import UnauthorizedRedirect from "@/app/components/UnauthorizedRedirect";
import AuthorizedNavbar from "@/app/components/AuthorizedNavbar";
export const metadata = { robots: { index: false, follow: false } };
export default async function AdminLayout({ children }) {
  const admin = await verifyAdmin();
  if (!admin) return <UnauthorizedRedirect />;

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthorizedNavbar role="admin" />
      <UnauthorizedRedirect exp={admin.exp} immediate={false} />
      <main>{children}</main>
    </div>
  );
}