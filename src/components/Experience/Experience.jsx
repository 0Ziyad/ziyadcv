import React from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import "./Experience.css";

function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section experience">
      <h2 className="section__title">{t.experience.title}</h2>
      <div className="experience__list">
        {t.experience.items.map((job) => (
          <div className="experience__item" key={`${job.company}-${job.role}`}>
            <div className="experience__head">
              <div>
                <h3>{job.role}</h3>
                <p className="experience__company">{job.company}</p>
              </div>
              <span className="experience__period">{job.period}</span>
            </div>
            <ul>
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
