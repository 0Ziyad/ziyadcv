import React from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import "./Education.css";

function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="section education">
      <h2 className="section__title">{t.education.title}</h2>
      <div className="education__grid">
        <div className="education__card">
          <h3>{t.education.educationLabel}</h3>
          {t.education.degrees.map((item) => (
            <div className="education__entry" key={item.degree}>
              <p className="education__degree">{item.degree}</p>
              <p className="education__school">{item.school}</p>
              <span className="education__period">{item.period}</span>
            </div>
          ))}
        </div>

        <div className="education__card">
          <h3>{t.education.languagesLabel}</h3>
          {t.education.languages.map((lang) => (
            <div className="education__entry" key={lang.name}>
              <p className="education__degree">{lang.name}</p>
              <span className="education__period">{lang.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
