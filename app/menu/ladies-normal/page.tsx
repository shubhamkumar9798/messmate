"use client";

import { useState } from "react";

const menuData: Record<string, string[]> = {
  Monday: ["🍚 Rice", "🍛 Sambar", "🥗 Curd Salad", "🍌 Banana"],
  Tuesday: ["🍚 Rice", "🍅 Tomato Rasam", "🍆 Brinjal Curry", "🍨 Ice Cream"],
  Wednesday: ["🍚 Rice", "🍲 Dal", "🥔 Aloo Fry", "🍍 Pineapple"],
  Thursday: ["🍚 Rice", "🍛 Kootu", "🌶️ Potato Masala", "🍪 Biscuit"],
  Friday: ["🍚 Rice", "🥘 Kurma", "🥬 Greens", "🍧 Sweet Pongal"],
  Saturday: ["🍚 Rice", "🍜 Veg Kurma", "🥒 Cucumber Salad", "🍩 Sweet"],
  Sunday: ["🍚 Veg Biryani", "🥗 Raita", "🥤 Soft Drink", "🍰 Dessert"],
};

const days = Object.keys(menuData);

export default function GentsNormalMenuPage() {
  const [selectedDay, setSelectedDay] = useState("Monday");

  return (
    <main className="min-h-screen bg-gradient-to-br from-lime-50 via-emerald-50 to-white px-4 py-8 flex flex-col items-center gap-6">
      {/* Header */}
      <h1 className="text-4xl font-bold text-emerald-900">
        👨‍🍳 Gents Hostel - Normal Mess
      </h1>
      <p className="text-lg text-emerald-700">
        Click on a day to see the menu 🍽️
      </p>

      {/* Day Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded-full font-semibold shadow transition 
              ${
                selectedDay === day
                  ? "bg-emerald-600 text-white"
                  : "bg-white text-emerald-700 border border-emerald-300"
              }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Menu Display */}
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full mt-6">
        <h2 className="text-2xl font-semibold text-emerald-800 mb-4">
          📅 {selectedDay} Menu
        </h2>
        <ul className="list-disc list-inside space-y-2 text-emerald-700">
          {menuData[selectedDay].map((item, index) => (
            <li key={index} className="text-lg">{item}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
