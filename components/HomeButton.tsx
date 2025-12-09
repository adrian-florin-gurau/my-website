"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import rt from "../content/routes.json";

export default function HomeButton() {
  const buttonClasses = `
    flex items-center justify-center gap-2 
    px-5 py-3 
    rounded-full 
    text-white dark:text-gray-200
    font-semibold 
    text-sm sm:text-base
    transition-all duration-300 ease-in-out
    transform hover:scale-[1.02] 
    bg-zinc-700 hover:bg-zinc-600 dark:bg-zinc-800 dark:hover:bg-zinc-700
    shadow-lg hover:shadow-xl
    ring-2 ring-transparent hover:ring-blue-500/50
    hover:cursor-pointer
  `;

  const router = useRouter();


  const handleBack = () => {
    router.push(rt.home);
  };

  return (
    <button
      onClick={handleBack}
      className={buttonClasses}
    >
      <ArrowLeft size={15} />
      <p>{rt.homeLabel}</p>
    </button>
  );
}
