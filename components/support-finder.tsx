"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const audiences = [
  {
    id: "student",
    label: "Student",
    title: "Medical and dental education",
    description: "Learn about the Foundation’s educational support and ask about opportunities for students.",
    inquiry: "education",
    action: "Ask about student support",
  },
  {
    id: "facility",
    label: "Hospital or clinic",
    title: "Equipment and supplies",
    description: "Tell the Foundation what your facility needs, how it would be used, and who would manage it.",
    inquiry: "resources",
    action: "Discuss equipment or supplies",
  },
  {
    id: "community",
    label: "Community organization",
    title: "Community health collaboration",
    description: "Share the local need, the people your organization serves, and a practical way to work together.",
    inquiry: "partnership",
    action: "Discuss a partnership",
  },
] as const;

export function SupportFinder() {
  const [selected, setSelected] = useState<(typeof audiences)[number]>(audiences[0]);

  return (
    <section className="tint support-finder">
      <div className="wrap support-finder-grid">
        <div>
          <h2>Find the right support.</h2>
          <fieldset>
            <legend>Which best describes you?</legend>
            <div className="gift-options support-options">
              {audiences.map((audience) => (
                <label key={audience.id}>
                  <input className="sr-only" type="radio" name="support-audience" checked={selected.id === audience.id} onChange={() => setSelected(audience)} />
                  <span>{audience.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
        <div className="support-answer" aria-live="polite" aria-atomic="true">
          <h3>{selected.title}</h3>
          <p>{selected.description}</p>
          <Link className="text-link" href={`/contact?inquiry=${selected.inquiry}`}>
            {selected.action} <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
