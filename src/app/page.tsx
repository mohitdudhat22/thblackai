import { Hero } from "@/components/ui/hero";
import { FeaturesSection } from "@/components/ui/features-section";
import { ImageGenerator } from "@/components/ui/image-generator";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { ClientProvider } from "@/components/client-provider";

export default function Home() {
  return (
    <ClientProvider>
      <Header />
      <main>
        <Hero />
        <ImageGenerator />
        <FeaturesSection />
      </main>
      <Footer />
    </ClientProvider>
  );
}
