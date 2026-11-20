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
                {member.bio && <p className="board-bio">{member.bio}</p>}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
