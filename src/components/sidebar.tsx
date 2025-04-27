import React, { useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp, Folder, Zap, Wand2, Sliders, Image as ImageIcon, Plus } from "lucide-react";

export function Sidebar() {
  // Collapsed state for each section
  const [collapsed, setCollapsed] = useState({
    collection: true,
    mode: true,
    textToImage: true,
    creativeAI: true,
    format: true,
    numImages: true,
  });

  const toggle = (key: keyof typeof collapsed) =>
    setCollapsed((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <aside className="flex flex-col h-full w-80 min-w-[320px] max-w-xs border-r bg-white relative overflow-y-auto text-black">
      <div className="flex-1 space-y-4 p-4 pb-32">
        {/* Collection Selector */}
        <div className="rounded-2xl border border-zinc-200 p-4 bg-white shadow-sm">
          <button
            className="flex items-center w-full justify-between text-left font-semibold text-black"
            onClick={() => toggle("collection")}
          >
            <span className="flex items-center gap-2">
              <Folder className="w-5 h-5 text-black" />
              Collection : My AI designs (All)
            </span>
            {collapsed.collection ? <ChevronDown className="text-zinc-500" /> : <ChevronUp className="text-zinc-500" />}
          </button>
          {!collapsed.collection && (
            <div className="mt-4 flex flex-col gap-2">
              <button className="rounded-full border border-blue-500 bg-white text-blue-600 font-semibold px-4 py-1 text-sm shadow-sm">My AI designs (All)</button>
              <button className="rounded-full px-4 py-1 text-sm text-zinc-700 hover:bg-zinc-100 transition">From Virtual Try-On</button>
              <button className="rounded-full px-4 py-1 text-sm text-zinc-700 hover:bg-zinc-100 transition">From Models</button>
              <button className="rounded-full px-4 py-1 text-sm text-zinc-700 hover:bg-zinc-100 transition">From Branding designs</button>
              <button className="rounded-full px-4 py-1 text-sm text-zinc-700 hover:bg-zinc-100 transition">Saved (from community)</button>
              <button className="mt-3 flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white text-black font-medium px-4 py-2 text-sm hover:bg-zinc-100 transition">
                <Plus className="w-4 h-4 text-black" /> New collection
              </button>
            </div>
          )}
        </div>

        {/* Mode Selection */}
        <div className="rounded-2xl border border-zinc-200 p-4 bg-white shadow-sm">
          <button
            className="flex items-center w-full justify-between text-left font-semibold text-black"
            onClick={() => toggle("mode")}
          >
            <span className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-black" />
              Mode : Text to image
            </span>
            {collapsed.mode ? <ChevronDown className="text-zinc-500" /> : <ChevronUp className="text-zinc-500" />}
          </button>
          {!collapsed.mode && (
            <div className="mt-4 grid grid-cols-2 gap-2">
              {[
                "Automatic",
                "Text to image",
                "Image to image",
                "Image to text",
                "Text to video",
                "Image to video",
                "Video to video",
                "Text to 3D",
                "Image to 3D",
                "3D to 3D",
                "Text to audio",
              ].map((mode, i) => (
                <button
                  key={mode}
                  className={`rounded-full px-3 py-1 text-sm font-medium border transition ${mode === "Text to image" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-black border-zinc-300 hover:bg-zinc-100"}`}
                >
                  {mode}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Text to Image Options */}
        <div className="rounded-2xl border border-zinc-200 p-4 bg-white shadow-sm">
          <button
            className="flex items-center w-full justify-between text-left font-semibold text-black"
            onClick={() => toggle("textToImage")}
          >
            <span className="flex items-center gap-2">
              <Wand2 className="w-5 h-5 text-black" />
              Text to image
            </span>
            {collapsed.textToImage ? <ChevronDown className="text-zinc-500" /> : <ChevronUp className="text-zinc-500" />}
          </button>
          {!collapsed.textToImage && (
            <div className="mt-4 space-y-3">
              <div className="flex gap-2">
                {['Freestyle', 'Clothing', 'Accessory', 'Beauty'].map((cat) => (
                  <button
                    key={cat}
                    className={`rounded-full px-3 py-1 text-sm font-medium border transition ${cat === "Clothing" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-black border-zinc-300 hover:bg-zinc-100"}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="rounded-lg bg-zinc-100 p-3 mt-2">
                <div className="text-blue-600 text-sm font-semibold mb-1 flex items-center gap-1">
                  <ImageIcon className="w-4 h-4 text-black" />
                  Choose a type :
                </div>
                <select className="w-full rounded-lg border border-zinc-300 px-3 py-2 mt-1 bg-white text-black">
                  <option>Studio</option>
                  <option>Outdoor</option>
                  <option>Runway</option>
                </select>
                <div className="text-xs text-blue-600 mt-1 cursor-pointer underline">Watch studio demo</div>
              </div>
              <div className="flex gap-2 mt-2">
                <button className="rounded-full px-3 py-1 text-xs font-medium border bg-blue-100 text-blue-700 border-blue-200">3.5</button>
                <button className="rounded-full px-3 py-1 text-xs font-medium border bg-white text-black border-zinc-300 hover:bg-zinc-100">3.4</button>
                <button className="rounded-full px-3 py-1 text-xs font-medium border bg-white text-black border-zinc-300 hover:bg-zinc-100">Last gen 2.8</button>
              </div>
            </div>
          )}
        </div>

        {/* Creative AI */}
        <div className="rounded-2xl border border-zinc-200 p-4 bg-white shadow-sm">
          <button
            className="flex items-center w-full justify-between text-left font-semibold text-black"
            onClick={() => toggle("creativeAI")}
          >
            <span className="flex items-center gap-2">
              <Sliders className="w-5 h-5 text-black" />
              Creative AI
            </span>
            {collapsed.creativeAI ? <ChevronDown className="text-zinc-500" /> : <ChevronUp className="text-zinc-500" />}
          </button>
          {!collapsed.creativeAI && (
            <div className="mt-4 flex gap-2">
              <button className="rounded-full px-4 py-1 text-sm font-medium border bg-blue-600 text-white border-blue-600">Yes</button>
              <button className="rounded-full px-4 py-1 text-sm font-medium border bg-white text-black border-zinc-300 hover:bg-zinc-100">No</button>
            </div>
          )}
        </div>

        {/* Format */}
        <div className="rounded-2xl border border-zinc-200 p-4 bg-white shadow-sm">
          <button
            className="flex items-center w-full justify-between text-left font-semibold text-black"
            onClick={() => toggle("format")}
          >
            <span className="flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-black" />
              Format : 9:16
            </span>
            {collapsed.format ? <ChevronDown className="text-zinc-500" /> : <ChevronUp className="text-zinc-500" />}
          </button>
          {!collapsed.format && (
            <div className="mt-2 text-sm text-zinc-700">(Format options...)</div>
          )}
        </div>

        {/* Number of Images */}
        <div className="rounded-2xl border border-zinc-200 p-4 bg-white shadow-sm">
          <button
            className="flex items-center w-full justify-between text-left font-semibold text-black"
            onClick={() => toggle("numImages")}
          >
            <span className="flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-black" />
              Number of images : 1
            </span>
            {collapsed.numImages ? <ChevronDown className="text-zinc-500" /> : <ChevronUp className="text-zinc-500" />}
          </button>
          {!collapsed.numImages && (
            <div className="mt-2 text-sm text-zinc-700">(Number options...)</div>
          )}
        </div>
      </div>
      {/* Sticky Create Now Button */}
      <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t border-zinc-200 z-10">
        <Button className="w-full bg-blue-600 text-white text-lg font-semibold py-3 rounded-xl shadow-lg hover:bg-blue-700">
          Create now <span className="ml-2 text-xs font-normal">(1.0 cr)</span>
        </Button>
      </div>
    </aside>
  );
} 