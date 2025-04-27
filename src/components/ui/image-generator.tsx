"use client";

import { useState } from "react";
import { Button } from "./button";
import { generateImage } from "@/lib/fal-config";
import Image from "next/image";
import { LoaderCircle } from "lucide-react";

export function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setError(null);

    try {
      const result: any = await generateImage(prompt);
      console.log("Generated image result:", result);

      let imageUrl: string | undefined;

      if (result && typeof result === "object") {
        if (result.data?.images?.[0]?.url) {
          imageUrl = result.data.images[0].url;
        } else if (result.images?.[0]?.url) {
          imageUrl = result.images[0].url;
        } else if (result.url) {
          imageUrl = result.url;
        }
      }

      if (imageUrl) {
        setGeneratedImage(imageUrl);
      } else {
        console.error("Unexpected response format:", result);
        setError("No image URL found in the response. Please try again.");
      }
    } catch (err) {
      console.error("Error generating image:", err);
      setError("Error generating image. Please try again later.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Create your first AI fashion design in 30 seconds
            </h2>
            <p className="text-zinc-500">
              Bring your fashion ideas to life with our AI outfit generator.
              Design your first clothing pieces by describing what you want.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <textarea
                className="min-h-24 w-full resize-none rounded-lg border border-zinc-200 p-4 focus:border-zinc-900 focus:outline-none focus:ring-0"
                placeholder="Describe your fashion design idea... (e.g., 'an elegant black evening dress with lace details, worn by a female model in studio lighting')"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isGenerating}>
              {isGenerating ? (
                <>
                  <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                "Generate Fashion Design"
              )}
            </Button>
          </form>

          {error && (
            <div className="rounded-lg bg-red-50 p-4 text-red-500">{error}</div>
          )}

          {generatedImage && (
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={generatedImage}
                  alt="Generated fashion design"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex justify-center space-x-2">
                <Button
                  variant="outline"
                  onClick={() => window.open(generatedImage, "_blank")}
                >
                  View Full Size
                </Button>
                <Button variant="outline" onClick={() => setGeneratedImage(null)}>
                  Clear
                </Button>
              </div>
            </div>
          )}

          {!generatedImage && !isGenerating && (
            <div className="rounded-lg border border-dashed border-zinc-200 p-12 text-center">
              <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center space-y-4">
                <div className="text-zinc-500">
                  Your generated fashion design will appear here
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
