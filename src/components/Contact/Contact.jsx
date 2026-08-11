import React from "react";
import { links } from "../../data/content";
import { useLanguage } from "../../i18n/LanguageContext";
import "./Contact.css";

const fields = [
  { key: "email", href: (v) => `mailto:${v}` },
  { key: "phone", href: (v) => `tel:${v}` },
  { key: "linkedin", href: (v) => v },
  { key: "github", href: (v) => v },
];

function Contact() {
  const { t } = useLanguage();
  const visible = fields.filter((field) => links[field.key]);

  return (
    <section id="contact" className="section contact">
      <h2 className="section__title">{t.contact.title}</h2>
      {visible.length === 0 ? (
        <p className="contact__empty">{t.contact.empty}</p>
      ) : (
        <div className="contact__grid">
          {visible.map((field) => (
            <a
              key={field.key}
              className="contact__item"
              href={field.href(links[field.key])}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact__label">
                {t.contact.labels[field.key]}
              </span>
              <span className="contact__value">{links[field.key]}</span>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}

export default Contact;
