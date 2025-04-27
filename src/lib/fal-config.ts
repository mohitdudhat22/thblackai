import { fal } from "@fal-ai/client";

// Configure the fal client to use our API proxy
export function configureFalClient() {
  fal.config({
    proxyUrl: "/api/fal/proxy",
  });
}

// Function to generate an image using fal.ai's FLUX model
export async function generateImage(prompt: string, imageSize: string = "square_hd") {
  return await fal.subscribe("fal-ai/flux/dev", {
    input: {
      prompt,
      image_size: imageSize,
    },
    pollInterval: 5000,
    logs: true,
  });
}
