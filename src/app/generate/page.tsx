"use client";
import { Sidebar } from "@/components/sidebar";
import { ImageGenerator } from "@/components/ui/image-generator";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { ClientProvider } from "@/components/client-provider";
import { useState } from "react";

export default function GeneratePage() {
  const [activeTab, setActiveTab] = useState("My AI designs");
  const tabs = ["My AI designs", "Uploads", "My moodboards", "Community"];
  return (
    <ClientProvider>
      <Header />
      <main className="flex min-h-screen">
        {/* Sidebar with collapsible options */}
        <Sidebar />
        {/* Main generation window */}
        <div className="flex-1 flex flex-col items-center justify-start p-8">
          {/* Tabs at the top of the main content */}
          <div className="flex gap-2 mb-6 w-full max-w-3xl">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-1 rounded-full text-sm font-semibold transition ${activeTab === tab ? "bg-black text-white" : "bg-zinc-200 text-zinc-400"}`}
                style={{ minWidth: "fit-content" }}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="w-full max-w-3xl mb-6">
            <div className="rounded-lg bg-zinc-100 p-4 text-zinc-700 text-center text-base font-medium mb-4">
              This is how the main generation window looks like. Use the sidebar to access more options.
            </div>
            <ImageGenerator />
          </div>
        </div>
      </main>
      <Footer />
    </ClientProvider>
  );
}
