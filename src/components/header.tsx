'use client';

import NavLink from "./nav-link";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";

export default function Header() {
  const { t } = useLanguage();

  return (
    <nav className="bg-blue-500 px-3 py-3 sm:px-6 sm:py-4">
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div
          id="header1"
          className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-base sm:text-lg md:text-xl"
        >
          <NavLink href="/">{t("nav.home")}</NavLink>
          <NavLink href="/projects">{t("nav.projects")}</NavLink>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}