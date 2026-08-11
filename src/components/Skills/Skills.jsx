import React from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import "./Skills.css";

function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section skills">
      <h2 className="section__title">{t.skills.title}</h2>
      <div className="skills__groups">
        {t.skills.groups.map((group) => (
          <div className="skill-group" key={group.category}>
            <h3 className="skill-group__title">{group.category}</h3>
            <div className="skill-group__chips">
              {group.items.map((item) => (
                <span className="skill-chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
