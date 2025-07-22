"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const messOptions = [
  { label: "Gents Hostel - Normal Mess", value: "gents-normal" },
  { label: "Gents Hostel - Premium Mess", value: "gents-premium" },
  { label: "Ladies Hostel - Normal Mess", value: "ladies-normal" },
  { label: "Ladies Hostel - Premium Mess", value: "ladies-premium" },
];

export default function MenuSelector() {
  const handleClick = (value: string) => {
    // 👉 You can route to a specific page or show a popup
    alert(`You selected ${value}`);
  };

  return (
    <section className="w-full max-w-3xl mx-auto mt-12 px-4">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Want to know the Mess Menu?
      </h2>

      <Card className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        {messOptions.map((option) => (
          <CardContent
            key={option.value}
            className="flex flex-col items-center justify-between rounded-2xl border p-4 shadow-md bg-white dark:bg-zinc-900"
          >
            <span className="text-lg font-medium mb-4 text-center">
              {option.label}
            </span>
            <Button
              onClick={() => handleClick(option.label)}
              className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-xl px-4 py-2 shadow-md hover:scale-105 transition"
            >
              View Menu
            </Button>
          </CardContent>
        ))}
      </Card>
    </section>
  );
}
