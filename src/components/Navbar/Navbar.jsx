import React, { useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, toggleLang } = useLanguage();

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#skills", label: t.nav.skills },
    { href: "#education", label: t.nav.education },
    { href: "#certificates", label: t.nav.certificates },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#top" className="navbar__brand">
          {t.name}
        </a>

        <nav className={`navbar__links ${open ? "is-open" : ""}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <button
            className="navbar__lang"
            onClick={toggleLang}
            aria-label="Toggle language"
          >
            {t.nav.langToggle}
          </button>
        </nav>

        <button
          className="navbar__toggle"
          aria-label="فتح القائمة"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
