"use client";
import Link from "next/link";
import Image from "next/image";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithCredential,
  onAuthStateChanged,
  fetchSignInMethodsForEmail,
  Auth,
} from "firebase/auth";
import { auth } from "../../lib/firebase";
import { FaGithub } from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setErrorMsg("");

    if (!email || !password) return;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error: any) {
      if (error.code === "auth/invalid-credential") {
        setErrorMsg("Invalid email or password.");
      } else {
        setErrorMsg(error.message);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    setErrorMsg("");
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (error: any) {
      setErrorMsg(error.message);
    }
  };

  const handleGitHubSignIn = async () => {
    setErrorMsg("");
    const provider = new GithubAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const displayName = result.user.displayName || result.user.email;
      console.log("GitHub Name:", displayName);
      router.push("/");
    } catch (error: any) {
      if (error.code === "auth/account-exists-with-different-credential") {
        const email = error.customData?.email;
        const methods = await fetchSignInMethodsForEmail(auth, email);
        setErrorMsg(
          `Account already exists. Try signing in with: ${methods[0]}`
        );
      } else {
        setErrorMsg(error.message);
      }
    }
  };

  return (
    <>
      <div className="relative w-full min-h-[calc(100vh-7rem)] pt-4 overflow-hidden">
        <div className="absolute top-0 left-0 h-[100vh] w-full -z-10">
          <Image
            src="/Sign.jpg"
            alt="Background"
            fill
            style={{ objectFit: "cover", opacity: 0.6 }}
            priority
          />
        </div>

        <div className="flex justify-center items-start pt-12 pb-12">
          <div className="w-full max-w-sm p-8 border rounded shadow bg-white bg-opacity-75">
            <h2 className="text-xl text-blue-600 font-bold mb-4 text-center">
              Login
            </h2>

            <form onSubmit={handleEmailSignIn} className="space-y-3 mt-2">
              <input
                name="email"
                className="w-full border border-gray-300 px-4 py-3 text-sm"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {submitted && !email && (
                <p className="text-xs text-red-600 mt-1">
                  Please enter your email
                </p>
              )}

              <div className="relative">
                <input
                  name="password"
                  className="w-full border border-gray-300 px-4 py-3 text-sm pr-10"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              {submitted && !password && (
                <p className="text-xs text-red-600 mt-1">
                  Please enter your password
                </p>
              )}

              <button className="w-full bg-blue-600 text-white py-3 rounded text-sm">
                Sign In
              </button>
            </form>

            {errorMsg && (
              <div className="mt-2 text-xs text-red-600 bg-red-100 px-3 py-2 rounded border border-red-300">
                {errorMsg}
              </div>
            )}

            <div className="my-6 text-center text-sm text-gray-700">
              or sign in with
            </div>

            <div className="space-y-3">
              <button
                onClick={handleGoogleSignIn}
                className="w-full bg-white border border-gray-300 text-sm py-3 rounded flex items-center justify-center gap-2"
              >
                <Image
                  src="/Google.jpeg"
                  alt="Google logo"
                  width={18}
                  height={18}
                />
                <span>Google</span>
              </button>
              <button
                onClick={handleGitHubSignIn}
                className="w-full border border-gray-800 text-gray-800 py-3 rounded text-sm flex items-center justify-center gap-2"
              >
                <FaGithub className="text-sm" /> GitHub
              </button>
            </div>

            <p className="mt-5 text-center text-sm">
              Not registered?{" "}
              <Link href="/signup" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
