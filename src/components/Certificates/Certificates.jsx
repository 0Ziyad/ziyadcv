import React from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import "./Certificates.css";

function Certificates() {
  const { t } = useLanguage();
  const certificates = t.certificates.items;

  return (
    <section id="certificates" className="section certificates">
      <h2 className="section__title">{t.certificates.title}</h2>
      {!certificates.length ? (
        <p className="certificates__empty">{t.certificates.empty}</p>
      ) : (
        <div className="certificates__grid">
          {certificates.map((cert) => {
            const content = (
              <>
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                <span>{cert.date}</span>
              </>
            );

            return cert.file ? (
              <a
                key={cert.title}
                className="certificate"
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            ) : (
              <div key={cert.title} className="certificate">
                {content}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Certificates;
