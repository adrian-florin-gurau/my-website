"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { loadLanguage } from "../content/lang.js";
import ph from "../content/placeholder.json";
import ct from "../content/constants.json";
import rt from "../content/routes.json";
import {
  MailIcon,
  LinkedInIcon,
  GitHubIcon,
  MonitorIcon,
} from "@/components/Icons";
import LanguageSelector from "@/components/LanguageSelector";
import AnimatedBackground from "@/components/AnimatedBackground";
import Title from "@/components/Title";
import Button from "@/components/Button";
import InfoText from "@/components/InfoText.tsx";
import MacControls from "@/components/MacControls";
import Header1 from "@/components/Header1";
import Header2 from "@/components/Header2";
import Paragraph from "@/components/Paragraph";
import Delimiter from "@/components/Delimiter";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const [isZooming, setIsZooming] = useState(false);
  const [lang, setLang] = useState({ ...ph });

  useEffect(() => {
    loadLanguage().then((translations) => {
      setLang(translations);
    });
    if (pathname === rt.home) {
      setIsZooming(false);
    }
  }, [pathname]);

  const handleTransition = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    sessionStorage.setItem("fromHome", "true");
    setIsZooming(true);
  };

  return (
    <motion.div
      className="flex flex-col min-h-screen max-h-screen items-center justify-between bg-zinc-50 font-sans dark:bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1, opacity: 1 }}
        animate={
          isZooming ? { scale: 15, opacity: 0 } : { scale: 1, opacity: 1 }
        }
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <AnimatedBackground />
      </motion.div>

      <motion.div
        className="flex flex-col min-h-screen items-center justify-between font-sans gap-5"
        initial={{ scale: 1, opacity: 1 }}
        animate={
          isZooming ? { scale: 15, opacity: 0 } : { scale: 1, opacity: 1 }
        }
        transition={{ duration: 1.5, ease: "easeInOut" }}
        onAnimationComplete={() => {
          const prev = isZooming;
          setIsZooming(false);
          if (prev) router.push(rt.projectsRoute);
        }}
      >
        <div>
          <InfoText text={lang.devNotification} />
          <InfoText text={ct.version} />
        </div>

        {/* Outer Container: The Animated "Gradient Border" Wrapper */}
        <main
          className="
        relative
        h-screen w-full max-w-7xl 
        p-0
        overflow-hidden
        rounded-xl
      "
        >
          {/* The Actual Rotating Gradient Element (Background Layer) */}
          <div
            className="
            absolute inset-[-1000%] z-0
            bg-[conic-gradient(from_0deg,red,orange,blue,red)] 
            animate-gradient-spin 
        "
          />

          {/* Inner Container: The "Content Area" (Masking Layer) */}
          <div
            className="
          m-2 sm:m-3 md:m-4 
          relative z-10 
          h-[calc(100vh-135px)]
          flex flex-col
          bg-white dark:bg-black sm:items-start 
          rounded-[10px]
          p-4
        "
          >
            {/* --- App Bar/Window Controls --- */}
            <div className="w-full flex justify-start items-center space-x-2 pb-4 mb-4 border-b border-gray-300 dark:border-zinc-800">
              <MacControls />
              <div className="ml-3">
                <Title texts={[lang.portofolio, lang.workspace, lang.spot]} />
              </div>
              <div className="ml-auto flex gap-2">
                <LanguageSelector parentSetLang={setLang} />
              </div>
            </div>
            {/* --- END: App Bar/Window Controls --- */}

            {/* --- Scrollable Content Area --- */}
            <div className="flex-1 overflow-y-auto w-full flex flex-col items-center sm:items-start">
              <Header1 text={ct.name} />
              <Paragraph text={lang.function} />
              <Delimiter />

              <Header2 text={lang.aboutTitle} />
              <Paragraph text={lang.aboutText} />
              <Delimiter />

              {/* --- Projects Section --- */}

              <Header2 text={lang.projectsTitle} />
              <Paragraph text={lang.projectsGeneralText} />
              <div className="flex w-full flex-row items-center justify-center gap-4 flex-wrap pb-4">
                <Button
                  link={ct.githubLink}
                  label={ct.githubLabel}
                  icon={GitHubIcon}
                  mode="external"
                />
              </div>

              <Paragraph text={lang.projectsChoiceText} />
              <div className="flex w-full flex-row items-center justify-center gap-4 flex-wrap pb-4">
                <Button
                  link={rt.projectsRoute}
                  label={rt.projectsLabel}
                  icon={MonitorIcon}
                  mode="internal"
                  onClick={handleTransition}
                />
              </div>
              <Delimiter />

              {/* --- END: Projects Section --- */}

              <Header2 text={lang.languagesTitle} />
              {lang.languages.map((language, index) => (
                <Paragraph
                  key={index}
                  text={`${language.name} - ${language.gradeLabel} (${language.gradeNumeric})`}
                />
              ))}
              <Delimiter />

              <Header2 text={lang.softSkillsTitle} />
              {lang.softSkills.map((softSkill, index) => (
                <Paragraph key={index} text={softSkill} />
              ))}
              <Delimiter />

              <Header2 text={lang.contactTitle} />
              {/* --- Contact Buttons with Icons and Hover Effects --- */}
              <div className="flex w-full flex-row items-center justify-center gap-4 flex-wrap pb-4">
                <Button
                  link={ct.emailLink}
                  label={ct.emailLabel}
                  icon={MailIcon}
                  mode="external"
                />
                <Button
                  link={ct.linkedinLink}
                  label={ct.linkedinLabel}
                  icon={LinkedInIcon}
                  mode="external"
                />
              </div>
              {/* --- END: Contact Buttons --- */}
            </div>
            {/* --- End Scrollable Content Area --- */}
          </div>
        </main>

        <div>
          <InfoText text={`${lang.lastUpdatedLabel}: ${ct.lastUpdated}`} />
          <InfoText text={lang.themeInfoMessage} />
        </div>
      </motion.div>
    </motion.div>
  );
}
