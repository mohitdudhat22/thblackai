import { Button } from "./button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="py-12 md:py-24 bg-zinc-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">AI Fashion Design</h1>
            <p className="text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join 500,000+ AI fashion designers
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 min-[400px]:gap-6">
            <Button className="rounded-full bg-black text-white" size="lg">
              Start with Google
            </Button>
            <Button variant="outline" className="rounded-full" size="lg">
              AI outfit generator
            </Button>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl">
            {[
              { label: "DESIGN", image: "https://ext.same-assets.com/3161642283/2152449757.jpeg" },
              { label: "TRY ON", image: "https://ext.same-assets.com/3161642283/4185930032.jpeg" },
              { label: "MODELS", image: "https://ext.same-assets.com/3161642283/3678602485.jpeg" },
              { label: "BRANDING", image: "https://ext.same-assets.com/3161642283/213685413.jpeg" },
              { label: "TECHPACK", image: "https://ext.same-assets.com/3161642283/1160719283.jpeg" },
              { label: "TRENDS", image: "https://ext.same-assets.com/3161642283/437450800.jpeg" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={`AI ${item.label.toLowerCase()}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xs font-medium mt-2">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
