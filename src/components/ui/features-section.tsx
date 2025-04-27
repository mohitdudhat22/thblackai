import { Button } from "./button";
import Image from "next/image";
import Link from "next/link";

export function FeaturesSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Bring your fashion ideas to life</h2>
            <p className="text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The New Black AI helps 500,000+ fashion designers and brands create unique and original AI fashion designs using the best artificial intelligence for clothing design. Unleash your creativity and create your AI outfit with AI fashion models. Simply describe what you have in mind in our AI outfit generator.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 min-[400px]:gap-6">
            <Button className="rounded-full" size="lg">
              Access AI outfit generator
            </Button>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 mt-16">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Explore AI Fashion Modes</h2>
          <p className="text-zinc-500 md:text-lg max-w-3xl mx-auto">
            Take AI fashion to the next level with our 6 modes, offering 100+ AI fashion features. The New Black AI empowers designers, brands and developers to create AI clothing effortlessly, unlocking creativity while simplifying the entire fashion design process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {[
            {
              title: "AI Fashion Design",
              description: "Create AI fashion designs from text or images, retouch your creations adding details or changing colors, generate AI fashion videos, generate 3D clothing designs and more.",
              image: "https://ext.same-assets.com/3161642283/1913270015.png",
              label: "AI Fashion Design"
            },
            {
              title: "AI Virtual Try On",
              description: "See how clothes, jewelry or shoes would look on you (or a model), by using a photo of yourself and the clothes. Our AI clothes changer is like trying on outfits digitally with AI.",
              image: "https://ext.same-assets.com/3161642283/2863998428.png",
              label: "AI Virtual Try On"
            },
            {
              title: "AI Fashion Models",
              description: "Generate realistic AI models wearing your clothing, jewelry, shoes, and more. The perfect way for brands to showcase their collections. No photoshoots needed anymore.",
              image: "https://ext.same-assets.com/3161642283/362807359.png",
              label: "AI fashion models"
            },
            {
              title: "AI Fashion Branding",
              description: "Create AI moodboards, logos, brand names, store visuals, and more. Our Branding section helps you effortlessly brainstorm and develop impactful fashion brand concepts.",
              image: "https://ext.same-assets.com/3161642283/2700496908.jpeg",
              label: "AI branding"
            },
            {
              title: "AI Techpack Maker",
              description: "Our free tech pack maker makes it easy to create detailed tech packs in minutes. Generate also AI flat sketches from text or images.",
              image: "https://ext.same-assets.com/3161642283/2004779110.jpeg",
              label: "Techpack maker"
            },
            {
              title: "AI Fashion Trends",
              description: "Ask our AI anything and get a complete overview in seconds, powered by data gathered from across the web, with clear sources included.",
              image: "https://ext.same-assets.com/3161642283/768962511.jpeg",
              label: "AI fashion trends"
            }
          ].map((feature, index) => (
            <div key={index} className="flex flex-col space-y-3 p-6 bg-zinc-50 rounded-xl">
              <div className="space-y-3">
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-zinc-500 text-sm">{feature.description}</p>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg mt-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
              <Button variant="outline" className="mt-2 w-full">
                {feature.label}
              </Button>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button className="rounded-full" size="lg">
            Search 100+ AI fashion features
          </Button>
        </div>
      </div>
    </section>
  );
}
