import React from "react";
import { links } from "../../data/content";
import { useLanguage } from "../../i18n/LanguageContext";
import "./Hero.css";

function Hero() {
  const { t } = useLanguage();

  const initials = t.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <div className="hero__photo">
          <img
            src={links.photo}
            alt={t.name}
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextSibling.style.display = "flex";
            }}
          />
          <div className="hero__photo-fallback">{initials}</div>
        </div>

        <h1 className="hero__name">{t.name}</h1>
        <p className="hero__title">{t.title}</p>
        {t.location && <p className="hero__location">{t.location}</p>}
        <p className="hero__bio">{t.bio}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href={links.cv} download>
            {t.hero.downloadCv}
          </a>
          <a className="btn btn--outline" href="#contact">
            {t.hero.contactMe}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
