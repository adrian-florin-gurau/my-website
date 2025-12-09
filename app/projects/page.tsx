"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import BackButton from "@/components/BackButton";
import Header1 from "@/components/Header1";
import { loadLanguage } from "@/content/lang";
import ph from "../../content/placeholder.json";
import ct from "../../content/constants.json";
import rt from "../../content/routes.json";
import Header2 from "@/components/Header2";
import Paragraph from "@/components/Paragraph";
import Button from "@/components/Button";
import { GitHubIcon } from "@/components/Icons";
import Delimiter from "@/components/Delimiter";
import HomeButton from "@/components/HomeButton";

export default function Projects() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [cssLoaded, setCssLoaded] = useState(false);

  const [lang, setLang] = useState({ ...ph });

  useEffect(() => {
    loadLanguage().then((translations) => {
      setLang(translations);
    });
  }, []);

  useEffect(() => {
    // A brief delay to simulate CSS load or DOM readiness.
    const timer = setTimeout(() => setCssLoaded(true), 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!cssLoaded) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen h-full items-center justify-start bg-zinc-50 font-sans dark:bg-black">
      <div className="mt-5">
        <HomeButton />
      </div>

      <div className="mt-5">
        <BackButton />
      </div>

      <Header1 text={lang.projectsTitle} />

      {rt.projects.map((project, index) => (
        <div
          key={index}
          className="w-[calc(100%-40px)] border-2 h-min rounded-4xl m-5 p-5"
        >
          <Header2 text={project.name} />
          <Paragraph text={project.description} />
          <Delimiter />
          <div className="flex w-full flex-row items-center justify-center gap-4 flex-wrap pb-4">
            <Button
              label={ct.githubLabel}
              link={project.link}
              icon={GitHubIcon}
              mode="external"
            />
          </div>
          <Paragraph text={`Languages: ${project.langs.join(" | ")}`} />
          {project.tools.length > 0 ? (
            <Paragraph text={`Tools: ${project.tools.join(" | ")}`} />
          ) : null}
          <Delimiter />
          <Paragraph text={project.content} />
        </div>
      ))}

      {showScrollButton && (
        <button onClick={scrollToTop} className="scroll-button">
          <ArrowUp size={24} />
        </button>
      )}

      <style jsx>{`
        .scroll-button {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #800080;
          color: #000;
          border: none;
          padding: 12px;
          border-radius: 50%;
          box-shadow: 0 0 10px #800080;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .scroll-button:hover {
          background-color: #500050;
        }
      `}</style>
    </div>
  );
}
