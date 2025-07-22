"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MenuSelector() {
  return (
    <section className="w-full max-w-3xl mx-auto mt-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-emerald-800 mb-10">
        🍽️ Explore Mess Menus
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Link href="/menu/gents-normal">
          <Button className="flex items-center justify-center gap-2 w-full py-6 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white rounded-2xl shadow-xl text-lg font-medium transition-all duration-300">
            👨‍🎓 Gents Normal
          </Button>
        </Link>

        <Link href="/menu/gents-premium">
          <Button className="flex items-center justify-center gap-2 w-full py-6 bg-gradient-to-r from-teal-500 to-green-600 hover:from-teal-600 hover:to-green-700 text-white rounded-2xl shadow-xl text-lg font-medium transition-all duration-300">
            🧑‍🍳 Gents Premium
          </Button>
        </Link>

        <Link href="/menu/ladies-normal">
          <Button className="flex items-center justify-center gap-2 w-full py-6 bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700 text-white rounded-2xl shadow-xl text-lg font-medium transition-all duration-300">
            👩‍🎓 Ladies Normal
          </Button>
        </Link>

        <Link href="/menu/ladies-premium">
          <Button className="flex items-center justify-center gap-2 w-full py-6 bg-gradient-to-r from-rose-400 to-pink-600 hover:from-rose-500 hover:to-pink-700 text-white rounded-2xl shadow-xl text-lg font-medium transition-all duration-300">
            👩‍🍳 Ladies Premium
          </Button>
        </Link>
      </div>
    </section>
  );
}
