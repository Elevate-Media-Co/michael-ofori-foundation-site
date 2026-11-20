import Link from "next/link";
import { PageIntro } from "@/components/editorial";
import { pageMetadata } from "@/lib/metadata";

const description = "Find upcoming events and opportunities to get involved with the Michael Ofori M.D. Foundation.";
export const metadata = pageMetadata("Events", description, "/events");

export default function EventsPage() {
  return (
    <>
      <PageIntro label="Community Events" title="Join us at our events" summary={description} />
      <section className="band">
        <div className="wrap events-panel">
          <h2>Upcoming events</h2>
          <p className="lead">Confirmed event dates, locations, and ways to take part will be posted here.</p>
          <div className="actions">
            <Link className="button button-primary" href="/contact?inquiry=events">Ask about events</Link>
            <Link className="button button-outline" href="/get-involved#volunteer">Explore volunteering</Link>
          </div>
        </div>
      </section>
    </>
  );
}
