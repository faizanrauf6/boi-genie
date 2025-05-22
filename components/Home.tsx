// components/Home.tsx
"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import DropDown, { VibeType } from "@/components/DropDown";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoadingDots from "@/components/LoadingDots";
import Toggle from "@/components/Toggle";
import { ChatCompletionStream } from "together-ai/lib/ChatCompletionStream";

export default function Home() {
  const MAX_BIO_LENGTH = 200;

  const [loading, setLoading] = useState(false);
  const [bio, setBio] = useState("");
  const [vibe, setVibe] = useState<VibeType>("Professional");
  const [generatedBios, setGeneratedBios] = useState<String>("");
  const [isLlama, setIsLlama] = useState(false);
  const bioRef = useRef<null | HTMLDivElement>(null);

  const scrollToBios = () => {
    if (bioRef.current !== null) {
      bioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const prompt = `Generate 3 ${
    vibe === "Casual" ? "relaxed" : vibe === "Funny" ? "silly" : "professional"
  } personal bios with no hashtags and clearly labeled "1.", "2.", and "3.". Only return these 3 bios, nothing else. ${
    vibe === "Funny" ? "Make the bios humorous. " : ""
  }Make sure each bio is under 300 characters, uses short, natural sentences, and matches this context: ${bio}${
    bio.slice(-1) === "." ? "" : "."
  }`;

  const handleBio = (e: any) => {
    e.preventDefault();
    const value = e.target.value;
    setBio(value);
  };

  const generateBio = async (e: any) => {
    if (!bio) {
      toast("Please enter a job or hobby", { icon: "❌" });
      return;
    }
    if (bio.length > MAX_BIO_LENGTH) {
      toast("Bio is too long", { icon: "❌" });
      return;
    }
    if (bio.length < 3) {
      toast("Bio is too short", { icon: "❌" });
      return;
    }
    e.preventDefault();
    setGeneratedBios("");
    setLoading(true);
    const response = await fetch("/api/together", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        model: isLlama
          ? "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo"
          : "mistralai/Mixtral-8x7B-Instruct-v0.1",
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const runner = ChatCompletionStream.fromReadableStream(response.body!);
    runner.on("content", (delta) => setGeneratedBios((prev) => prev + delta));

    scrollToBios();
    setLoading(false);
    setBio("");
  };

  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-10 sm:mt-10">
        <h1 className="sm:text-6xl text-4xl max-w-[708px] font-bold text-gray-900 dark:text-gray-100">
          Generate your next bio using AI
        </h1>

        <div className="mt-7">
          <Toggle isGPT={isLlama} setIsGPT={setIsLlama} />
        </div>
        <div className="max-w-xl w-full">
          <div className="flex mt-10 items-center space-x-3">
            <Image
              src="/1-black.png"
              width={30}
              height={30}
              alt="1 icon"
              className="mb-5 sm:mb-0 dark:invert"
            />
            <p className="text-left font-medium text-gray-900 dark:text-gray-300">
              Drop in your job{" "}
              <span className="text-gray-500 dark:text-gray-400">
                (or your favorite hobby)
              </span>
              .
            </p>
          </div>
          <textarea
            value={bio}
            onChange={(e) => handleBio(e)}
            rows={4}
            maxLength={MAX_BIO_LENGTH}
            className="w-full rounded-md border border-gray-300 bg-white text-gray-900 shadow-sm focus:border-black focus:ring-black my-2 dark:bg-zinc-900 dark:border-zinc-700 dark:text-gray-100 dark:focus:border-white dark:focus:ring-white"
            placeholder={"e.g. Senior Software Engineer at Google"}
          />
          <p className="text-right text-sm text-gray-500 dark:text-gray-400">
            {MAX_BIO_LENGTH - bio.length} characters
          </p>

          <div className="flex mb-5 items-center space-x-3">
            <Image
              src="/2-black.png"
              width={30}
              height={30}
              alt="2 icon"
              className="dark:invert"
            />
            <p className="text-left font-medium text-gray-900 dark:text-gray-300">
              Select your vibe.
            </p>
          </div>
          <DropDown vibe={vibe} setVibe={(newVibe) => setVibe(newVibe)} />

          {loading ? (
            <button
              className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80 w-full"
              disabled
            >
              <LoadingDots color="white" style="large" />
            </button>
          ) : (
            <button
              className="bg-black text-white font-medium px-4 py-3 rounded-full sm:mt-10 mt-8 hover:bg-black/80 w-full dark:text-black dark:bg-white dark:hover:bg-white/80"
              onClick={(e) => generateBio(e)}
            >
              Generate your bio &rarr;
            </button>
          )}
        </div>

        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />

        {generatedBios && (
          <div className="space-y-10 my-3">
            <div>
              <h2
                className="sm:text-4xl text-3xl mt-5 font-bold text-gray-900 dark:text-gray-100 mx-auto"
                ref={bioRef}
              >
                Your generated bios
              </h2>
            </div>
            <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto">
              {generatedBios
                .substring(generatedBios.indexOf("1") + 3)
                .split(/2\.|3\./)
                .map((generatedBio) => (
                  <div
                    className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition cursor-pointer border border-gray-300 dark:border-zinc-700 flex justify-between items-start"
                    onClick={() => {
                      navigator.clipboard.writeText(generatedBio);
                      toast("Bio copied to clipboard", { icon: "📋" });
                    }}
                    key={generatedBio}
                  >
                    <p className="text-gray-900 dark:text-gray-100">
                      {generatedBio}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
