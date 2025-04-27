"use client";

import { useEffect } from "react";
import { configureFalClient } from "@/lib/fal-config";

export function ClientProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize the fal.ai client on the client-side
    configureFalClient();
  }, []);

  return <>{children}</>;
}
