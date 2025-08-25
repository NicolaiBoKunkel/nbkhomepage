'use client';

import NavLink from "./nav-link";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";

export default function Header() {
  const { t } = useLanguage();

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="space-x-4 text-xl lg:flex-grow">
        <NavLink href="/">{t("nav.home")}</NavLink>
        <NavLink href="/projects">{t("nav.projects")}</NavLink>
      </div>

      <div className="flex items-center gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </nav>
  );
}
