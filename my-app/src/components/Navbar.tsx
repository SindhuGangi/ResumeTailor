
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="ResumeTailor Logo" width={250} height={30} />
          </Link>

        {/* Links */}
        <div className="space-x-10  text-gray-800 text-sm font-medium">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/analyze" className="hover:text-blue-600 transition">
            Analyze
          </Link>
          <Link href="/dashboard" className="hover:text-blue-600 transition">
            Saved Resumes
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/login" className="hover:text-blue-600 transition">
            Login
          </Link>
           
        </div>
      </div>
    </nav>
  );
}
