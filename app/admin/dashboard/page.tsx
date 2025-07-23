"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function AdminDashboard() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [messType, setMessType] = useState("gents-normal");

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin !== "true") {
      router.push("/admin"); // Redirect if not admin
    }
  }, [router]);

  const handleSend = async () => {
    const res = await fetch("/api/sendNotification", {
      method: "POST",
      body: JSON.stringify({ message, messType }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      toast.success("✅ Notification sent successfully!");
      setMessage("");
    } else {
      toast.error("❌ Failed to send notification");
    }
  };

  return (
    <main className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-xl">
      <h1 className="text-2xl font-bold text-emerald-700 mb-6">
        🚨 Admin Notification Panel
      </h1>

      <Label className="text-left block mb-2">Message:</Label>
      <Input
        placeholder="Enter your notification..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="mb-4"
      />

      <Label className="text-left block mb-2">Target Mess Group:</Label>
      <select
        value={messType}
        onChange={(e) => setMessType(e.target.value)}
        className="w-full mb-4 p-2 rounded-md border border-gray-300"
      >
        <option value="gents-normal">👨‍🎓 Gents Normal</option>
        <option value="gents-premium">🧑‍🍳 Gents Premium</option>
        <option value="ladies-normal">👩‍🎓 Ladies Normal</option>
        <option value="ladies-premium">👩‍🍳 Ladies Premium</option>
      </select>

      <Button
        onClick={handleSend}
        className="bg-emerald-600 hover:bg-emerald-700 text-white w-full"
      >
        Send Notification
      </Button>
    </main>
  );
}
