'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      sessionStorage.clear();
      localStorage.clear();
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="bg-white border-b shadow-md px-6 py-1">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="ResumeTailor Logo" width={250} height={30} />
        </Link>

        <div className="flex items-center space-x-6 text-gray-800 text-sm font-medium">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/analyze" className="hover:text-blue-600 transition">Analyze</Link>
          <Link href="/dashboard" className="hover:text-blue-600 transition">Saved Resumes</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>

          {user ? (
            <div className="flex items-center gap-2">
              <span>{user.displayName || user.email}</span>
              {user.photoURL && (
                <Image
                  src={user.photoURL}
                  alt="User Avatar"
                  width={36}
                  height={36}
                  className="rounded-full border"
                />
              )}
              <button
                onClick={handleLogout}
                className="text-red-500 hover:underline text-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link href="/Login" className="hover:text-blue-600 transition">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
