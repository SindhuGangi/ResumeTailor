'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import Link from "next/link";
import Image from "next/image";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!passwordRegex.test(password)) {
      setErrorMsg(
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match!");
      return;
    }

    try {
      setIsLoading(true);
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCred.user, {
        displayName: `${firstName} ${lastName}`,
      });
      router.push("/");
    } catch (err: any) {
      if (err.code === "auth/email-already-in-use") {
        setErrorMsg("This email is already registered. Please sign in instead.");
      } else {
        setErrorMsg(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full min-h-[calc(100vh-7rem)] pt-4 overflow-hidden">
      <div className="absolute top-0 left-0 h-[100vh] w-full -z-10">
        <Image
          src="/Sign.jpg"
          alt="Background"
          fill
          style={{ objectFit: 'cover', opacity: 0.6 }}
          priority
        />
      </div>

      <div className="flex justify-center items-start pt-12 pb-12">
        <div className="w-full max-w-sm p-8 border rounded shadow bg-white bg-opacity-75">
          <h2 className="text-xl text-blue-600 font-bold mb-4 text-center">Create an Account</h2>

          <form onSubmit={handleEmailSignUp} className="space-y-4">
            <input
              className="w-full border border-gray-300 px-4 py-3 text-sm"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              className="w-full border border-gray-300 px-4 py-3 text-sm"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              className="w-full border border-gray-300 px-4 py-3 text-sm"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="relative">
              <input
                className="w-full border border-gray-300 px-3 py-3 text-sm pr-10"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-500" />
                )}
              </div>
            </div>

            <div className="relative">
              <input
                className="w-full border border-gray-300 px-3 py-3 text-sm pr-10"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <div
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? (
                  <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-500" />
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 rounded ${isLoading ? "bg-gray-400" : "bg-blue-600 text-white"}`}
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          {errorMsg && (
            <div className="mt-4 text-sm text-red-600 bg-red-100 px-4 py-2 rounded border border-red-300">
              {errorMsg}
            </div>
          )}

          <p className="mt-4 text-center text-sm">
            Already registered?{" "}
            <Link href="/Login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
