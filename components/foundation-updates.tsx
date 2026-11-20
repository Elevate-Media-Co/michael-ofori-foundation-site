import Link from "next/link";
import { PhotoFrame } from "@/components/editorial";
import { foundationUpdates, type FoundationUpdate } from "@/lib/updates";

export function UpdateCard({ update }: { update: FoundationUpdate }) {
  return (
    <li className="update-card">
      <Link href={`/updates/${update.slug}`}>
        <PhotoFrame
          photo={{ ...update.photo, alt: "" }}
          className="update-image"
          sizes="(max-width: 740px) 95vw, (max-width: 1100px) 44vw, 420px"
        />
        <div className="update-card-copy">
          <p className="update-category">{update.category}</p>
          <h3>{update.title}</h3>
          <p>{update.summary}</p>
        </div>
      </Link>
    </li>
  );
}

export function CommunityUpdates() {
  return (
    <section className="band tint" aria-label="Events and updates">
      <div className="wrap community-updates">
        <div className="home-events">
          <p className="eyebrow">Community Events</p>
          <h2>Join us at our events</h2>
          <p>Check back for event dates and opportunities to meet the Foundation and support its work.</p>
          <Link className="text-link" href="/events">View events</Link>
        </div>
        <div className="home-updates">
          <div className="focus-head">
            <h2>Latest news &amp; updates</h2>
            <Link className="text-link" href="/updates">View all updates</Link>
          </div>
          <ul className="update-grid home-update-grid">
            {foundationUpdates.slice(0, 2).map(update => <UpdateCard key={update.slug} update={update} />)}
          </ul>
        </div>
      </div>
    </section>
  );
}
