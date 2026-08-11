import React from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import "./Footer.css";

function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {year} {t.name} — {t.footer.rights}
      </p>
    </footer>
  );
}

export default Footer;
