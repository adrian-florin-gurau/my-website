"use client";

import { loadLanguage } from "@/content/lang";
import ph from "../content/placeholder.json";
import { useEffect, useState } from "react";

type Translations = typeof ph;

interface LanguageSelectorProps {
  parentSetLang: React.Dispatch<React.SetStateAction<Translations>>;
}

const LanguageSelector = ({ parentSetLang }: LanguageSelectorProps) => {
  // State for the current language, defaulting to English
  const [lang, setLang] = useState("en");

  // Load language from localStorage on mount
  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang === "ro" || storedLang === "en") {
      setLang(storedLang);
    } else {
      // If nothing is found or it's invalid, set default and save
      localStorage.setItem("lang", "en");
    }
  }, []);

  // Handle change and save to localStoragepare
  const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = event.target.value;
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    // Optional: Reload window or trigger context update here if necessary
    console.log(`Language set to: ${newLang}`);

    const translations = await loadLanguage();
    parentSetLang(translations);
  };

  return (
    <div className="flex items-center text-sm dark:text-gray-200">
      <select
        id="lang-selector"
        value={lang}
        onChange={handleChange}
        className="
          appearance-none
          bg-zinc-100 dark:bg-zinc-800
          border border-transparent
          rounded-full 
          py-1.5 px-3 
          cursor-pointer 
          text-zinc-700 dark:text-gray-200
          shadow-md
          ring-1 ring-zinc-300 dark:ring-zinc-700
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transition-all duration-300
          text-sm
        "
      >
        <option value="en">English (EN)</option>
        <option value="ro">Română (RO)</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
