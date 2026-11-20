import { Plus } from "lucide-react";
import Link from "next/link";

const stories = [
  {
    title: "Helping students stay in training",
    story: "A student can have the dedication to become a clinician and still struggle to afford the next term. Educational support can help aspiring medical and dental professionals stay on track toward graduation.",
    link: "Explore educational support",
    href: "/programs#education",
  },
  {
    title: "Giving care teams equipment they can use",
    story: "A community hospital may have the people and expertise to provide care and need equipment suited to its facilities. Support is most useful when it matches what the care team needs and what the facility can maintain.",
    link: "Explore equipment support",
    href: "/programs#hospital-equipment",
  },
  {
    title: "Backing local ideas for healthier communities",
    story: "A community organization knows which health questions people ask and what makes local services hard to reach. Its experience can guide education efforts that fit the people and places they serve.",
    link: "Explore community health support",
    href: "/programs#community-support",
  },
];

export function SupportStories() {
  return (
    <section className="band" id="support-stories" aria-labelledby="support-stories-title">
      <div className="wrap involvement-grid">
        <div className="support-story-intro">
          <p className="eyebrow">Stories of Hope &amp; Change</p>
          <h2 id="support-stories-title">What support can make possible.</h2>
          <p className="lead">Explore how the Foundation’s priorities connect to the needs of students, care teams, and communities.</p>
        </div>
        <div className="giving-faq support-stories">
          {stories.map(({ title, story, link, href }, index) => (
            <details key={href} name="foundation-support-stories" open={index === 0}>
              <summary>{title}<Plus size={19} aria-hidden="true" /></summary>
              <div className="support-story-body">
                <p>{story}</p>
                <Link className="text-link" href={href}>{link}</Link>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
