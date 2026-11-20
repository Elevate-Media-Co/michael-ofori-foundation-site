import { PageIntro, PhotoFrame } from "@/components/editorial";
import { boardMembers } from "@/lib/board";
import { pageMetadata } from "@/lib/metadata";

const description = "Meet the founder and directors of the Michael Ofori M.D. Foundation.";
export const metadata = pageMetadata("Board of Directors", description, "/board-of-directors");

export default function BoardOfDirectorsPage() {
  return (
    <>
      <PageIntro
        label="Foundation Leadership"
        title="Board of Directors"
        summary={description}
      />

      <section className="band board-section" aria-label="Foundation leadership profiles">
        <ul className="wrap board-grid">
          {boardMembers.map((member) => (
            <li key={member.name} className="board-card">
              {member.photo ? (
                <PhotoFrame
                  photo={{ src: member.photo, alt: "", position: member.photoPosition }}
                  className="board-portrait"
                  sizes="(max-width: 640px) 90vw, (max-width: 1000px) 43vw, 438px"
                />
              ) : (
                <div className="board-portrait board-initials" aria-hidden="true">
                  <span>{member.initials}</span>
                </div>
              )}
              <div className="board-card-copy">
                <p className="board-role">{member.role}</p>
                <h2>{member.name}</h2>
                {member.bio && (
                  <div className="board-bio">
                    {member.bio.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                )}
                {member.linkedIn && (
                  <a className="text-link board-profile-link" href={member.linkedIn}>
                    {member.name} on LinkedIn
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
