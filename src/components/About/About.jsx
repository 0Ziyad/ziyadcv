import React from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import "./About.css";

function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section about">
      <h2 className="section__title">{t.about.title}</h2>
      <div className="about__card">
        <p>{t.bio}</p>
      </div>
    </section>
  );
}

export default About;
