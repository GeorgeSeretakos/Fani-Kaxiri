import { verifyClient } from "../../api/_lib/auth";
import UnauthorizedRedirect from "@/app/components/UnauthorizedRedirect";
import AuthorizedNavbar from "@/app/components/AuthorizedNavbar";
export const metadata = { robots: { index: false, follow: false } };
export default async function ClientLayout({ children, params }) {
  const client = await verifyClient(params?.id);
  if (!client) return <UnauthorizedRedirect />;

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthorizedNavbar role="client" showLogout logoutAction="/api/logout" />
      <UnauthorizedRedirect exp={client.exp} immediate={false} />
      <main>{children}</main>
    </div>
  );
}