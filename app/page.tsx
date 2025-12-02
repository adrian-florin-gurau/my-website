"use client";

import { loadLanguage } from "../content/lang.js";
import ph from "../content/placeholder.json";
import ct from "../content/constants.json";
import rt from "../content/routes.json";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageSelector } from "@/components/LanguageSelector";

const MailIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
    <path d="M22 6L12 13L2 6" />
  </svg>
);

const LinkedinIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.418 2.867 8.163 6.83 9.48.5.092.682-.217.682-.482 0-.236-.008-.864-.013-1.795-2.782.601-3.37-1.34-3.37-1.34-.454-1.157-1.107-1.465-1.107-1.465-.907-.62.068-.608.068-.608 1.002.071 1.531 1.025 1.531 1.025.891 1.529 2.342 1.087 2.91.832.091-.645.353-1.087.643-1.336-2.22-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.272.098-2.645 0 0 .84-.268 2.75 1.029A9.458 9.458 0 0 1 12 6.844c.85.004 1.701.114 2.493.344 1.909-1.297 2.748-1.029 2.748-1.029.546 1.373.202 2.392.099 2.645.64.698 1.028 1.591 1.028 2.682 0 3.837-2.337 4.686-4.566 4.935.359.307.681.916.681 1.849 0 1.334-.012 2.41-.012 2.745 0 .268.18.577.688.48C19.136 20.177 22 16.43 22 12.017 22 6.484 17.52 2 12 2z" clipRule="evenodd"/>
  </svg>
);

const MonitorIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

export default function Home() {
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
  `;

  let [lang, setLang] = useState({...ph});

  useEffect(() => {
    loadLanguage().then(translations => {
      setLang(translations);
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen items-center justify-between bg-zinc-50 font-sans dark:bg-black">
      
      <div>
      <p className="opacity-30 text-xs font-bold w-full text-center">{lang.devNotification}</p>
      <p className="opacity-30 text-xs font-bold w-full text-center">{ct.version}</p>
      </div>

      {/* Outer Container: The Animated "Gradient Border" Wrapper */}
      <main className="
        relative
        max-h-[640px] w-full max-w-7xl 
        p-0
        overflow-hidden
        rounded-xl
      ">
        
        {/* The Actual Rotating Gradient Element (Background Layer) */}
        <div className="
            absolute inset-[-1000%] z-0
            bg-[conic-gradient(from_0deg,red,orange,blue,red)] 
            animate-gradient-spin 
        "/>
        
        {/* Inner Container: The "Content Area" (Masking Layer) */}
        <div className="
          m-2 sm:m-3 md:m-4 
          relative z-10 
          h-full max-h-[610px] 
          flex flex-col /* Ensures header and content are stacked vertically */
          bg-white dark:bg-black sm:items-start 
          rounded-[10px]
          p-4 /* General padding for the whole inner box */
        ">
          
          {/* --- App Bar/Window Controls --- */}
          <div className="w-full flex justify-start items-center space-x-2 pb-4 mb-4 border-b border-gray-300 dark:border-zinc-800">
            {/* Close (X) */}
            <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition duration-150 cursor-pointer shadow-md" 
                 title="Close"/>
            {/* Minimize (-) */}
            <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition duration-150 cursor-pointer shadow-md" 
                 title="Minimize"/>
            {/* Maximize/Restore (Square) */}
            <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition duration-150 cursor-pointer shadow-md" 
                 title="Maximize"/>

            <div className="ml-auto flex gap-2">
              <LanguageSelector parentSetLang={setLang} />
            </div>
          </div>
          {/* --- END: App Bar/Window Controls --- */}
          
          {/* --- Scrollable Content Area --- */}
          <div className="flex-1 overflow-y-auto w-full flex flex-col items-center sm:items-start">
            
            <h1 className="text-3xl md:text-6xl lg:text-7xl xl:text-8xl dark:text-white font-bold glowy-text-filled w-full text-center pb-3">{ct.name}</h1>
            
            <p className="text-1xl md:text-2xl font-bold w-full text-center">{lang.function}</p>

            <div className="w-full flex justify-start items-center space-x-2 pb-4 mb-4 border-b border-gray-300 dark:border-zinc-800"></div>

            <h2 className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl dark:text-white font-bold glowy-text w-full text-center pb-3">{lang.aboutTitle}</h2>

            <p className="text-1xl md:text-2xl font-bold w-full text-center">{lang.aboutText}</p>

            <div className="w-full flex justify-start items-center space-x-2 pb-4 mb-4 border-b border-gray-300 dark:border-zinc-800"></div>

            {/* --- Projects Section --- */}

            <h2 className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl dark:text-white font-bold glowy-text w-full text-center pb-3">{lang.projectsTitle}</h2>

            <p className="text-1xl md:text-2xl font-bold w-full text-center pb-3">{lang.projectsGeneralText}</p>

            <div className="flex w-full flex-row items-center justify-center gap-4 flex-wrap pb-4">
              <a href={ct.githubLink} target="_blank" className={buttonClasses}>
                <GithubIcon className="w-5 h-5" />
                {ct.githubLabel}
              </a>
            </div>

            <p className="text-1xl md:text-2xl font-bold w-full text-center pb-3">{lang.projectsChoiceText}</p>

            <div className="flex w-full flex-row items-center justify-center gap-4 flex-wrap pb-4">
              <Link href={rt.projects} target="_self" className={buttonClasses}>
                <MonitorIcon className="w-5 h-5" />
                {rt.projectsLabel}
              </Link>
            </div>

            <div className="w-full flex justify-start items-center space-x-2 pb-4 mb-4 border-b border-gray-300 dark:border-zinc-800"></div>

            {/* --- END: Projects Section --- */}

            <h2 className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl dark:text-white font-bold glowy-text w-full text-center pb-3">{lang.contactTitle}</h2>
            
            {/* --- Contact Buttons with Icons and Hover Effects --- */}
            <div className="flex w-full flex-row items-center justify-center gap-4 flex-wrap pb-4">
              <a href={ct.emailLink} target="_blank" className={buttonClasses}>
                <MailIcon className="w-5 h-5" />
                {ct.emailLabel}
              </a>
              <a href={ct.linkedinLink} target="_blank" className={buttonClasses}>
                <LinkedinIcon className="w-5 h-5" />
                {ct.linkedinLabel}
              </a>
            </div>
            {/* --- END: Contact Buttons --- */}

          </div>
          {/* --- End Scrollable Content Area --- */}

        </div>

      </main>

      <div>
        <p className="opacity-30 text-xs font-bold w-full text-center">{`${lang.lastUpdatedLabel}: ${ct.lastUpdated}`}</p>
        <p className="opacity-30 text-xs font-bold w-full text-center">{lang.themeInfoMessage}</p>
      </div>
    </div>
  );
}