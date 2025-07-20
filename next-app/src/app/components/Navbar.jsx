import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-black text-white shadow fixed top-0 left-0 right-0 z-50 opacity-[0.9] border-b border-[#333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left: Logo + Name */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/icons/logo.png"
                alt="Logo"
                width={50}
                height={50}
              />
              <span className="text-2xl font-great-vibes">Believe in Yourself</span>
            </Link>
          </div>

          {/* Right: Nav links */}
          <div className="hidden sm:flex sm:space-x-8 items-center">
            {/*<Link*/}
            {/*  href="/"*/}
            {/*  className="inline-flex items-center px-1 pt-1 hover:underline"*/}
            {/*>*/}
            {/*  Αρχική*/}
            {/*</Link>*/}
            <Link
              href="/about-us"
              className="inline-flex items-center px-1 pt-1 hover:underline"
            >
              Ποιοί Είμαστε
            </Link>
            <Link
              href="/office"
              className="inline-flex items-center px-1 pt-1 hover:underline"
            >
              Το γραφείο μας
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-1 pt-1 hover:underline"
            >
              Υπηρεσίες
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center px-1 pt-1 hover:underline"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-1 pt-1 hover:underline"
            >
              Επικοινωνία
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
