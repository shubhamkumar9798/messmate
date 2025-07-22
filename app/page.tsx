import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-emerald-50 to-white flex items-center justify-center px-4">
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
    </main>
  );
}
