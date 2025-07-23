'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import InstallPrompt from "@/components/InstallPrompt";
import MenuSelector from "@/components/MenuSelector";
import { auth, db } from "@/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut, User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function HomePage() {
  const [user, setUser] = useState<User | null>(null);
  const [selectedMess, setSelectedMess] = useState<string>("Gents Normal Mess");
  const [isInitialLogin, setIsInitialLogin] = useState(false);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const loggedInUser = result.user;
      setUser(loggedInUser);
      setIsInitialLogin(true); // trigger useEffect to update Firestore
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  useEffect(() => {
    const saveUserMessToFirestore = async () => {
      if (user && isInitialLogin) {
        try {
          await setDoc(doc(db, "users", user.uid), {
            name: user.displayName,
            email: user.email,
            mess: selectedMess,
          });
          setIsInitialLogin(false); // reset flag after saving
        } catch (error) {
          console.error("Error saving user to Firestore:", error);
        }
      }
    };

    saveUserMessToFirestore();
  }, [user, selectedMess, isInitialLogin]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-emerald-50 to-white flex flex-col items-center justify-start px-4 py-8 space-y-10">

      {/* Landing Card */}
      <Card className="max-w-6xl w-full shadow-2xl rounded-2xl overflow-hidden grid md:grid-cols-2 bg-white border-none">
        {/* Image Section */}
        <div className="relative h-[400px] md:h-[700px]">
          <Image
            src="/mess1.png"
            alt="Landing Page Image"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Text Section */}
        <CardContent className="flex flex-col justify-center items-start p-6 md:p-10 gap-4 bg-gradient-to-br from-lime-100 to-emerald-50">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 leading-tight">
            MessMate 🍽️
          </h1>
          <p className="text-lg md:text-xl text-emerald-700 font-medium">
            Know your meals. Anytime. Anywhere.
          </p>
          <p className="text-sm text-emerald-600">
            Stay updated with today’s menu, get meal alerts, and never miss your favorite dish again.
          </p>
        </CardContent>
      </Card>

      {/* Menu Selection Section */}
      <MenuSelector />

      <InstallPrompt />

      {!user && (
        <div className="flex flex-col items-center space-y-4">
          <select
            className="px-4 py-2 border rounded-lg text-sm"
            value={selectedMess}
            onChange={(e) => setSelectedMess(e.target.value)}
          >
            <option value="Gents Normal Mess">Gents Normal Mess</option>
            <option value="Gents Premium Mess">Gents Premium Mess</option>
            <option value="Ladies Normal Mess">Ladies Normal Mess</option>
            <option value="Ladies Premium Mess">Ladies Premium Mess</option>
          </select>

          <button
            onClick={handleLogin}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded-lg"
          >
            Sign in with Google
          </button>
        </div>
      )}

      {user && (
        <div className="flex flex-col items-center space-y-2">
          <p className="text-emerald-800">Welcome, {user.displayName} 👋</p>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg"
          >
            Logout
          </button>
        </div>
      )}
    </main>
  );
}
